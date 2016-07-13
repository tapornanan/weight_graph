$(document).ready(function(){

  var ctx = $("#myChart");


  $.getJSON('/analyse', function(res){

    for (var i = 0; i < res.Analysed_Data.length; i++) {
      var name = res.Analysed_Data[i].Name;

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
      console.log(name);
      console.log(data);
    }
  });

  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Scatter Dataset',
              data: [{
                  x: -10,
                  y: 0
              }, {
                  x: 0,
                  y: 10
              }, {
                  x: 10,
                  y: 5
              }]
          }]
      },
      options: {
          scales: {
              xAxes: [{
                  type: 'linear',
                  position: 'bottom'
              }]
          }
      }
  });

//   var myChart = new Chart(ctx, {
//     type: 'line',
//
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# weight benchmark',
//             data: [12, 9, 13, 25, 8, 3]
//             // backgroundColor: [
//             //     'rgba(255, 99, 132, 0.2)',
//             //     'rgba(54, 162, 235, 0.2)',
//             //     'rgba(255, 206, 86, 0.2)',
//             //     'rgba(75, 192, 192, 0.2)',
//             //     'rgba(153, 102, 255, 0.2)',
//             //     'rgba(255, 159, 64, 0.2)'
//             // ],
//             // borderColor: [
//             //     'rgba(255,99,132,1)',
//             //     'rgba(54, 162, 235, 1)',
//             //     'rgba(255, 206, 86, 1)',
//             //     'rgba(75, 192, 192, 1)',
//             //     'rgba(153, 102, 255, 1)',
//             //     'rgba(255, 159, 64, 1)'
//             // ],
//             // borderWidth: 1
//         },
//         {
//             label: '# weight benchmark',
//             data: [15, 20, 3, 5, 8, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//       },
//       options: {
//           scales: {
//               yAxes: [{
//                   ticks: {
//                       beginAtZero:true
//                   }
//               }]
//           }
//       }
//   });
//
});
//
// // http://momentjs.com/docs/#/manipulating/subtract/
