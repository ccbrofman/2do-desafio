
const ManagerUsuarios = require ('./ManagerUsuarios')


const managerUsuarios = new  ManagerUsuarios ('Usuarios.json')
const usuario = {
    nombre: 'Caro',
    apellido: 'Brofman',
    edad: ' 35',
    curso: ' backend',
    pago: true,
}
managerUsuarios.crearUsuario (usuario)

managerUsuarios
    .consultarUsuarios ()
    .then (response => console.log (response))
    .catch ( err => console.log (err))