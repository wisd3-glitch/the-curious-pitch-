import { sanityClient } from "sanity:client";
import { toHTML } from "@portabletext/to-html";

export const CATEGORIES: Record<string, string> = {
  controversies: "Controversies and debates",
  business: "The business of football",
  mysteries: "Football mysteries",
  untold: "Untold stories",
  tactics: "Tactics and stats",
};

const FIELDS = `title, "slug": slug.current, category, series, excerpt, coverImage, publishedAt, readTime, featured`;

export const getStories = (): Promise<any[]> =>
  sanityClient.fetch(`*[_type=="story" && defined(slug.current)] | order(publishedAt desc){${FIELDS}}`);

export const getStory = (slug: string): Promise<any> =>
  sanityClient.fetch(`*[_type=="story" && slug.current==$slug][0]{${FIELDS}, body, verdict}`, { slug });

// Builds a Sanity CDN image link without extra packages
export function img(src: any, w = 900): string {
  const ref: string | undefined = src?.asset?._ref;
  if (!ref) return "";
  const [, id, size, ext] = ref.split("-");
  const p = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
  const d = import.meta.env.PUBLIC_SANITY_DATASET || "production";
  return `https://cdn.sanity.io/images/${p}/${d}/${id}-${size}.${ext}?w=${w}&auto=format`;
}

export const fmtDate = (d?: string) =>
  d ? new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "";

export const bodyHtml = (body: any[] = []) =>
  toHTML(body, {
    components: {
      types: {
        image: ({ value }: any) => `<img src="${img(value, 1200)}" alt="${value.alt || ""}" loading="lazy">`,
      },
    },
  });
