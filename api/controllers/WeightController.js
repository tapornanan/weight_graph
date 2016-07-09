/*


  Weight controller...


*/

module.exports = {


  Add: function(req, res) {
    console.log("> Add Weight <");

    var data = {
      User_ID: req.param('Select_Name'),
      Weight: req.param('Weight')
    };
    console.log(data);

    Weight.create(data).exec(function addWeight(err, result){
      if (err) {
        console.log("err..");
        console.log(err);
        return res.json({ Status: "Error!" });
      }else{
        console.log("Success added!..");
        return res.redirect('/Dashboard');
      }

    });

  }



};
