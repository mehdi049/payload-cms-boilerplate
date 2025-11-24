import type { Block } from 'payload'

export const PostContentBlocksField: Block = {
  slug: 'PostContentBlock', // required
  interfaceName: 'PostContent', // optional
  fields: [
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'media',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
    },
  ],
}
