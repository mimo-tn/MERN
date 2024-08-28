import './App.css';
import styles from './components/MyComponent.module.css';
import MyNav from './components/MyNav';
import CreateLike from './components/CreateLike';
import OneLike from './components/OneLike';
import Edit from './components/Edit';
import { Routes, Route } from 'react-router-dom';
import LikesList from './components/LikesList';


function App() {
  return (
      <div className={styles.my_container}>
          <MyNav />
          <Routes>
              <Route path="/" element={<LikesList />} />
              <Route path="/likes/:id" element={<OneLike />} />
              <Route path="/likes/new" element={<CreateLike />} />
              <Route path="/likes/edit/:id" element={<Edit />}/>
          </Routes>
      </div>
  );
}

export default App;
