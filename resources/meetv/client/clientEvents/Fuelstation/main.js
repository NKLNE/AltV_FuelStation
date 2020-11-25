if('alt' in window)
{
    alt.on('fuelvalue', (args) => {
        
        document.getElementById("fuelfeld").value = args;
    })
}
function loadingFuel(){
    alt.emit('loadingFuelPage')
}
function closepage()
{
    alt.emit('FuelPageClose')
}
function carfuell(){
    alt.emit('carfuell')
}
var Interval;
function starttimer() {
    Interval = setInterval(carfuell,500)
}

function stoptimer() {
    clearInterval(Interval)
}
