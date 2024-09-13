'use client'

import { Props } from "@/app/config/definition";

export default function SideBarHeader({children, styles=""}: Readonly<Props>) {
    return (
        <header className={styles}>
            {children}
        </header>
    );
}