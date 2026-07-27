import type Timeline from "../components/ui/Timeline.astro";
import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "Home",
        subtitle: "",
        isActive: true,
    },
    blog: {
        title: "Blog",
        subtitle: "Thoughts on physics, philosophy, and music.",
        isActive: false,
    },
    research: {
        title: "Research",
        subtitle: "A collection of research papers.",
        isActive: true,
    },
    honors: {
        title: "Honors & Certifications",
        subtitle: "Recognitions and technical certifications.",
        isActive: true,
    },
    projects: {
        title: "Code & Projects",
        subtitle: "Open source contributions and technological experiments.",
        isActive: false,
    },
    engineering: {
        title: "Engineering Projects",
        subtitle: "Applied industrial engineering solutions in process optimization, layout design, and automation.",
        isActive: true,
    },
    cv: {
        title: "Curriculum Vitae",
        subtitle: "Experience, skills, and education.",
        isActive: true,
    },
    timeline: {
        title: "Timeline",
        subtitle: "Key milestones in my academic and professional journey.",
        isActive: true,
    },
};
