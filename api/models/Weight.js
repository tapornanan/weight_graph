module.exports = {
  attributes: {
    Weight: {
      type: 'float',
      required: true
    },

    User_ID: {
      model: 'user'
    }
  }
};
