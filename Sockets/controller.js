const users = [];

const socketController = (socket, io) => {

  users.push(socket.id);
  io.emit('usuarios-activos', users)

  console.log('Cliente Conectado', socket.id);

  socket.on('disconnect', () => {
    console.log('Cliente desconectado', socket.id);

    users.splice(users.indexOf(socket.id), 1);
  });

  socket.on('mensaje-de-cliente', (payload, callback) => {
    callback('Mensaje recibido');

    payload.from = 'desde el server'

    socket.broadcast.emit('mensaje-de-server', payload);
  });

  socket.on('enviar-mensaje', ({to, from, mensaje}) => {
    if(to){
      socket.to(to).emit('recibir-mensaje', {to, from, mensaje});
    }else{
      io.emit('recibir-mensaje', {from, mensaje});
    }
  });
};

module.exports = { socketController };