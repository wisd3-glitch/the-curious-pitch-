import { sanityClient } from 'sanity:client';
import { toHTML } from '@portabletext/to-html';

// Paste your email provider's signup form URL here later.
export const NEWSLETTER_ACTION = '';

export const CATEGORIES = [
  { slug: 'controversies', title: 'Controversies and debates', chip: 'Controversies', tag: 'Debate', blurb: 'VAR, referees, awards' },
  { slug: 'business', title: 'The business of football', chip: 'Money', tag: 'Money', blurb: 'Transfers, wages, agents' },
  { slug: 'mysteries', title: 'Football mysteries', chip: 'Mysteries', tag: 'Mystery', blurb: 'Strange events, curious facts' },
  { slug: 'untold', title: 'Untold stories', chip: 'Untold stories', tag: 'Untold', blurb: 'Forgotten players, hidden history' },
  { slug: 'tactics', title: 'Tactics and stats', chip: 'Tactics', tag: 'Tactics', blurb: 'Breakdowns and numbers' },
];

export const SERIES = [
  { title: 'The Big Question', text: 'Football questions that start arguments.' },
  { title: 'Follow the Money', text: 'Where the cash in the game really goes.' },
  { title: 'What Really Happened?', text: 'Controversies and mysteries, investigated.' },
  { title: 'The Unpopular Opinion', text: 'Challenging what everyone agrees on.' },
  { title: 'Forgotten Football', text: 'Players, clubs and moments people overlooked.' },
];

export const catTitle = (slug: string) => CATEGORIES.find((c) => c.slug === slug)?.title ?? '';
export const catTag = (slug: string) => CATEGORIES.find((c) => c.slug === slug)?.tag ?? '';

export const fmtDate = (d?: string) =>
  d ? new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';

export const readMinutes = (s: any) =>
  s?.readTime || (s?.words ? Math.max(1, Math.round(s.words / 200)) : null);

const CARD = `_id, title, "slug": slug.current, category, series, excerpt, publishedAt, readTime, featured,
  "cover": coverImage.asset->url, "coverAlt": coverImage.alt,
  "words": length(string::split(pt::text(body), " "))`;

export const getStories = (): Promise<any[]> =>
  sanityClient.fetch(`*[_type == "story" && defined(slug.current)] | order(publishedAt desc){ ${CARD} }`);

export const getStory = (slug: string): Promise<any> =>
  sanityClient.fetch(
    `*[_type == "story" && slug.current == $slug][0]{ ${CARD}, verdict, keyFigure, keyFigureNote, closingQuestion,
      body[]{ ..., _type == "image" => { "url": asset->url } } }`,
    { slug }
  );

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export const renderBody = (body: any[] = []) =>
  toHTML(body ?? [], {
    components: {
      types: {
        image: ({ value }: any) =>
          value?.url ? `<figure><img src="${value.url}?w=1200&amp;auto=format" alt="${esc(value.alt)}" loading="lazy"></figure>` : '',
      },
    },
  });
