import React, {useState} from 'react'


export default function TextForm(props) {
    const handleCapClick = () => {
        let nText = text.split(" ").map((currentValue) => {
            let nText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return nText;
        });
        setText(nText.join(" "));
        props.showAlert('Capitalized', 'success');
    }

    const handleUpClick = () => {
        let nText = text.toUpperCase();
        setText(nText)
        props.showAlert('Text converted to Uppercase', 'success');
    }

    const handleLowClick = () => {
        let nText = text.toLowerCase();
        setText(nText)
        props.showAlert('Text converted to Lowercase', 'success');
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Text copied to clipboard', 'success');
    }
    
    const handleSpacesClick = () => {
        let nText = text.split(/[ ]+/)
        setText(nText.join(" "))
        props.showAlert('Extra spaces removed', 'success');
    }

    const handleTrimClick = () => {
        let nText = text.trim();
        setText(nText)
        props.showAlert('White spaces removed', 'success');
    }

    const handleDelClick=()=>{
        let ntext=text.substring(text.length,(text.length-(text.length-1)))       
        setText(ntext);
        props.showAlert('Character deleted', 'success');
    }

    const handleClearClick = () => {
        let nText = '';
        setText(nText)
        props.showAlert('Text cleared', 'success');
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    const [text, setText] = useState('')
    // text = 'Enter text here...'  // wrong way to change the state
    // setText = 'Enter text here...'  // corect way to change the state
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white'}} > </textarea>
                </div>
                <button disabled={text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0} className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={handleCapClick}> Capitalize First Word </button>
                <button disabled={text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0} className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={handleLowClick}> Convert to Lowercase </button>
                <button disabled={text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0} className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={handleUpClick}> Convert to Uppercase </button>
                <button disabled={text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0} className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={handleCopyClick}> Copy Text </button>
                <button disabled={text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0} className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={handleSpacesClick}> Remove Extraspaces </button>
                <button disabled={text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0} className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={handleTrimClick}> Remove Whitespaces </button>
                <button disabled={text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0} className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={handleDelClick}> Delete Character </button>
                <button disabled={text.split(/\s+/).filter((element)=>{return element.length!==0}).length===0} className={`btn btn-outline-${props.mode==='light'?'dark':'light'} mx-1 my-1`} onClick={handleClearClick}> Clear Text </button>
            </div>
            <hr />
            <div className="container my-4">
                <h1>Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read time</p>
                <hr />
                <h3>Preview</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length>0?text:'Nothing to preview.'}</p>
                <hr />
            </div>
        </>
    )
}
