import { defineType, defineField, defineArrayMember } from 'sanity';

const altField = { name: 'alt', type: 'string', title: 'Alt text' };

export const story = defineType({
  name: 'story',
  title: 'Story',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'URL slug', type: 'slug', options: { source: 'title', maxLength: 80 }, validation: (r) => r.required() }),
    defineField({
      name: 'category', title: 'Category', type: 'string', validation: (r) => r.required(),
      options: { list: [
        { title: 'Controversies and debates', value: 'controversies' },
        { title: 'The business of football', value: 'business' },
        { title: 'Football mysteries', value: 'mysteries' },
        { title: 'Untold stories', value: 'untold' },
        { title: 'Tactics and stats', value: 'tactics' },
      ] },
    }),
    defineField({
      name: 'series', title: 'Series (optional)', type: 'string',
      options: { list: [
        'The Big Question', 'Follow the Money', 'What Really Happened?', 'The Unpopular Opinion', 'Forgotten Football',
      ] },
    }),
    defineField({ name: 'excerpt', title: 'Short summary', type: 'text', rows: 3, validation: (r) => r.required().max(220) }),
    defineField({ name: 'coverImage', title: 'Cover image', type: 'image', options: { hotspot: true }, fields: [altField] }),
    defineField({ name: 'publishedAt', title: 'Publish date', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'readTime', title: 'Read time (minutes)', type: 'number' }),
    defineField({
      name: 'body', title: 'Story', type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({ type: 'image', options: { hotspot: true }, fields: [altField] }),
      ],
    }),
    defineField({ name: 'verdict', title: 'The Curious Pitch verdict', type: 'text', rows: 4 }),
    defineField({ name: 'featured', title: 'Feature on homepage', type: 'boolean', initialValue: false }),
  ],
  preview: { select: { title: 'title', subtitle: 'category', media: 'coverImage' } },
});

export const schemaTypes = [story];
