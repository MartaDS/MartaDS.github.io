google.charts.load("current", {packages:["corechart"]});
     google.charts.setOnLoadCallback(drawChart);
     function drawChart() {
       var data = google.visualization.arrayToDataTable([
         ['Truck', 'Performance'],
         [ 8,      12],
         [ 4,      5.5],
         [ 11,     14],
         [ 4,      5],
         [ 3,      3.5],
         [ 6.5,    7]
       ]);

       var options = {
         title: 'Truck vs. Performance',
         legend: 'none',
         crosshair: { trigger: 'both', orientation: 'both' },
         trendlines: {
           0: {
             type: 'polynomial',
             degree: 3,
             visibleInLegend: true,
           }
         }
       };

       var chart = new google.visualization.ScatterChart(document.getElementById('polynomial2_div'));
       chart.draw(data, options);
     }