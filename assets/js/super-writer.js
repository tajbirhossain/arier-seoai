var options = {
    series: [35],
    chart: {
        width: "120%",
        height: "120%",
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '54%',
            },
            track: {
                background: "#FFD1661F",
            },
            dataLabels: {
                show: false
            }
        },
    },
    fill: {
        type: 'solid',
        colors: ['#FFD166']
    },
    stroke: {
        lineCap: 'round'
    },
    labels: ['cricket'],
};

var chart = new ApexCharts(document.querySelector(".suWriterConLeftChartInner"), options);
chart.render();