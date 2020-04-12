import React from 'react'
import TarjetaFruta from './componentes/TarjetaFruta'
const App = () => (
    <div>
        <TarjetaFruta name="Kiwi" precio={5}></TarjetaFruta>
        <TarjetaFruta name="Damasco" precio={10}></TarjetaFruta>
        <TarjetaFruta name="Naranja" precio={15}></TarjetaFruta>
    </div>

)

export default App