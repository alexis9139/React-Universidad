import React from 'react'
class App5 extends React.Component {
    manejador = (e) => {
        e.preventDefault()
        console.log(e)
    }
    render() {
        return (
            <div>
                <a href="https://www.google.com.ar/" onClick={this.manejador}>Google</a>
            </div>
        )
    }
}
export default App5