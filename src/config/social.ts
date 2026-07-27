import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [

    {
        name: "Mail",
        href: "mailto:demartisabella@gmail.com",
        linkTitle: `Send an email to Isabella`,
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/isabella-demarti/",
        linkTitle: `Isabella DeMarti on LinkedIn`,
        isActive: true, // Assuming Claude doesn't have a LinkedIn profile
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};