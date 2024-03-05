//import { pharmacies, medicine } from "./dummy_data/data";
const sql = require("better-sqlite3");
const db = sql("medicine.db");
const pharmacies = [
    {
        title: "med-service",
        slug: "med-service-ua",
        logo: "https://online-apteka.com.ua/assets/img/new-logo.svg",
        url: "https://online-apteka.com.ua/ua/",
    },
    {
        title: "Apteka nizkih cen",
        slug: "anc-ua",
        url: "https://anc.ua/",
        logo: "https://storage.googleapis.com/static-storage/logo.svg",
    },
    {
        title: "dr.max",
        slug: "dr-max-sk",
        url: "https://www.drmax.sk/",
        logo: "https://www.drmax.sk/images/company-logo.svg",
    },
];

const medicine = [
    {
        slug: "daktacort-hydrocortisone-cream",
        title: "Daktacort hydrocortisone cream",
        description:
            "Soothing treatment for sweat rash or athlete's foot caused by fungi and bacteria.",
        image: "https://lloydspharmacy.com/cdn/shop/products/2813202_730x.progressive.jpg?v=1586373556",
        features:
            "Triple action steroid treatment. Reduces inflammation. Effective treatment of sweat rash and athlete's foot. Soothes itching and irritation. Targets the source",
        warnings:
            "Always read the patient information leaflet carefully before use. Do not use this medicine if you: have ever had a bad reaction to any of the ingredients or if you have any other skin problems such as cold sores, acne, herpes, chicken pox or shingles. Talk to your doctor or pharmacist if you: are taking oral anticoagulants (drugs used to thin the blood) or are pregnant and/or breastfeeding. Do not use on broken skin. Not for children under 10 years old, unless instructed by your doctor. If product gets in your eyes, rinse immediately. If any irritation occurs, discontinue use. Keep the product out of sight and reach of children. If symptoms persist, talk to your doctor. Do not use the medicine after the expiry date",
        suitable_for: "Adults and children over 10 years old",
        ingredients:
            "Active ingredients:Miconazole Nitrate 20 mg, Hydrocortisone Acetate equivalent to 10 mg of hydrocortisone.Other ingredients:Macrogol 6-32 Stearate, Glycol Stearate, Oleoyl Macrogolglycerides, Liquid Paraffin, Butylhydroxyanisole, Benzoic Acid, Disoddium Edetate, Sodium Hydroxide, Purified Water.",
        prescription:
            "Wash the infected area and dry with a clean towel.Apply the cream to the infected area and the surrounding skin twice a day for no more than 7 days.",
        specification: "15g",
    },
    {
        slug: "ovex-family-pack",
        title: "Ovex family pack",
        description:
            "A single tablet treatment for threadworms for the whole family. The Ovex family pack contains 4 single tablet treatments for threadworms. Threadworms are small, white thread-like worms that live in your gut and can be seen in your stool (poo). They are harmless but commonly cause itchiness and irritation around the anus, especially at night-time.",
        image: "https://lloydspharmacy.com/cdn/shop/products/2059558_730x.png?v=1586373541",
        features:
            "Effectively kills threadworms. Family sized pack. Orange flavoured",
        warnings:
            "Do not take if you are allergic to any of the ingredients. Not suitable for children under 2 years old. Not suitable for pregnant women. Talk to your doctor or pharmacist before if you are taking any other medication. Always read the patient information leaflet carefully before use. Keep out of sight and reach of children. Do not use after expiry date. If symptoms persist, please speak to your doctor. Seek advice your doctor or pharmacist for advice before taking this medicine if you are breastfeeding",
        suitable_for: "Adults and children over 2 years old",
        ingredients:
            "Active ingredients: 100 mg Mebendazole. Other ingredients: Microcrystalline Cellulose, Sodium Starch Glycolate, Sodium Saccharin, Sodium Lauryl Sulphate, Orange Flavour and Orange Yellow S (E110).",
        prescription:
            "The treatment is a single tablet per person for oral administration. Adults and children over two years should take one tablet only. The tablets are orange flavoured and may be chewed or swallowed whole (can be crushed if giving to a young child).",
        specification: "4 tablets",
    },
    {
        slug: "panadol-500",
        title: "Panadol advance pain relief 500mg paracetamol tablets",
        description:
            "An effective pain reliever. Panadol advance tablets are an effective pain reliever and fever reducer which are suitable for all ages from 10 years old.",
        image: "https://lloydspharmacy.com/cdn/shop/products/3406535_730x.progressive.jpg?v=1634822747",
        features:
            "Fast absorption. For headache, muscle pain and aches & pain of colds & flu. Easy on the stomach",
        warnings:
            "Not suitable for children under 10 years of age. Children should not be given Panadol advance pain relief 500mg paracetamol tablets for more than 3 days without consulting a doctor. These doses should not be repeated more frequently than every four hours no should more than four doses be given in any 24 hour period. Oral administration only. If you have any questions, or if there is anything you do not understand, ask your pharmacist. Do not give to children under 6 years old. Please read right through the information on the outside and inside of this pack before you start using this medicine",
        suitable_for:
            "Adults including the elderly and children 10 years and over",
        ingredients:
            "Each tablets contains Paracetamol 500 mg. Also contains a mixture of Sodium Methyl (E219), Sodium Ethyl (E215) and Sodium Propyl (E217) Parahydroxybenzoates.",
        prescription:
            "Adults, including the elderly and children 16 years and over: One or two tablets to be taken up to four times daily as required. Children aged 10-15 years old: Take one tablet up to four times daily as required.",
        specification: "16 tablets. 30 tablets",
    },
    {
        slug: "nytol-original",
        title: "Nytol® original 25mg caplets",
        description:
            "Nytol is used to relieve temporary sleeping difficulties. Contains the active ingredients Diphenhydramine to help induce sleep in those experiencing temporary insomnia.",
        image: "https://lloydspharmacy.com/cdn/shop/products/3824752_730x.progressive.jpg?v=1586374200",
        features:
            "20 easy swallow tablets. 10 day supply. Clinically proven night time sleep aid",
        warnings:
            "This medicine may make you sleepy. If this happens do not drive or use tools or machines. Do not drink alcohol. Keep out of the sight and reach of children. Do not exceed the stated dose. Do not give to children under 16 years of age",
        suitable_for: "Adults and children over 16. Temporary insomnia",
        ingredients:
            "Each Nytol Tablet contains Diphenhydramine 25mg. Contains Lactose - see leaflet for more information.",
        prescription:
            "Swallow two tablets with water 20 minutes before you go to bed.",
        specification: "20 x Caplets",
    },
    {
        slug: "emla-numbing-cream-5",
        title: "Emla numbing cream 5%",
        description:
            "Numbs skin before needle procedures. Emla contains the two active substances, lidocaine and prilocaine, known as local anaesthetics. Together these ingredients create a numbing effect. When applied to clean, unbroken skin, Emla will numb the skin for a short time. It can be used to ease the pain of procedures that use needles, such as injections, blood tests and immunisations. The pain caused by procedures using needles will not be felt, however you may still experience feelings of pressure and touch.",
        image: "https://lloydspharmacy.com/cdn/shop/products/6025139_112d1b07-a395-436e-a83b-5f168acc1bde_730x.progressive.jpg?v=1651563614",
        features:
            "Temporarily numbs skin. Numbing effects can be felt in an hour. Can be used before injections or blood tests",
        warnings:
            "Keep out of the sight and reach of children. For topical anaesthesia of the skin. Read carefully the patient information leaflet and exactly follow the instructions provided for your situation. Store below 30°C and do not freeze. The length of time before your procedure that Emla should be applied to the skin can vary with age and according to the procedure. If using for a child less than 1 year old, you must remove the cream after one hour. You may experience a mild reaction where the cream has been used, which is normal and will disappear in a short while. This includes; paleness or redness of the skin, slight puffiness, initial burning or itching. If you experience any troublesome or unusual effects while you are using Emla Cream, stop using it and check with your doctor or pharmacist as soon as possible. Avoid getting EMLA Cream in the eyes, as it may cause irritation. If you accidentally get EMLA Cream in your eye, you should immediately rinse it well with lukewarm water or salt (sodium chloride) solution. Be careful to avoid getting anything in your eye until feeling returns. EMLA Cream should not be applied to an impaired eardrum.",
        suitable_for: "Adults. Children",
        ingredients:
            "Lidocaine (25mg) and Prilocaine (25mg), Macrogolglycerol Hydroxystearate, Carbomer 974P, Sodium Hydroxide and Purified Water.",
        prescription:
            "Read the enclosed patient information leaflet before you apply the numbing agent. Apply Emla cream directly to skin, 60 minutes before the procedure. Cover the cream with an air-tight, non-absorbent and transparent occlusive dressing, so the active ingredients soak into the skin and do not get wiped off.",
        specification: "30g",
    },
    {
        slug: "piriton-allergy-tablets",
        title: "Piriton allergy tablets",
        description:
            "Treats the allergic symptoms of hay fever and other allergies. Piriton allergy tablets is an antihistamine containing Chlorphenamine Maleate which can help to relieve the symptoms of some allergies and itchy skin rashes. Piriton allergy helps with the following: Hayfever, skin allergies, food allergies, pet allergies, house dust mite allergies, insect bites, mould spore allergies, nettle rash, hives, heat rash, prickly heat and dermatitis, reactions to food, food additives, medicines, insect bites",
        image: "https://lloydspharmacy.com/cdn/shop/products/5000198520507PiritonAllergy30Tablets_SIMPLIFIED_LOZ_730x.progressive.jpg?v=1641373389",
        features:
            "Absorbs rapidly. Relieves sneezing and itchy eyes. Non-drowsy",
        warnings:
            "You have taken monoamine oxidase inhibitors (MAOIs) prescribed for depression in the last two weeks. Avoid drinking alcohol with this medicine. Do not drive or operate machinery if the syrup makes you feel drowsy, dizzy or if you experience blurred vision. Please consult your healthcare professional before using this medicine if you are currently pregnant, likely to get pregnant or breastfeeding. Please consult your healthcare professional if you are currently taking any other medicines as this may cause an interaction. If you think you may be allergic to any of the ingredients contained in this medicine, please seek medical advice before taking",
        suitable_for: "Adults. Children under 6 y.",
        ingredients:
            "Active ingredients: chlorphenamine maleate 4mg. Other ingredients: Lactose, Maize Starch, Yellow Iron Oxide (E172), Magnesium Stearate, Purified Water",
        prescription:
            "Adults and children over 12 years: Take 1 tablet 4 to 6 hourly. Maximum daily dose: 6 tablets (24mg) in any 24 hours. Children aged 6 - 12 years: Tale ½ tablet 4 to 6 hourly. Maximum daily dose: 3 tablets (12mg) in any 24 hours. Not recommended for children under the age of 6 years.",
        specification: "30 tablets",
    },
    {
        slug: "benacort-allergy-64",
        title: "Benacort 64mg allergy relief nasal spray",
        description:
            "Effective allergy relief that is easy-to-use. Benacort 64mg allergy relief nasal spray is a simple and effective nasal spray that works to help reduce inflammation that is caused by the effects of hay fever and other allergies. Formulate using budesonide which is apart of a group of medicines called corticosteroids, this allergy relief nasal spray reduces the levels of inflammation in the nose. This treats a blocked, runny, or stuffy nose.",
        image: "https://lloydspharmacy.com/cdn/shop/products/Benacort64mgNasalSpray_730x.progressive.jpg?v=1621506752",
        features:
            "Reduces inflammation. Easy-to-use. Daily use. Pocket sized. Idea for use during the pollen season. Reduces the effects of hay fever. Treats blocked, runny and stuffy noses",
        warnings:
            "Keep out of the sight and reach of children. Do not exceed the recommended daily dosage. Consult your doctor before use if you are or may be pregnant and/or breastfeeding, If you have had and infection in the nose or sinuses, nasal ulcers, nose surgery, frequent or heavy nose bleeds, have diabetes or are taking another form of corticosteroid medication please consult your doctor before use, Read enclosed leaflet carefully before use, Potential side effects from this nasal spray include: nasal irritation, nose bleeds, muscle cramp, ulcers in the nose, bruising, blurred vision, dry nose and stinging",
        suitable_for: "Adults over 18 years",
        ingredients:
            "Each Spray contains: 64 Micrograms of Budesonide. Also contains Disodium Edetate, Microcrystalline Cellulose (E460), Carboxymethyl-Cellulose Sodium (E466), Glucose Anhydrous, Hydrochloric Acid, Polysorbate 80 (E433), Purified Water and the Preservative Potassium Sorbate (E202)",
        prescription:
            "The recommended dosage for this nasal spray is 2 sprays into each nostril a day. This can be done in 2 different ways: 2 sprays into each nostril once a day. 1 spray into each nostril twice a day. Spray once in the morning by spraying twice into the nostrils and if the symptoms improve, reduce to spraying once into each nostril. When spraying twice a day, spray in the morning and in the evening. Ideally use Benacort as a preventative measure before coming into contact with the pollen.",
        specification: "10ml / 120 sprays",
    },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
    // {
    //     slug: "",
    //     title: "",
    //     description: "",
    //     image: "",
    //     features: "",
    //     warnings: "",
    //     suitable_for: "",
    //     ingredients: "",
    //     prescription: "",
    //     specification: "",
    // },
];

const medicine_pharmacy = [
    {
        medicine_slug: "piriton-allergy-tablets",
        pharmacy_slug: "med-service-ua",
        price: "2.25",
    },
    {
        medicine_slug: "daktacort-hydrocortisone-cream",
        pharmacy_slug: "med-service-ua",
        price: "1.5",
    },
    {
        medicine_slug: "ovex-family-pack",
        pharmacy_slug: "med-service-ua",
        price: "1.8",
    },
    {
        medicine_slug: "panadol-500",
        pharmacy_slug: "dr-max-sk",
        price: "2.5",
    },
    {
        medicine_slug: "benacort-allergy-64",
        pharmacy_slug: "anc-ua",
        price: "3",
    },
    {
        medicine_slug: "emla-numbing-cream-5",
        pharmacy_slug: "med-service-ua",
        price: "0.5",
    },
    {
        medicine_slug: "nytol-original",
        pharmacy_slug: "dr-max-sk",
        price: "0.5",
    },
    {
        medicine_slug: "piriton-allergy-tablets",
        pharmacy_slug: "dr-max-sk",
        price: "3.2",
    },

    {
        medicine_slug: "piriton-allergy-tablets",
        pharmacy_slug: "anc-ua",
        price: "1.2",
    },
    {
        medicine_slug: "benacort-allergy-64",
        pharmacy_slug: "med-service-ua",
        price: "1",
    },
    {
        medicine_slug: "emla-numbing-cream-5",
        pharmacy_slug: "dr-max-sk",
        price: "2.8",
    },
    {
        medicine_slug: "panadol-500",
        pharmacy_slug: "med-service-ua",
        price: "3.5",
    },
    {
        medicine_slug: "emla-numbing-cream-5",
        pharmacy_slug: "anc-ua",
        price: "7",
    },
    {
        medicine_slug: "nytol-original",
        pharmacy_slug: "anc-ua",
        price: "2.2",
    },
];

db.prepare(
    `
   CREATE TABLE IF NOT EXISTS pharmacies (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       logo TEXT NOT NULL,
       url TEXT NOT NULL
       
    )
`
).run();

db.prepare(
    `
   CREATE TABLE IF NOT EXISTS medicine (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       description TEXT NOT NULL,
       features TEXT NOT NULL,
       warnings TEXT NOT NULL,
       suitable_for TEXT NOT NULL,
       ingredients TEXT NOT NULL,
       prescription TEXT NOT NULL,
       specification TEXT NOT NULL

       
    )
`
).run();

db.prepare(
    `
   CREATE TABLE IF NOT EXISTS medicine_pharmacy (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
      
       medicine_slug  TEXT NOT NULL,
       pharmacy_slug  TEXT NOT NULL,
       price TEXT NOT NULL

       
    )
`
).run();

async function initData() {
    const stmt = db.prepare(`
      INSERT INTO pharmacies VALUES (
         null,
         @slug,
         @title,
         @url,
         @logo
  
      )
      
   `);

    for (const pharmacy of pharmacies) {
        stmt.run(pharmacy);
    }
    const stmt_med = db.prepare(
        `INSERT INTO medicine VALUES (
         null,
         @slug,
         @title,
         @image,
         @description,
         @features,
         @warnings,
         @suitable_for,
         @ingredients,
         @prescription,
         @specification
      )`
    );

    for (const med of medicine) {
        stmt_med.run(med);
    }

    const stmt_mph = db.prepare(`
      INSERT INTO medicine_pharmacy VALUES (
         null,
        
         @medicine_slug,
         @pharmacy_slug,
         @price      
  
      )
      
   `);

    for (const med of medicine_pharmacy) {
        stmt_mph.run(med);
    }
}

initData();
