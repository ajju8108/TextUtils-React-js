import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');

    const handleOnChange = (event) => {
        // console.log("on Change");
        setText(event.target.value)
    }
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleLowClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!", "success")
    }
    const clearText = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = ''
        setText(newText)
        props.showAlert("Text Cleared!", "success")
    }
    const extractNumber = () => {
        let newText = text
        const replaced = newText.replace(/\D/g, '');
        setText(replaced)
        props.showAlert("All numbers are extracted!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success")
    }
    return (
        <>
            <div className='container my-3' style={{color: props.mode === 'dark'?'white': '#042743'}}>
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{ backgroundColor: props.mode === 'dark'?'#13466e': 'white',color: props.mode === 'dark'?'white': '042743'}}></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lower Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={extractNumber}>Extract Number </button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="conatiner my-2" style={{color: props.mode === 'dark'?'white': '#042743'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </>
    )
}

