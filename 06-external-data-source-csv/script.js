// this object stores the options for the chart
const options = {
    'chart':{
        'type':'line', // type of chart
        'height':'100%' // 100% of the parent height
    },
    // the data for the chart (i.e, series)
    'series':[
       
     ],
     'noData':{
         'text':"Please wait data is loading..."
     }
}

// use the options to create the chart
// call the `new ApexCharts` function to create a new ApexChart object
const chart = new ApexCharts(
    document.querySelector('#chart'),
    options
);

chart.render(); // draw the chart


// the DOMContentLoaded event is triggred automatically by browser
// when the HTML file has been read finished
window.addEventListener('DOMContentLoaded', async function(){
    let data = await loadData();
    chart.updateSeries([
        {
            'name':'Sales',
            'data': data
        }
    ])
})