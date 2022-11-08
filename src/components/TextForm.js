import React, { useState } from "react";
import PropTypes from "prop-types";
export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        setText(text.toUpperCase());
    };
    const handleLoClick = () => {
        setText(text.toLowerCase());
    };
    const handleOnChange = (event) => {
        setText(event.target.value)
    };
    const handleClearClick = () => {
        setText('');
    };
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
    };
    const handleCapital = ()=>{
        let word=text.replaceAll('\n',' \n ');
        word=word.split(/[ ]+/);
        for (let i = 0; i < word.length; i++) {
            word[i]= word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase();
        }
        word=word.join(" ");
        setText(word.replaceAll(' \n ','\n').replaceAll('\n\n ','\n'));
    };
    const handleCountWord=(tex)=>{
        let words=tex.replaceAll('\n',' ');
        words=words.split(/[ ]+/);
        let count=0;
        words.forEach(word => {
            if (word !== ""){
                count++;
            }
        });
        return count;
    };
    
    return (
        <>
        <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>{props.heading}</h2>
            <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'#f6f7f5':'#151a19',color:props.mode==='light'?'black':'#3c57f0',border:'2px solid'}} id="myBox" value={text} onChange={handleOnChange} rows="8" ></textarea>
            <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick} disabled={text.length!==0?false:true}>Uppercase</button>
            <button className="btn btn-outline-primary my-3 mx-2" onClick={handleLoClick} disabled={text.length!==0?false:true}>Lowercase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleCapital} disabled={text.length!==0?false:true}>Capitalize</button>
            <button className="btn btn-outline-danger my-3 mx-2" onClick={handleClearClick} disabled={text.length!==0?false:true}>Clear</button>
            <button className="btn btn-success my-3 mx-2" onClick={handleCopy} disabled={text.length!==0?false:true}>Copy</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='light'?'black':'green'}}>
            <h3>Text Summary</h3>
            <p> {handleCountWord(text)} {text.split(" ").length<2?'word':'words'} and {text.length} {text.length<2?'character':'characters'}</p>
            <h3 className="text-info">Preview</h3>
            <p className="text-primary">{text.length===0?"Nothing for preview":text}</p>
        </div>
        </>
    );
}

TextForm.propsType = {
    heading: PropTypes.string,
};
TextForm.defaultProps = {
    heading: "Heading",
};
