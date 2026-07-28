import type { SiteConfig, ThemeConfig, SettingsConfig, UmamiAnalyticsConfig, AnalyticsConfig } from "../types";
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

export const SITE: SiteConfig = {
    website: "https://demartisabella.github.io/portfolio",
    author: "Isabella DeMarti",
    desc: "Personal portfolio and blog of Isabella DeMarti.",
    title: "Isabella DeMarti",
    postPerPage: 5,
    favicon: "`${BASE}/images/CleanLogo.svg",
    lang: "en",
};

export const THEME_CONFIG: ThemeConfig = {
    lightAndDark: true,
    themeLight: "light_default",
    themeDark: "dark_notepad",
};

export const SETTINGS: SettingsConfig = {
    showTagsInNavbar: true,
    showRSSInFooter: true,
    addDevToolsInProduction: true,
};

const umami: UmamiAnalyticsConfig = {
    websiteId: "", // e.g., 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    src: "https://cloud.umami.is/script.js", // Default Umami cloud script URL
}

export const ANALYTICS: AnalyticsConfig = {
    // Google Analytics 4 Measurement ID (e.g., 'G-XXXXXXXXXX')
    ga4Id: "",
    // Umami Analytics configuration
    umami: umami
};
