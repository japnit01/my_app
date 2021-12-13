import React,{useState} from 'react'

export default function Textform() {
    const handleupclick = () =>{
        console.log("Uppercase clicked");
        let newtext = text.toUpperCase();
        setText(newtext)
    }

    const handleloclick = () =>{
        console.log("Lowercase clicked");
        let newtext = text.toLowerCase();
        setText(newtext)
    }

    const handledOnchange = (event) =>{
        console.log("Textarea changed");
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter Text Here')
    return (
        <>
        <div className = "container">
            <div className = "my-3">
            <textarea className="form-control" rows = "8" placeholder="Leave a comment here" value = {text} onChange = {handledOnchange}  style= {{height:"100%"}}></textarea>
            </div>
            <button className="btn btn-primary m-2" onClick = {handleupclick}>UpperCase</button>
            <button className="btn btn-primary m-2" onClick = {handleloclick}>LowerCase</button>
            <div className = "my-3">
                <h3>Your Text Summary</h3>
                <div>{text.split(" ").length} words {text.length} characters</div>
                <div>{0.08*text.split(" ").length} Minutes Read</div>
            </div>

            <div className = "my-3">
                <h3>Preview</h3>
                <div>{text}</div>
            </div>
        </div>
        </>
    )
}
