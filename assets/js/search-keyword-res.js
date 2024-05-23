var options = {
    series: [35],
    chart: {
        width: "100%",
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '40%',
            },
            track: {
                background: "#06D6A01F",
            },
            dataLabels: {
                show: false
            }
        },
    },
    fill: {
        type: 'solid',
        colors: ['#06D6A0']
    },
    stroke: {
        lineCap: 'round'
    },
    labels: ['cricket'],
};

var chart = new ApexCharts(document.querySelector(".keyTogChartCircleCon"), options);
chart.render();





var barOptions = {
    series: [{
        data: [120, 160, 90, 280, 200]
    }],
    chart: {
        height: '110%',
        width: '100%',
        type: 'bar',
        events: {
            click: function (chart, w, e) { }
        },
        toolbar: {
            show: false,
        },
        sparkline: {
            enabled: false,
        },
    },
    grid: {
        show: false,
    },
    colors: ["#0080EF"],
    plotOptions: {
        bar: {
            columnWidth: "65%",
            distributed: true,
            borderRadius: 2,
        }
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    xaxis: {
        categories: [
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
        ],
        labels: {
            style: {
                colors: "#737791",
                fontSize: '12px'
            }
        }
    },
    yaxis: {
        tickAmount: 3,
        labels: {
            style: {
                colors: "#737791",
                fontSize: '12px'
            }
        }
    }
}



var barChart = new ApexCharts(document.querySelector(".keyTogChartBar"), barOptions);
barChart.render()