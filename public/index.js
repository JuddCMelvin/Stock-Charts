async function main() {

    // const timeChartCanvas = document.querySelector('#time-chart');
    // const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    // const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    const url = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MFST,DIS,BNTX&interval=1min&apikey=f0ca8536deb943beb424180a442fe1af')
    const data = await url.json()
    
    const { GME, MSFT, DIS, BNTX } = mockData;

    const stocks = [GME, MSFT, DIS, BNTX];
    
    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor:  'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)'
            }]
        }
    });

    console.log(stocks[0].values)
}

// Bonus Note: 
// Another way to write the above lines would to refactor it as:
   // const {GME, MSFT, DIS, BTNX} = result 
// This is an example of "destructuring" an object
// "Destructuring" creates new variables from an object or an array

                                                
