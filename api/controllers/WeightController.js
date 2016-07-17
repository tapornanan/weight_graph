/*


  Weight controller...


*/

module.exports = {


  Add: function(req, res) {
    console.log("> Add Weight <");

    var data = {
      User_ID: req.param('Select_Name'),
      Weight: req.param('Weight'),
      Date_Added: req.param('Date')
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

  },

  Analyse: function(req, res) {
    console.log("> Analyse Data <");

    User.find().populateAll().exec(function (err, records) {
      if (err) {
        console.log("An error occur");
        return res.json({ User_Data: "Error"});
      }else{

        var _data = records;
        var moment = require('moment');

        var now   = moment();
        var year  = moment().year();
        var month = moment().month();
        var this_month = moment().month();

        // set the begining.
        var past  = moment().set({'year': year, 'month': month, 'date': 1 });

        console.log(past);
        console.log("to");
        console.log(now);

        // find the ending of the month
        var diff_duration = now.diff(past, 'days');
        console.log(diff_duration);

        console.log("===========READ DATA=============");
        console.log(_data);
        var all_user_data = [];
        for (var i = 0; i < _data.length; i++) {
          var user_info = [];
          var temp_name = _data[i].Name;
          console.log(temp_name);

          var temp_weight = 0;
          var weight_obj = [];
          console.log(_data[i].Weight.length);
          for (var j = 0; j < _data[i].Weight.length; j++) {
            var temp_date = _data[i].Weight[j].Date_Added;
            if ( j == 0 ) {
              //  first
              temp_weight = _data[i].Weight[0].Weight;
              console.log("first weight of the month");

            }else{
              // after first round.
              temp_weight = _data[i].Weight[j].Weight - temp_weight;
              console.log("weight_diff");
              console.log(temp_weight);

              var weight_to_obj = {
                  "weight": temp_weight,
                  "date"  : temp_date
              };

              weight_obj.push(weight_to_obj);
              // assign today weight in temp
              if ( j == ( _data[i].Weight.length - 1 )){
                console.log("last weight");
                console.log(weight_obj);

              }else{
                temp_weight = _data[i].Weight[j].Weight;
              }
            }
          }
          user_info = {
            "Data": weight_obj,
            "Name"  : temp_name
          };
          console.log(user_info);
          all_user_data.push(user_info);
        }

        return res.json({ Analysed_Data: all_user_data});
      }

    });



  }

};
