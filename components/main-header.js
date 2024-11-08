import logoImg from "@/assets/logo.png";
import Image from "next/image";

import classes from "./main-header.module.css";
import NavLink from "@/components/nav-link";
import Link from "next/link";
export default function MainHeader() {
    return (
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image
                    src={logoImg}
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
                        <NavLink href="/meals">Browse Meals</NavLink>
                    </li>
                    <li>
                        <NavLink href="/community">Foodies Community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
