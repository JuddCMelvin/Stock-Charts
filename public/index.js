async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    // const url = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MFST,DIS,BNTX&interval=1min&apikey=f0ca8536deb943beb424180a442fe1af')
    // const data = await url.json()
    
    const { GME, MSFT, DIS, BNTX } = mockData;

    const stocks = [GME, MSFT, DIS, BNTX];
    
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map(value => value.datetime),
            datasets: stocks.map( stock => ({
                label: stock.meta.symbol,
                data: stock.values.map(value => parseFloat(value.high)),
                backgroundColor:  getColor(stock.meta.symbol),
                borderColor: getColor(stock.meta.symbol),
            }))
        }
    });
    
    

    console.log(stocks[0].values)
}

// Bonus Note: 
// Another way to write the above lines would to refactor it as:
   // const {GME, MSFT, DIS, BTNX} = result 
// This is an example of "destructuring" an object
// "Destructuring" creates new variables from an object or an array

                                                
