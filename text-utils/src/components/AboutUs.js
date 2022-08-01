import { useState } from 'react';

export default function About() {

  const [myStyle, setMyStyle] = useState({
    backgroundColor: '#000',
    color: '#fff'
  });

  const [btntext, setBtnText] = useState('Enable dark Mode');

  const [paraText, setParaText] = useState('this is paratext initail');

  const toggleStyle = ()=>{
    if (myStyle.color === '#fff') {
      setMyStyle({
        color: '#000',
        backgroundColor: '#fff'
      })
      setBtnText("Enable dark mode");
      setParaText('state changed and change btn text to Enable dark mode');
    }
    else {
      setMyStyle({
        backgroundColor: '#000',
        color: '#fff'
      })
      setBtnText("Enable light mode");
      setParaText('state changed and change btn text to Enable light mode');
    }
  };

  return (
    <div className='container p-3' style={myStyle}>
        <h1>About Us</h1>
        <p>
            {paraText}
        </p>
        <button type='button' className='btn btn-primary' onClick={toggleStyle}>{btntext}</button>
    </div>
  )
}
