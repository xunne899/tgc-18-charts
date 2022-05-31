function generateRandomValues() {
    let v = [];
    for (let i =0; i < 6; i++) {
        v.push(Math.floor(Math.random() * 10000 + 1000))
    }
    return v;
}

const chart = new ApexCharts(document.querySelector('#chart'), {
    // chart type
    "chart":{
        "type":"bar", 
        "height":"100%"
    },
    'series':[
        {
            "name":"revenue",
            "data": generateRandomValues()
        }
    ],
    'xaxis': {
        'categories': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    }
})

chart.render()