import sql from "better-sqlite3";
const db = sql("medicine.db");

export const getPharmacies = () => {
    return db.prepare("SELECT * FROM pharmacies").all();
};

export const getMedicines = (pharmacy) => {
    if (pharmacy) {
        const medicines = db
            .prepare(
                `SELECT medicine.slug, medicine.description, medicine.image, medicine.title, medicine_pharmacy.price, pharmacies.title as pharmacy
FROM medicine
INNER JOIN medicine_pharmacy ON medicine.slug = medicine_pharmacy.medicine_slug
INNER JOIN pharmacies ON medicine_pharmacy.pharmacy_slug = pharmacies.slug
WHERE medicine_pharmacy.pharmacy_slug = ?`
            )
            .all(pharmacy);

        return medicines;
    } else {
        return db.prepare("SELECT * FROM medicine").all();
    }
};
