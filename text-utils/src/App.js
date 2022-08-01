import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/AboutUs';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=> {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#004c89';
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
    }
  }
  return (
    <>
      <Navbar logoTitle="Textutils" mode={mode} toggleMode={toggleMode}/>
      <TextForm mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
