import * as alt from 'alt'
import chat from 'chat'
import { isInRangeOfPoint } from '../defaultFunction'
import { FuelStation } from '../defaultLocations/fuelStation'

chat.registerCmd('save', (player,args) => {
    console.log('x:' + player.pos.x + ' y:' + player.pos.y + ' z:' + player.pos.z + '//' +args[0])
})

chat.registerCmd('veh', (player,args) => {
    if(args.length != 1)
    {
        chat.send(player,"/veh [Fahrzeug]");
        return;
    }

    if(player.personalVehicle !== undefined){
        player.personalVehicle.destroy();
    }
   player['pVehicle'] = new alt.Vehicle(args[0],player.pos.x,player.pos.y,player.pos.z,0,0,0);
   player['pVehicle'].fuel = '50' 
})

chat.registerCmd('tanken', (player) => {

if(!player.IsInVehicle){
    if(isInRangeOfPoint(new alt.Vector3(player.pos.x,player.pos.y,player.pos.z),new alt.Vector3(FuelStation.x,FuelStation.y,FuelStation.z),3.0)){

        if(player['pfuelCar'] !== undefined)
        {
            chat.send(player,'Fuel tanken:' + player['pfuelCar'].fuel)
        alt.emitClient(player,'FuelPageOpen', player['pfuelCar'].fuel)
        
    } else {
            chat.send(player,'Du hast kein Auto an der Tanksäule stehen! ')
        }
        

    }
    else return chat.send(player,'Du befindest dich an keiner Tankstelle')
} else return chat.send(player,'Du kannst nicht tanken wenn du dich in deinem Auto befindest!')

})


chat.registerCmd('test', (player) => {
    chat.send(player,'IsPlayerInVehicle: ' + player.IsInVehicle)
})