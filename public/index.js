async function main() {

    // const timeChartCanvas = document.querySelector('#time-chart');
    // const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    // const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    const url = await fetch('https://api.twelvedata.com/time_series?symbol=GME,MFST,DIS,BNTX&interval=1min&apikey=f0ca8536deb943beb424180a442fe1af')
    const data = await url.json()
    console.log(data)
}


main()