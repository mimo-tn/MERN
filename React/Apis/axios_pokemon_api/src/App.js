import Pokemon from './composents/Pokemon';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [statbutton, setStatButton] = useState(false);
  const affiche = () => {
    statbutton === false ? setStatButton(true) : setStatButton(false);
  }
  return (
    <div className="contenair w-50">
      <div className="d-flex p-4 flex-column  mx-auto">
          <button className='btn btn-secondary' onClick={affiche}> Fetch Pokemon</button>
          <Pokemon statbutton={statbutton}/>
      </div> 
    </div>
  );
}

export default App;
