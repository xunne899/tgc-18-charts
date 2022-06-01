function generateRandomNumber(number) {
    let n = [];
    for (let i =0; i < number; i++) {
        n.push(Math.floor(Math.random() * 1000 + 100));
    }
    return n;
}

let lineChartOptions = {
    "chart":{
        "type":"line",
        "height":"100%"  // takes 100% of the parent height
    },
    "series":[
        {
            "name":"sightings",
            "data": generateRandomNumber(10)
        }
    ],
    "xaxis": {
        'categories':['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct']
    }
}

let lineChart = new ApexCharts(document.querySelector('#lineChart'), lineChartOptions);
lineChart.render();

// let barChartOptions = {
//     "chart":{
//         "type":"bar",
//         "height":"100%"  // takes 100% of the parent height
//     },
//     "series":[
//         {
//             "name":"sightings",
//             "data": generateRandomNumber(10)
//         }
//     ],
//     "xaxis": {
//         'categories':['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct']
//     }
// }

// let barChart = new ApexCharts(document.querySelector('#bar-chart'), barChartOptions);
// barChart.render();
 
// const barChartOptions =  {
//     chart: {
//         type: 'bar',
//         height:"100%"
//     },
//     // each series represents one set of data
//     series:[
//         {
//             name: 'sightings',
//             data: sightings
//         },
//         {
//             name: 'temperature',
//             data:temperature
//         }
//     ],
//     // what is are the labels along the x-axis (horizontal line)
//     xaxis: {
//         categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct']
//     },
    
// }
 
// // create the chart
// const barChart = new ApexCharts(document.querySelector('#barChart'), barChartOptions);
 
// // render the bar chart
// barChart.render()