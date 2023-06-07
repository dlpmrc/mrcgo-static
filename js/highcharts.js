// Data retrieved from https://netmarketshare.com/
// Build the chart
Highcharts.chart('user-pie-chart', {
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      backgroundColor:'transparent'
  },
  navigation: {
    buttonOptions: {
        enabled: false
    }
},
  title: {
      text: '',
      align: 'left'
  },
  credits: {
    enabled: false
},
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true
          },
          showInLegend: true
      }
  },
  series: [{
      name: 'My Orders',
      colorByPoint: true,
      data: [{
          name: 'Pipe',
          y: 74.77,
          sliced: true,
          selected: true
      },  {
          name: 'Valves',
          y: 12.82
      },  {
          name: 'Fittings',
          y: 4.63
      }, {
          name: 'Flanges',
          y: 2.44
      }, {
          name: 'Gas Products',
          y: 2.02
      }, {
          name: 'Strainers',
          y: 3.28
      }],
      responsive: {
        rules: [{
            condition: {
                maxWidth: 200
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'top',
                    layout: 'horizontal'
                }
            }
        }]
    }
  }]
});
