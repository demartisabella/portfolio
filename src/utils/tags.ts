import { getCollection } from 'astro:content';

export async function getAllTags() {
    const research = await getCollection('research');
    const engineering = await getCollection('engineering');
    const honors = await getCollection('honors');

    const allEntries = [...research, ...engineering, ...honors];
    const tags: Record<string, number> = {};

    allEntries.forEach(entry => {
        const entryTags = (entry.data as any).tags || [];
        entryTags.forEach((tag: string) => {
            const normalizedTag = tag.trim().toLowerCase();
            if (normalizedTag) {
                tags[normalizedTag] = (tags[normalizedTag] || 0) + 1;
            }
        });
    });

    return Object.entries(tags)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export async function getContentByTag(tag: string) {
    const normalizedSearchTag = tag.toLowerCase();

    const research = await getCollection('research');
    const engineering = await getCollection('engineering');
    const honors = await getCollection('honors');

    const filterFn = (entry: any) => {
        const entryTags = (entry.data as any).tags || [];
        return entryTags.some((t: string) => t.toLowerCase() === normalizedSearchTag);
    };

    return [
        ...research.filter(filterFn).map(e => ({ ...e, collection: 'research' })),
        ...engineering.filter(filterFn).map(e => ({ ...e, collection: 'engineering' })),
        ...honors.filter(filterFn).map(e => ({ ...e, collection: 'honors' })),
    ].sort((a, b) => {
        const dateA = new Date((a.data as any).date || 0);
        const dateB = new Date((b.data as any).date || 0);
        return dateB.getTime() - dateA.getTime();
    });
}
