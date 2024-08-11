
import './App.css';
import styles from './components/MyComponent.module.css';
import MyNav from './components/MyNav';
// import MyBody from './components/MyBody';
import Home from './components/Home';
import ThreeParam from './components/ThreeParam';
import Result from './components/Result';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
      <div className={styles.my_container}>
        <MyNav/>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/:param" element={<Result />}/>
          <Route path="/:word/:color/:backgroundcolor" element={<ThreeParam />}/>
        </Routes>
        {/* <MyBody/> */}
      </div>
  );
}

export default App;
