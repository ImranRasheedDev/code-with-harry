import React from 'react';
import { useState } from "react";


function TextForm(props) {
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const HandletoLowerCase = (event)=> {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearText = (event) => {
        let newText = '';
        setText(newText);
    }

    const copyToClipboard = ()=> {
        navigator.clipboard.writeText(text);
    }

    const handleOnChange = (event)=> {
        setText(event.target.value);
    };
    
    const [text, setText] = useState('');

  return (
    <div className='container py-5' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Enter your text below</h1>
        <textarea className='form-control my-3' style={{backgroundColor: props.mode==='dark'?'#004c89':'white',color: props.mode==='dark'?'white':'black'}} id='by-box' onChange={handleOnChange} value={text} rows={8}></textarea>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-secondary mx-1' onClick={HandletoLowerCase}>Convert to Lowercase</button>
        <button className='btn btn-danger mx-1' onClick={clearText}>Clear</button>
        <button className='btn btn-success mx-1' onClick={copyToClipboard}>Copy to clipboard</button>
        <div className="my-3">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text: 'Enter somthing in the text box above to preview it here'}</p>
        </div>
    </div>
  )
}

export default TextForm