import React from 'react'
class App4 extends React.Component {
    state = {
        text: '',
        evento: ''
    }
    manejador = (event) => {
        console.log(event.target.value)
        this.setState({
            text: event.target.value,
            evento: event.type
        })
    }


    render() {
        return (
            <div>
                <input type="text" onChange={this.manejador} />
                <h1>
                    {this.state.text}
                </h1>
                <h1>
                    {this.state.evento}
                </h1>
            </div>
        )
    }
}
export default App4