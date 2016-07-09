module.exports = {
  attributes: {
    Weight: {
      type: 'double',
      required: true
    },

    User_ID: {
      model: 'user'
    }
  }
};
