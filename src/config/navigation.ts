import type { NavLink } from "../types";

export const NAV_LINKS: NavLink[] = [
    { href: "/", label: "Home", isActive: true },
    { href: "/timeline", label: "Timeline", isActive: true },
    { href: "/research", label: "Research", isActive: true },
    { href: "/engineering", label: "Engineering Projects", isActive: true },
    { href: "/honors", label: "Honors & Certifications", isActive: true },
    { href: "/projects", label: "Code", isActive: false },
    { href: "/posts", label: "Blog", isActive: false },
    { href: "/cv", label: "CV", isActive: true },
];
