import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { Component } from 'react';

type AppProps = {

};

type AppState = {
  numClics: number
};

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      numClics: 0
    };

    //Es necesario bindear las propiedades de función para que
    //cuando se pasen dichas propiedades a otros componentes, JS
    //sepa quién exactamente es 'this' en el contexto del componente.
    this.manejarClic = this.manejarClic.bind(this);
    this.reniniciarContador = this.reniniciarContador.bind(this);
  };

  manejarClic() {
    //Pasamos solo la propiedad numClics (porque la vamos a usar) y 
    //devolvemos el objeto state con solo la propiedad numClics modificada
    this.setState(({ numClics }) => ({ numClics: numClics + 1 }));
  };

  reniniciarContador() {
    //Solo devolvemos el objeto state con solo la propiedad numClics modificada
    this.setState({ numClics: 0 });
  };

  render() {
    return (
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img 
            className='freecodecamp-logo' 
            src={freeCodeCampLogo} 
            alt='Logo de freecodecamp' />
        </div>
        <div className='contenedor-principal'>
          <Contador
            numClics={this.state.numClics}
          />
          <Boton 
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={this.manejarClic}
          />
          <Boton 
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={this.reniniciarContador}
          />
        </div>
      </div>
    );
  }
};

export default App;
