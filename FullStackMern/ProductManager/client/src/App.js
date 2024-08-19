
import './App.css';
import styles from './components/MyComponent.module.css';
import MyNav from './components/MyNav';
import CreateProduct from './components/CreateProduct';
import { Routes, Route, Link } from 'react-router-dom';


function App() {

  return (
      <div className={styles.my_container}>
        <MyNav/>
        <Routes>
          <Route path="/products" element={<CreateProduct />}/>
        </Routes>
      </div>
  );
}

export default App;
