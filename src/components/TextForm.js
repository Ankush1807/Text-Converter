import React,{useState} from 'react'



export default function TextForm(props) {


    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
      
    const handleClearcase = ()=>{
        
        setText('');
    }

    const handleLowercase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleUppercase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
        
    }
    // copies the text to clipboard
    const handleCopy =(event)=>{
        navigator.clipboard.writeText(text);
        alert("text copied");

    }
    // text named variable will always be updated using setText it cant be changed as text="helo" but as setText("HJello")
    const [text, setText] = useState("");
  return (
    <>
    <div className="container my-2">
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUppercase}>UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLowercase}>lowercase</button>
        <button className="btn btn-primary mx-2" onClick={speak}>Listen</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>

        <button className="btn btn-primary mx-2" onClick={handleClearcase}>Clear</button>
        

    </div>
    <div className="container my-2">
        <h1>Text Summary</h1>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p>{Math.ceil(0.003 * text.split(" ").length - 1) } minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter in the textbox above to preview it here"}</p>

    </div>
    </>
  )
}
