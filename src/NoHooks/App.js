import React, {Component} from 'react';
import Seconds from './Seconds';

class App extends Component {

    state = {
        showTimer: false
    };

    setShowTimer = showTimer => {
        this.setState({showTimer})
    }

    render() {
        const {setShowTimer} = this;
        const {showTimer} = this.state;
        return (
          <div className="App">
            <h1>Aprender hooks</h1>    
            <button onClick={() => setShowTimer(!showTimer)}>
                {!showTimer
                    ? 'Activar cronómetro'
                    : 'Apagar cronómetro'}
            </button>
            {!showTimer
                ? (
                    <div className="alert alert-danger">
                        Apagado
                    </div>
                )
                : (
                    <div className="alert alert-success">
                        Activo! <Seconds/> segundos
                    </div>
                )
            }
          </div>
        );
    }
}

export default App;
