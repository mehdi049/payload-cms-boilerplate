import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    {
      name: 'first name',
      type: 'text',
    },
    {
      name: 'last name',
      type: 'text',
    },
    {
      name: 'gender',
      type: 'radio',
      options: [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
      ],
      defaultValue: 'male',
    },
    {
      name: 'birthdate',
      type: 'date',
    },
  ],
}
