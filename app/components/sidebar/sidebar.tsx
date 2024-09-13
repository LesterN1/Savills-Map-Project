'use client'

import { Props } from "@/app/config/definition";

export default function SideBar({children, styles=""}: Readonly<Props>) {
    return (
        <div className={`sidebar ${styles}`}>
            {children}
        </div>
    );
}