import MedicineList from "@/components/medicine-list";
import { getMedicines } from "@/lib/data";

export default async function Page({ params }) {
    const medicines = await getMedicines(params.slug);

    return (
        <div>
            <MedicineList items={medicines} />
        </div>
    );
}
