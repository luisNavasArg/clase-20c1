import { useState, useEffect } from 'react';
import './App.css';

function App() {
  //Hooks
  // const [variable,método]=useState(valorInicial);
  const [opcion, setOpcion] = useState('hoteles')
  const [data, setData] = useState([])

  //los efectos secundarios dos parámetros
  //useEffect(callback,[variable])
  let url = "https://pruebagcd.herokuapp.com/";
  useEffect(() => {
    const api = async () => {
      const response = await fetch(url + opcion);
      const json = await response.json();
      setData(json)
    }
    api();
  }, [opcion])
  const cambiarOpcion = () => {
    if (opcion === 'hoteles') {
      setOpcion('paquetes')
    } else if (opcion === 'paquetes') {
      setOpcion('ofertas')
    } else setOpcion('hoteles')
  }
  return (
    <div className="container">
      <div className='row'>
        <div className='col-6'>
          <button className='btn btn-danger m-5' onClick={cambiarOpcion}>Cambiar Opción</button>
        </div>
        <div className='col-6 my-5'>
          <ul className='my-5' type="none">
            {data.map((o, i) => { return <li className='m-3' key={i + o.nombre}>{o.nombre}</li> })}
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;
