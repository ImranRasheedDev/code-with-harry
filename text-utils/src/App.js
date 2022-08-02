import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/AboutUs';
import { useState } from 'react';
import { Alert } from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert = ({
      msg: message,
      type: type
    })
  }

  const toggleMode = ()=> {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#004c89';
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("light mode is enabled", "success");
    }
  }
  return (
    <>
      <Navbar logoTitle="Textutils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <TextForm mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
