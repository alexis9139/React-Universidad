import React from 'react'
import './TarjetaFruta.css'

class TarjetaFruta extends React.Component {
    constructor(props) {
        super(props)
        this.state = {//this para hacer referencia a este componente
            cantidad: 0
        }
        //tips para hacer los bind de una mejor forma
        const METHODS = [
            'agregar',
            'quitar',
            'limpiar'
        ]
        METHODS.forEach((method) => {
            this[method] = this[method].bind(this)
        })
        // this.agregar = this.agregar.bind(this)
        // this.quitar = this.quitar.bind(this)
    }
    agregar() {
        this.setState({
            cantidad: this.state.cantidad + 1
        })
    }
    quitar() {
        this.setState({
            cantidad: this.state.cantidad - 1
        })
    }
    limpiar() {
        this.setState({
            cantidad: 0
        })
    }
    render() {
        const estadoCantidad = this.state.cantidad > 0
        const clases = estadoCantidad ? 'TarjetaFruta-activa' : 'TarjetaFruta'




        return (
            <div className={clases}>
                <h1>{this.props.name}</h1>
                <p>cantidad: {this.state.cantidad}</p>
                <button onClick={this.agregar}>Agregar</button>
                <button onClick={this.quitar}>Quitar</button>
                <button onClick={this.limpiar}>Limpiar</button>
                <p>Precio ${this.props.precio * this.state.cantidad}</p>
            </div>
        )
    }





}


export default TarjetaFruta