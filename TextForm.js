import React, { useState } from 'react'
// const [count,setCount]=useState(0);

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("UpperCase was clicked." + text);
        //setText("You have clicked on handleUpClick");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted into UpperCase!","success");
    }
    const handleOnChange = (event) => {
        console.log("Onchange was clicked.");
        setText(event.target.value);
    }

    const handleLoClick = (event) => {
       let newText = text.toLowerCase();
      
       setText(newText);
       props.showAlert("Text has been converted into LowerCase!","success");
    }

    const handleClrClick = (event) => {
  
        setText("");
        props.showAlert("Text has been cleared!","success");
     }
     const handleCpClick = (event) => {
      var newText = document.getElementById("myBox");
      newText.select();
      newText.setSelectionRange(0,9999);
      navigator.clipboard.writeText(newText.value);
      props.showAlert("Text has been copied to Clipboard!","success");
     }
     const handleExrClick = (event) => {
        let newText = text.split(/[ ]*/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed!","success");
     }
    // here text is a variable and setText is a funcion. 
    // always put it into fuction based component.
    const [text, setText] = useState("");
    //text="new text"; wrong way to change state
    //setText("new text"); correct way to change state
    return (
        <>
            <div className='container' style={{color: props.mode==='dark' ? 'white':'#042743'}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" id="myBox" style={{backgroundColor: props.mode==='dark' ? '#13466e':'white', color: props.mode==='dark' ? 'white':'#042743'}}     value={text} onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClrClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCpClick}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExrClick}>Remove Extra Space</button>
            </div>
            <div>
              
            </div>
            <div className='container my-3' style={{color: props.mode==='dark' ? 'white':'#042743'}} >
                <h2>This is your summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length } words and {text.length} characters</p>

                <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read!</p> 
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothng to preview"}</p>
                     </div>
        </>
    )
}

