import * as alt from 'alt'


alt.on('playerConnect', (player) => {

    console.log(`${player.name} has joined the server.`);
    player.spawn(1179.032958984375, -337.9912109375, 69.18017578125);
    player.model = `mp_m_freemode_01`;
});

