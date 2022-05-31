const options = {
 'chart':{
     'type':'line',
     'height':'100%'
 },

 'series':[
     {
         'name':'sightings',
         'data':[10,13,15,22,34,55,78,44]
     },

     {
        'name':'temperature',
        'data':[33,78,9,25,54,5,8,41]
    }
 ],

 'xaxis':{
     'categories':['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
 }





}


// use the options to create the chart
// call the `new ApexCharts` function to create a new ApexChart object
const chart = new ApexCharts(
    document.querySelector('#chart'),
    options
);

chart.render(); // draw the chart