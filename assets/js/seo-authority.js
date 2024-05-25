var options = {
    series: [35],
    chart: {
        width: "100%",
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '53%',
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

var chart = new ApexCharts(document.querySelector(".authFlowSingleChartContent1"), options);
chart.render();





var options2 = {
    series: [35],
    chart: {
        width: "100%",
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '53%',
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

var chart2 = new ApexCharts(document.querySelector(".authFlowSingleChartContent2"), options2);
chart2.render();





var options3 = {
    series: [25],
    chart: {
        width: "100%",
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '53%',
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

var chart3 = new ApexCharts(document.querySelector(".authFlowSingleChartContent3"), options3);
chart3.render();






var options4 = {
    series: [50],
    chart: {
        width: "100%",
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '53%',
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

var chart4 = new ApexCharts(document.querySelector(".authFlowSingleChartContent4"), options4);
chart4.render();