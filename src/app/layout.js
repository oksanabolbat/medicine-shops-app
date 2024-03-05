import { Inter } from "next/font/google";
import "./globals.css";

import PharmaciesNav from "@/components/pharmacies-nav";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Medicine delivery",
    description: "Medicine delivery",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main>
                    <PharmaciesNav />
                    {children}
                </main>
            </body>
        </html>
    );
}
