import React from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';

                
function App() {
  return (
    <div className="app">
      <Container>
        <Header />
        <Navigation />
        <Main>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>
      </Container>
    </div>
  );
}
                
export default App;