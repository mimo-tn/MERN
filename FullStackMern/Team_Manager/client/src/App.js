import './App.css';
import styles from './components/MyComponent.module.css';
import MyNav from './components/MyNav';
import CreatePlayer from './components/CreatePlayer';
import Main from './components/Main';
import ManagePlayers from './components/ManagePlayers';
import Edit from './components/Edit';
import { Routes, Route } from 'react-router-dom';
import PlayerList from './components/PlayerList';


function App() {
  return (
      <div className={styles.my_container}>
          <MyNav />
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/players/list" element={<PlayerList />} />
              <Route path="/players/addplayer" element={<CreatePlayer />} />
              <Route path="/status/game/1" element={<ManagePlayers />}/>
              <Route path="/Authors/:id/edit" element={<Edit />}/>
          </Routes>
      </div>
  );
}

export default App;
