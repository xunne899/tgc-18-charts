async function loadData() {
    const response = await axios.get('birth-rate.csv');
    const json = await csv().fromString(response.data);
    let series = [];
    for (let dataPoint of json) {
        if (dataPoint.ethnic_group == "Others") {
            series.push({
                'x': parseInt(dataPoint.year),
                'y': parseFloat(dataPoint.live_births)
            })
        }
     
    }
    console.log(series);
    return series;
}