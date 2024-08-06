
import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [user, setUser] = useState([])
  const AddUser = (newuser) => {
    setUser([...user, newuser])
  }
  return (
    <>
      <Form AddUser = {AddUser}>
      </Form>
      <Display user = {user}/>
    </>
  );
}

export default App;
