"use client";
import Link from "next/link";
import styles from "./navbarLinks.module.css"
import { usePathname } from "next/navigation";


const NavbarLinks=({items})=>{

    const pathName=usePathname();
    return (
            <Link href={items.path} key={items.title} className={`${styles.container} ${pathName===items.path && styles.active}`}>{items.title}</Link>
    )
}

export default NavbarLinks;