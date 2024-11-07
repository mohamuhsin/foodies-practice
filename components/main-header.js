import logoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

import classes from "./main-header.module.css";

export default function MainHeader() {
    return (
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image
                    src={logoImg.src}
                    alt="foodies logo"
                    width="1024"
                    height="1024"
                    priority
                />
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href="/meals">Browse Meals</Link>
                    </li>
                    <li>
                        <Link href="/community">Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
