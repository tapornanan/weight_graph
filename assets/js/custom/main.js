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




function compare_date(_data) {
  console.log("Compare date and normalize,.");
  for (var i = 0; i < _data.length; i++) {

    console.log(_data[i].name);
    var temp_weight ;
    for (var j = 0; j < _data[i].weight.length; j++) {
      var weight = _data[i].weight[j];
      var temp_date = new Date(_data[i].weight[j].createdAt);
      console.log("Date create for this weight is : ");
      console.log(temp_date);





    }
  }
}
