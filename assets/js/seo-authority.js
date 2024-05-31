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







var areaOptions1 = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 57, 19]
    }],
    chart: {
        width: "100%",
        height: "61px",
        type: 'area',
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true,
        },
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    colors: ['#06D6A0'],
    xaxis: {
        labels: {
            show: false
        },
        tooltip: {
            enabled: false
        },
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    tooltip: {
        x: {
            enabled: false,
            format: 'dd/MM/yy HH:mm',
        },
    },
    legend: {
        show: false
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: [0.7],
            opacityTo: [0.4],  // Adjust this value to reduce opacity
            stops: [0, 90, 100]
        },
    },
};
var areaOptions2 = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 57, 19]
    }],
    chart: {
        width: "100%",
        height: "61px",
        type: 'area',
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true,
        },
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    colors: ['#FF6F61'],
    xaxis: {
        labels: {
            show: false
        },
        tooltip: {
            enabled: false
        },
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    tooltip: {
        x: {
            enabled: false,
            format: 'dd/MM/yy HH:mm',
        },
    },
    legend: {
        show: false
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: [0.7],
            opacityTo: [0.4],  // Adjust this value to reduce opacity
            stops: [0, 90, 100]
        },
    },
};
var areaOptions3 = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 57, 19]
    }],
    chart: {
        width: "100%",
        height: "61px",
        type: 'area',
        toolbar: {
            show: false
        },
        sparkline: {
            enabled: true,
        },
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    colors: ['#06D6A0'],
    xaxis: {
        labels: {
            show: false
        },
        tooltip: {
            enabled: false
        },
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    tooltip: {
        x: {
            enabled: false,
            format: 'dd/MM/yy HH:mm',
        },
    },
    legend: {
        show: false
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: [0.7],
            opacityTo: [0.4],  // Adjust this value to reduce opacity
            stops: [0, 90, 100]
        },
    },
};




var areaChart1 = new ApexCharts(document.querySelector(".rankChartContentInner1"), areaOptions1);
var areaChart2 = new ApexCharts(document.querySelector(".rankChartContentInner2"), areaOptions2);
var areaChart3 = new ApexCharts(document.querySelector(".rankChartContentInner3"), areaOptions3);
areaChart1.render();
areaChart2.render();
areaChart3.render();







var areaOptions4 = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 57, 19]
    }],
    chart: {
        width: "100%",
        height: "100%",
        type: 'area',
        toolbar: {
            show: false
        },
        // sparkline: {
        //     enabled: true,
        // },
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    colors: ['#06D6A0'],
    xaxis: {
        // labels: {
        //     show: false
        // },
        tooltip: {
            enabled: false
        },
        type: 'category',
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
    },
    // yaxis: {
    // labels: {
    //     show: false
    // }
    // },
    tooltip: {
        x: {
            enabled: false,
            format: 'dd/MM/yy HH:mm',
        },
    },
    // legend: {
    //     show: false
    // },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: [0.7],
            opacityTo: [0.4],  // Adjust this value to reduce opacity
            stops: [0, 90, 100]
        },
    },
};


var areaChart4 = new ApexCharts(document.querySelector(".rankChartActiveContent"), areaOptions4);
areaChart4.render();









var backlinkOpt = {
    series: [
        {
            data: [44, 55, 41, 64, 22, 43, 21, 76, 94, 50, 61, 14, 50, 30, 5, 89, 53, 92, 82, 17, 42, 41, 90, 8, 90, 19, 59, 63, 20, 67, 86, 45, 1, 53, 44, 52, 7, 99, 21, 3, 86, 71, 19, 92, 87, 44, 15, 10, 19, 50, 5, 10, 100, 76, 45, 95, 34]
        },
        {
            data: [53, 32, 33, 52, 13, 44, 32, 5, 70, 55, 33, 96, 99, 72, 83, 57, 20, 26, 25, 43, 29, 88, 64, 90, 7, 84, 45, 6, 57, 76, 66, 75, 39, 55, 62, 61, 91, 31, 95, 97, 32, 56, 72, 15, 27, 55, 41, 82, 98, 84, 5, 54, 42, 2, 13, 90, 41]
        }
    ],
    chart: {
        type: 'bar',
        width: "100%",
        height: "100%",
        toolbar: {
            show: false
        },
    },
    grid: {
        show: false
    },
    plotOptions: {
        bar: {
            horizontal: false,
            dataLabels: {
                show: false,
                // position: 'top',
            },
            barHeight: '100%',
            columnWidth: '100%'
        },

    },
    dataLabels: {
        enabled: false,
        // offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        }
    },
    colors: ["#FF6F61", "#06D6A0"],
    stroke: {
        show: false,
        width: 1,
        colors: ['#fff']
    },
    // tooltip: {
    //     shared: true,
    //     intersect: false
    // },
    legend: {
        show: false
    },
    xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
        labels: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false,
        },
    }
};

var backlinkChart = new ApexCharts(document.querySelector(".backlinkChartMainContent"), backlinkOpt);
backlinkChart.render();








var areaOptions5 = {
    series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 57, 19]
    }],
    chart: {
        width: "100%",
        height: "100%",
        type: 'area',
        toolbar: {
            show: false
        },
        // sparkline: {
        //     enabled: true,
        // },
    },
    grid: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    colors: ['#06D6A0'],
    xaxis: {
        labels: {
            show: false
        },
        tooltip: {
            enabled: false
        },
        type: 'category',
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
    },
    // yaxis: {
    //     labels: {
    //         show: false
    //     }
    // },
    tooltip: {
        x: {
            enabled: false,
            format: 'dd/MM/yy HH:mm',
        },
    },
    // legend: {
    //     show: false
    // },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: [0.7],
            opacityTo: [0.4],  // Adjust this value to reduce opacity
            stops: [0, 90, 100]
        },
    },
};


var areaChart5 = new ApexCharts(document.querySelector(".backLineChartContent"), areaOptions5);
areaChart5.render();










var backProbOptions = {
    series: [55],
    chart: {
        width: "100%",
        height: "170%",
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '30%',
            },
            track: {
                background: "#EEF6FD",
            },
            dataLabels: {
                show: false
            }
        },
    },
    fill: {
        type: 'solid',
        colors: ['#0080EF']
    },
    // stroke: {
    //     lineCap: 'round'
    // },
    labels: ['cricket'],
};
var backProbOptions2 = {
    series: [55],
    chart: {
        width: "100%",
        height: "170%",
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '30%',
            },
            track: {
                background: "#EEF6FD",
            },
            dataLabels: {
                show: false
            }
        },
    },
    fill: {
        type: 'solid',
        colors: ['#0080EF']
    },
    // stroke: {
    //     lineCap: 'round'
    // },
    labels: ['cricket'],
};

var backProbChart = new ApexCharts(document.querySelector(".backSingleProgChartContent1"), backProbOptions);
var backProbChart2 = new ApexCharts(document.querySelector(".backSingleProgChartContent2"), backProbOptions2);
backProbChart.render();
backProbChart2.render();











var refDomRightChartOpt = {
    series: [44, 55, 41, 17],
    chart: {
        type: 'donut',
        width: "100%",
        height: "110%",
    },
    plotOptions: {
        pie: {
            donut: {
                size: '50%' // Increase the percentage to increase the track width
            }
        }
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    colors: ["#0080EF", "#FFD166", "#06D6A0", "#FF6F61"]
};
var refDomRightChartOpt2 = {
    series: [44, 55, 41, 17],
    chart: {
        type: 'donut',
        width: "100%",
        height: "110%",
    },
    plotOptions: {
        pie: {
            donut: {
                size: '50%' // Increase the percentage to increase the track width
            }
        }
    },
    legend: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    colors: ["#0080EF", "#FFD166", "#06D6A0", "#FF6F61"]
};

var refDomRightChart = new ApexCharts(document.querySelector(".refDomRightItemChartContent1"), refDomRightChartOpt);
var refDomRightChart2 = new ApexCharts(document.querySelector(".refDomRightItemChartContent2"), refDomRightChartOpt2);
refDomRightChart.render();
refDomRightChart2.render();