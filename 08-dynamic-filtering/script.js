function createChart() {
    let options = {
        'chart': {
            'type': 'line',
            'height': '100%'
        },
        'series':[],
        'noData':{
            'text': 'Loading...'
        }
    }
    let chart = new ApexCharts(document.querySelector('#chart'), options);
    return chart;
}

window.addEventListener('DOMContentLoaded', async function(){
    let chart = createChart();
    chart.render();

    let data = await loadData();
    console.log(data);
    let series = transformData(data);
    chart.updateSeries([
        {
            'name':'Sales',
            'data':series,
            
        }
    ])

    document.querySelector('#btnSearch').addEventListener('click', function(){
        let searchYear = document.querySelector('#txtYear').value;
        let country = document.querySelector('#txtCountry').value;
        let series = transformData(data, searchYear, country);
        chart.updateSeries([
            {
                'name':'Sales',
                'data': series
            }
        ])
    })
})