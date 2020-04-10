import React from 'react'
import ReactDOM from 'react-dom'
const nombre = 'alexis'
const usuario = {
    nombre: 'bruno',
    edad: 27,
    sexo: 'masculino'
}
function getUser(usuario) {
    return `Hola me llamo ${usuario.nombre}`
}
// const saludo = <h1>Hola reactivo {nombre}</h1>
// const saludo = <h1>hola llamo {usuario.nombre}, y tengo {usuario.edad + 1} años de edad.</h1>
const saludo = <h1>{getUser(usuario)}</h1>
const root = document.getElementById('root')

ReactDOM.render(saludo, root)