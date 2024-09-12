import React, {useState} from 'react'


export default function TextForm(props) {


    const handleUpclick=()=>{
        //console.log("upper click"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper-case","success")
    }
    const handleLowClick=()=>{
        //console.log("upper click"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower-case","success")
    }
    const handleCopy=()=>{
       
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!","success");
    }
    const handleCapClick=()=>{
        const arr = text.split(" ");

//loop through each element of the array and capitalize the first letter.


for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

}

//Join all the elements of the array back into a string 
//using a blankspace as a separator 
const newText = arr.join(" ");
        setText(newText);
    }
    const handleOnChange = (event)=>{
       // console.log("on change");
        setText(event.target.value);
    }

    const [text,setText] = useState('');
    // setText("Enter your text2");
    
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#0427743'}}>
            <h1 className='mb- 4'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#202d46'}} id="myBox" rows="8" ></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpclick}>Convert to Upper case</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to Lower case</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCapClick}>Convert to Cap first letter</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy text</button>
        </div>
        <div className='container my-2' style={{color:props.mode==='dark'?'white':'#202d46'}}>
            <h2>Your text summary </h2>
            
            <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words and {text.length} charecters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes read time</p>
            <h2>Priview</h2>
            <p1>{text.length>0? text :"Nothing to previw"}</p1>
        </div>
        </>
  )
}
