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




const TarjetaFruta1 = () => (
    <div>
        <h1>Titulo de Tarjeta1</h1>
        <p>parrafo</p>
    </div>
)

const App = () => (
    <div>
        <h1>Titulo de App()</h1>
        <TarjetaFruta1></TarjetaFruta1>
    </div>

)

const root = document.getElementById('root')

ReactDOM.render(<App></App>, root)