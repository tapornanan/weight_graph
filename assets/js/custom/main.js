$(document).ready(function(){



  // http://xdsoft.net/jqplugins/datetimepicker/

  $('#datetimepicker').datetimepicker({
    format:'Y/m/d',
    timepicker:false,
  });


  $.getJSON('/analyse', function(res){
    var datasets = [];
    for (var i = 0; i < res.Analysed_Data.length; i++) {
      var name = res.Analysed_Data[i].Name;
      var _temp = [];
      var data = [];
      for (var j = 0; j < res.Analysed_Data[i].Data.length; j++) {
        var weight = res.Analysed_Data[i].Data[j].weight;
        var date   = res.Analysed_Data[i].Data[j].date;
        var moment_date = moment(date);
        date = moment_date.date();

        var temp_data = {
          x: date,
          y: weight
        };
        data.push(temp_data);

      }
      temp = {
        label: name,
        data : data
      };
      datasets.push(temp);

    }
    // make data lika chart format
    var _dataset_temp = {
      datasets: datasets
    };

    datasets = _dataset_temp;
    console.log("show datasets");
    console.log(datasets);
    plot(datasets);
  });

});


function plot(datasets){
  var ctx = $("#myChart");





  var myChart = new Chart(ctx, {
      type: 'line',
      data: datasets,
      options: {
          scales: {
              xAxes: [{
                  type: 'linear',
                  position: 'bottom'
              }]
          }
      },
  });
}
