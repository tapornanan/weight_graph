module.exports = {

  Dashboard: function (req, res) {
    console.log("> Dashboard View <");
    User.find().exec(function (err, records) {
      if (err) {
        console.log("An error occur");
      }else{
        return res.view('Dashboard', { User_Data: records});
      }

    });
  },


  Create: function (req, res) {
    console.log("> Create User <");
    return res.view('User/create');
  },

  Add: function (req, res) {
    console.log("> Add User <");
    var _name = req.param('name');
    console.log(_name);

    User.create({Name: _name}).exec(function createUser(err, created){
      if (err) {
        console.log("err occur when create user");
        console.log(err);
      }else{
        console.log("Success!, create user.");

      }
    });

    return res.json({ name : _name });
  }


};
