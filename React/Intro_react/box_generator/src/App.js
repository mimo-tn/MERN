import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [Box, setBox] = useState([])
  const AddBox = (newbox) => {
    setBox([...Box, newbox])
  }
  return (
    <>
      <Form AddBox = {AddBox}>
      </Form>
      <Display Box = {Box}/>
    </>
  );
}

export default App;
