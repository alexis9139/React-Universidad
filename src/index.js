import React from 'react'
import ReactDOM from 'react-dom'

class TarjetaFruta1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {//this para hacer referencia a este componente
            cantidad: 0
        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>cantidad: {this.state.cantidad}</p>
                <button onClick={() => {
                    this.setState({
                        cantidad: this.state.cantidad + 1
                    })
                }}
                >
                    Agregar</button>
            </div>
        )
    }
}


var comentario = "Este es un comentario"
const App = () => (
    <div>
        <TarjetaFruta1 name="Kiwi"></TarjetaFruta1>
    </div >

)

const root = document.getElementById('root')

ReactDOM.render(<App></App>, root)