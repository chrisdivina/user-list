const schema = {
  type: 'object',
  required: ['name'],
  properties: {
    id: { type: 'string' },
    name: { type: 'string', title: 'Full Name' },
    jobTitle: { type: 'string', title: 'Job Title' },
    address: { type: 'string', title: 'Address' },
    phones: {
      type: 'object',
      title: 'Phone Numbers',
      properties: {
        home: { type: 'string', title: 'Home' },
        mobile: { type: 'string', title: 'Mobile' },
        work: { type: 'string', title: 'Work' }
      }
    },
    email: { type: 'string', format: 'email', title: 'Email Address' },
    imageFile: { type: 'string', format: 'data-url', title: 'Profile Picture' }
  }
};

const uiSchema = {
  id: { 'ui:widget': 'hidden' }
};

export default {
  schema,
  uiSchema
};
