var areaOptions = {
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
    colors: ['#0080EF'],
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
var areaOptions2 = {
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
    colors: ['#0080EF'],
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
var areaOptions3 = {
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
    colors: ['#0080EF'],
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


var areaChart = new ApexCharts(document.querySelector(".serpWatchOverChartCon1"), areaOptions);
var areaChart2 = new ApexCharts(document.querySelector(".estimVisChartCon"), areaOptions2);
var areaChart3 = new ApexCharts(document.querySelector(".keyPosDistChartCon"), areaOptions3);
areaChart.render();
areaChart2.render();
areaChart3.render();