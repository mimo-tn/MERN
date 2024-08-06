import './App.css';
import React, {useState} from 'react';
import Tabs from './components/Tabs';
import ContentTabs from './components/ContentTabs';

function App() {
  const NumTab = 5
  const [selecttab, setselecttab] = useState()
  const SelectTab = (newtab) => {
    setselecttab(newtab)
  }
  return (
    <div className='d-flex justify-content-around flex-column'>
      <Tabs NumTab = {NumTab} SelectTab = {SelectTab}/>
      <ContentTabs selecttab = {selecttab}/>
    </div>
  );
}

export default App;
