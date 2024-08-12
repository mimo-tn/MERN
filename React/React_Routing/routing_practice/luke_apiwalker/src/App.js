import './App.css';
import styles from './components/MyComponent.module.css';
import MyNav from './components/MyNav';
import MyBody from './components/MyBody';
import MyResults from './components/MyResults';
import { useState } from 'react';

function App() {
  const [select, setSelect] = useState(null);
  const [id, setId] = useState(null); // Renommé `input` en `id`
  
  const getinput = (val1, val2) => {
    setSelect(val1);
    setId(val2); // Mettre à jour `id`
  }
  
  return (
    <div className={styles.my_container}>
      <MyNav/>
      <MyBody getinput={getinput}/>
      <MyResults select={select} id={id}/> {/* Passer `id` à la place de `input` */}
    </div>
  );
}

export default App;