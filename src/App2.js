import React from 'react'


class Contador extends React.Component {
    state = {
        video: {
            titulo: "Titulo de video",
            likes: 0
        }
    }

    // add = () => {
    //     this.setState((prevState, props) => {
    //         return {
    //             cliks: prevState.cliks + 1
    //         }
    //     })
    // }


    add = () => {
        this.setState((state) => ({
            // al actualizar los likes tengo que actualizar
            //el objeto del video
            video: {
                ...state.video,
                likes: state.video.likes + 1
            }
        }))
    }

    render() {
        return (
            <div>
                <h1>{this.state.video.titulo}</h1>
                <button onClick={this.add}>
                    Likes:({this.state.video.likes})
                </button>
            </div>

        )
    }
}

const App = () => (
    <div>
        <Contador></Contador>
    </div>

)

export default App