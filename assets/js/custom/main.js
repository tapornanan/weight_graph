$(document).ready(function(){

  var ctx = $("#myChart");

  var _data = [];
  $.getJSON('/getData', function(res){
    if ( res.User_Data == "Error"){
      console.log("ERROR!!");
    }else{
      var total_user = res.User_Data.length;
      // var _data = [];

      for (var i = 0; i < res.User_Data.length; i++) {
        var temp_name = res.User_Data[i].Name;
        var temp_weight = [];

        console.log("=========NAME==========");
        console.log(res.User_Data[i].Name);
        console.log("=========DATA==========");
        for (var j = 0; j < res.User_Data[i].Weight.length; j++) {
          console.log(res.User_Data[i].Weight[j]);
          temp_weight.push(res.User_Data[i].Weight[j]);
        }
        console.log("======================");

        _data.push({ name: temp_name, weight: temp_weight });
      }

      console.log("----> check data <-----");
      console.log(_data);

      compare_date(_data);
    }

  });





  var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# weight benchmark',
            data: [12, 9, 13, 25, 8, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '# weight benchmark',
            data: [15, 20, 3, 5, 8, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });

});

// http://momentjs.com/docs/#/manipulating/subtract/


function compare_date(_data) {
  var now   = moment();
  var date  = moment().date();
  var year  = moment().year();

  var subtract_one_month = moment().subtract(1, 'months');
  var month = subtract_one_month.month();

  var past  = moment().set({'year': year, 'month': month, 'date': date });
  console.log(past);
  console.log("to");
  console.log(now);

  var diff_duration = now.diff(past, 'days');
  console.log(diff_duration);


  var temp_from = past ;
  for (var k = 0; k < diff_duration+2 ; k++) {
    var _months = temp_from.month();
    var _date   = temp_from.date();
    console.log(_months);
    console.log(_date);
    for (var i = 0; i < _data.length; i++) {
      // each user.
      // get name here!
      console.log(_data[i].name);

      for (var j = 0; j < _data[i].weight.length; j++) {
        var weight = _data[i].weight[j];
        var date_time = new Date(_data[i].weight[j].createdAt);
        // console.log("Date create for this weight is : ");
        // console.log(date_time);

        var temp_date  = date_time.getDate();
        var temp_month = date_time.getMonth();

        if ( temp_month == _months && temp_date == _date ) {
          console.log("loop date and data date are equal! yeaH..");
        }
      }
    }
    temp_from = temp_from.add(1, 'days');
  }
}
