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
  var _date = moment();
  console.log("now:");
  console.log(_date);
  console.log(_date.date());
  console.log(_date.month());
  console.log(_date.year());
  var subtract_one_month = moment().subtract(1, 'months');
  var year = moment().year();
  var month = subtract_one_month.month();

  var _temp = {
    'year' : year,
    'month': month
  };

  // created date for using in comparision
  var created_date = moment().set(_temp);
  console.log(created_date.date());
  console.log(created_date.month());
  console.log(created_date.year());
  console.log("> (-1) month : <");
  console.log(created_date);

  var end = created_date.endOf('month');
  console.log("> the ending of the month <");
  console.log(end);

  var _temp_start = created_date.date() +"/"+ created_date.month()  +"/"+ created_date.year();
  var _temp_now   = moment().date() +"/"+ moment().month()  +"/"+ moment().year();
  console.log(_temp_start);
  console.log(_temp_now);

  var a = moment(_temp_start, 'DD/MM/YYYY');
  var b = moment(_temp_now, 'DD/MM/YYYY');
  var days = b.diff(a, 'days')
  console.log(days);

  var temp_past = created_date;
  for (var k = 0; k < 31 ; k++) {
    if ( _date >= created_date ){
      console.log(k);






     temp_past  = temp_past.add(1, 'days');
     console.log(temp_past);
    }
  }




  for (var i = 0; i < _data.length; i++) {

    console.log(_data[i].name);
    var temp_weight ;
    for (var j = 0; j < _data[i].weight.length; j++) {
      var weight = _data[i].weight[j];
      var date_time = new Date(_data[i].weight[j].createdAt);
      console.log("Date create for this weight is : ");
      console.log(date_time);

      var temp_date  = date_time.getDate();
      var temp_month = date_time.getMonth();
      console.log("record date:");
      console.log(temp_date);
      console.log("record month:");
      console.log(temp_month);

      if ( month == temp_month ) {
        if ( date == temp_date ){
          console.log("> record and date are equal. <");



        }
      }





    }
  }
}
