const dataPath = 'https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/bigger-sales.json';
async function loadData() {
    let response = await axios.get(dataPath);
    return response.data;
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']

function transformData(data, year, country) {
    let earnings = data.map(function (dataPoint) {
        return {
            'amount': dataPoint.payment.amount,
            'date': new Date(dataPoint.completed_at),
            'country': dataPoint.customer.country
        }
    })


    let filtered = earnings.filter(function (dataPoint) {
        // if (!year) {
        //     return true;
        // }
        // if (dataPoint.date.getFullYear() == year) {
        //     return true;
        // }

        // if (!year || dataPoint.date.getFullYear() == year) {
        //     return true;
        // }
        // return false;

        return !year || dataPoint.date.getFullYear() == year;
    })

    // if the user provides a country to search by
    if (country) {
        filtered = filtered.filter(function(dataPoint){
            return dataPoint.country.toLowerCase().includes(country.toLowerCase());
        })
    }

    let byMonths = [];
    for (let dataPoint of filtered) {
        byMonths.push(
            {
                'amount': dataPoint.amount,
                'month': dataPoint.date.getMonth()
            }
        )
    }

    // GROUPING
    // one array for each month
    let buckets = {
        0: [], // month 0 is jan
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [], // month 11 is dec
    
    }

    for (let dataPoint of byMonths) {
        let month = dataPoint.month;
        buckets[month].push(dataPoint);
    }
    
    let series = [];
    for (let monthNumber in buckets) {
        let dataPoints = buckets[monthNumber];
        // let totalAmount = 0;
        // for (let dataPoint of dataPoints) {
        //     totalAmount += dataPoint.amount
        // }
        console.log(dataPoints);
        let totalAmount = dataPoints.reduce(function(accumulated, currentValue){
            return accumulated + currentValue.amount
        }, 0)
        series.push({
            "x": months[monthNumber],
            "y": totalAmount
        })
    }
    return series;
}

