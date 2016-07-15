module.exports = {
  attributes: {
    Weight: {
      type: 'float',
      required: true
    },
    Date_Added: {
      type: 'date',
      required: true
    },

    User_ID: {
      model: 'user'
    }
  }
};
