import * as alt from 'alt'
import chat from 'chat'
import { isInRangeOfPoint } from '../defaultFunction.mjs'
import { FuelStation } from '../defaultLocations/fuelStation'

alt.onClient('callServerFuelPage', (player) => {
alt.emitClient(player,'destroyFuelPage')
})


alt.onClient('loadCarFuel', (player) => {
    alt.emitClient(player,'fuelvalue', player['pfuelCar'].fuel)
})


alt.onClient('carFuel', (player) => {
    
    if(player['pfuelCar'].fuel < 100){
        player['pfuelCar'].fuel = parseInt(player['pfuelCar'].fuel) + 1
        alt.emitClient(player,'fuelvalue', player['pfuelCar'].fuel)} else {chat.send(player,'Dein Auto hat einen vollen Tank!')}
    
})



//ServerEvents

alt.on('playerLeftVehicle', (player,vehicle) => {

        player.IsInVehicle = false

        if(isInRangeOfPoint(new alt.Vector3(vehicle.pos.x,vehicle.pos.y,vehicle.pos.z),new alt.Vector3(FuelStation.x,FuelStation.y,FuelStation.z),3.0)){
            player['pfuelCar'] = vehicle
            player['pfuelCar'].FuelStation = true
        }        
})

alt.on('playerEnteredVehicle', (player,Vehicle) => {

    player.IsInVehicle = true


    if(player['pfuelCar'] !== undefined)
    {    player['pfuelCar'].FuelStation = false;
        chat.send(player,'Tank des Autos: ' + Vehicle.fuel)}
})