import MedicineList from "@/components/medicine-list";
import { getMedicines } from "@/lib/data";

export default function Home() {
    const medicines = getMedicines();
    return (
        <div>
            <MedicineList items={medicines} />
        </div>
    );
}
