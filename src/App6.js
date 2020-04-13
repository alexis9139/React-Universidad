import React from 'react'

class App6 extends React.Component {
    state = {
        color: ''
    }
    manejador = (event) => {
        const color = event.target.value
        this.setState((state) => ({
            color: color
        }))
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.manejador} />
                <h1 style={{ color: this.state.color }}>{this.state.color}</h1>
            </div>
        )
    }
}
export default App6