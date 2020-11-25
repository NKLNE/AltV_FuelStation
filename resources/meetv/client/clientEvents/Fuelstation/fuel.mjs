import * as alt from 'alt'

var isFuelLoaded = false
var fuelPage = undefined

alt.onServer('FuelPageOpen', (args) => {
        if(isFuelLoaded)
        {
            alt.emitServer('callServerFuelPage')
        }
        else {
            isFuelLoaded = true
            fuelPage = new alt.WebView('http://resources/meetv/client/clientEvents/Fuelstation/fuel.html')
            fuelPage.focus()
            alt.toggleGameControls(false)
            alt.showCursor(true)

            fuelPage.emit('fuelvalue1', args)

            fuelPage.on('loadingFuelPage', () => {
                alt.emitServer('loadCarFuel')
            })

            fuelPage.on('carfuell', () => {
                alt.emitServer('carFuel')
            })

            fuelPage.on('FuelPageClose', () => {
                alt.emitServer('callServerFuelPage')
            })
        }
})

alt.onServer('destroyFuelPage', () => {
    if(isFuelLoaded){
        if(fuelPage !== undefined)
        {
            fuelPage.unfocus(); 
            fuelPage.destroy(); 
            fuelPage = undefined;
            alt.showCursor(false);
            isFuelLoaded = false;
            alt.toggleGameControls(true);
        }
    }
})

alt.onServer('fuelvalue', (value) => {
    fuelPage.emit('fuelvalue', value);
});


