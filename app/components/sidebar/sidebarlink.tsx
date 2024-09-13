'use client'

import { Props } from "@/app/config/definition";

interface SideBarLinkProps extends Props {
    link: string;
}

export default function SideBarLink({link, children, styles=""}: Readonly<SideBarLinkProps>) {
    return(
        <a href={link} className={styles}>
            <span>{children}</span>
        </a>
    );
}