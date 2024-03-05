import Link from "next/link";
import { getPharmacies } from "@/lib/data";

export default function PharmaciesNav() {
    const pharmacies = getPharmacies();
    return (
        <nav>
            <ul>
                {pharmacies.map((pharmacy) => (
                    <li key={pharmacy.slug}>
                        <Link href={`/shop/pharmacy/${pharmacy.slug}`}>
                            {pharmacy.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
