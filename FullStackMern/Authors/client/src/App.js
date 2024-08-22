import './App.css';
import styles from './components/MyComponent.module.css';
import MyNav from './components/MyNav';
import CreateAuthor from './components/CreateAuthor';
import AuthorList from './components/AuthorList';
import OneAuthor from './components/OneAuthor';
import Edit from './components/Edit';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
      <div className={styles.my_container}>
          <MyNav />
          <Routes>
              <Route path="/" element={<AuthorList />} />
              <Route path="/Authors/new" element={<CreateAuthor />} />
              <Route path="/Authors/:id" element={<OneAuthor />}/>
              <Route path="/Authors/:id/edit" element={<Edit />}/>
          </Routes>
      </div>
  );
}

export default App;
