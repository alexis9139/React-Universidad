import React from 'react'
import ReactDOM from 'react-dom'

function TarjetaFruta() {
    return (
        <div>
            <h1>Titulo</h1>
            <p>parrafo</p>
        </div>
    )
}




const TarjetaFruta1 = (props) => (
    <div>
        <h1>{props.name}</h1>
        <p>{props.edad}</p>
    </div>
)
var comentario = "Este es un comentario"
const App = () => (
    <div>
        <h1>Titulo de App()</h1>
        <TarjetaFruta1 name="Alexis" edad={5}></TarjetaFruta1>
        <hr></hr>
        <TarjetaFruta1 edad={28}></TarjetaFruta1>
        <TarjetaFruta1 name={`${comentario}`}></TarjetaFruta1>
    </div >

)

const root = document.getElementById('root')

ReactDOM.render(<App></App>, root)