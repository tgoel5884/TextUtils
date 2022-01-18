import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () =>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
    }

    const handleLoClick = () =>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }

    const handleClear = () =>{
        let newText="";
        setText(newText);
        props.showAlert("Textbox is clear", "success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const[text, setText] = useState('');

    return (
        <>

            <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} id="TextArea" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleClear}>Clear</button>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            </div>

            <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
                
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>

                <p>{0.008*text.split(" ").length} Minutes to read</p>

                <h4>Preview</h4>
                <p>{text.length>0?text:"Enter something to preview."}</p>

            </div>

        </>
    )
}
