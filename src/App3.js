import React from 'react'

const styles = {
    height: '200px',
    background: 'gold',
    padding: '1em',
    boxSizing: 'border-box'
}

class App3 extends React.Component {
    state = {
        x: 0,
        y: 0
    }

    manejador = (event) => {//recibimos el evento que nos llega desde el manejador
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    render() {
        return (
            <div style={styles} onMouseMove={this.manejador}>
                <div>
                    x:{this.state.x}
                </div>
                <div>
                    y:{this.state.y}
                </div>
            </div>
        )
    }
}

export default App3