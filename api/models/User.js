module.exports = {
  attributes: {
    Name: {
      type: 'string',
      required: true
    },
    Weight: {
     collection: 'weight',
     via: 'User_ID'
   }

  }
};
