import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import menuMakanan from './components/MenuMakanan/MenuMakanan';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>Cafe and Resto Codepolitan</h1>
        <h2>Makanan</h2>
        <menuMakanan/>
        

        <h2>Minuman</h2>
        <div style={{border:'1px solid black', width:300, margin:'auto'}}>
          <p>Nama Menu: Jus Semangka</p>
          <p>Harga: 13.000</p>
        </div>

      </div>
    );
  }
}

export default App;
