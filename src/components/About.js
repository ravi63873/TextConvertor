import React from 'react'

export default function About(props) {
    // const[myStyle,setmyStyle]= useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    let myStyle = {
        color: props.mode === 'dark'? 'white':'#042743',
        backgroundColor : props.mode === 'dark'?'rgb(36,74,104)':'white',
       
    }

  return (
        <div className = 'container' style={{color: props.mode === 'dark'? 'white':'#444665' }}>
                <h1 className = 'my-2'>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong> Analyze your text </strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                TextUtils gives you a way to analyze your text quickly and efficintly. Be it work count, character count.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>  Free to use </strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                TextUtils is free character counter tool that provides intant character count & word count statistics for a given text. TextUtils reports the number of words and character. Thus it is suitable for writing text with word / character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong> Browser Compatible </strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This is word counter software work in any web browser such as chrome, Firefox, Internet Explorer, Safari/ it suit to count character in facebook, blog, books, excel, pdf document, essays, etc.
            </div>
            </div>
        </div>
        </div> 
        </div>
  )
}
