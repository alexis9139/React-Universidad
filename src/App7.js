import React from 'react'
class Hijo extends React.Component {
    manejadorClick = () => {
        this.props.onSaluda("hola desde el hijo")
    }
    render() {
        return (
            <div>
                <button onClick={this.manejadorClick}>
                    Disparar evento
                </button>
            </div>
        )
    }
}
class App7 extends React.Component {
    manejador = (name) => {
        alert(name)
    }
    render() {
        return (
            <div><Hijo onSaluda={this.manejador} />
                {/* <h1><p>{this.state.name}</p></h1> */}
            </div>
        )
    }
}
export default App7



