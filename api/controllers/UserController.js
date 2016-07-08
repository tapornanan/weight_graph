module.exports = {
  Dashboard: function (req, res) {
    console.log("> Dashboard View <");
    return res.view('Dashboard');

  },


  Create: function (req, res) {
    console.log("> Create User <");
    return res.view('User/create');
  },

  Add: function (req, res) {
    console.log("> Add User <");
    var name = req.param('name');
    console.log(name);

    return res.json({ name : name });
  }


};
