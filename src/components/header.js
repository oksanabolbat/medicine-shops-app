import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/shop">Shop</Link>
                    </li>
                    <li>
                        <Link href="/shopping-cart">Shopping cart</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
