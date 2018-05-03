require('dotenv').config();
const sockets = require('websocket.io');
const httpServer = sockets.listen(process.env.APP_PORT || 3000);

httpServer.on('onConnection', (socket) => {
    console.log('connected……');
    httpServer.send('Web socket connected.');
    httpServer.on('message', (data) => {
        console.log('message received:', data);
    });
    httpServer.on('close', () => {
        console.log('socket closed!');
    });
});
