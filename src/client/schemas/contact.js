const schema = {
  title: 'User',
  type: 'object',
  required: ['name'],
  properties: {
    id: { type: 'string' },
    name: { type: 'string', title: 'Full Name' },
    jobTitle: { type: 'string', title: 'Job Title' },
    address: { type: 'string', title: 'Address' },
    phone: { type: 'string', title: 'Phone Number' },
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
