import React from 'react'

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   Color: 'black',
  //   backgroundColor: 'white'
  // })

  let myStyle ={
    Color: props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode ==='dark'?'rgb(36,74,104)':'white',

  }
  // const [btntext, setbtntext] = useState("Enable Dark mode");

  // const toggleStyle = () => {
  //   if (myStyle.Color === 'black') {
  //     setmyStyle({
  //       Color: 'white',
  //       backgroundColor: 'black',
  //       border: "2px solid white"
  //     })
  //     setbtntext("Enable Light mode");
  //   }
  //   else {
  //     setmyStyle({
  //       Color: 'black',
  //       backgroundColor: 'white'
  //     })
  //     setbtntext("Enable Dark mode");
  //   }
  // }
  return (

    <div className="container" style={{Color: props.mode ==='dark'?'white':'#042743'}}>
      <h1 className='my-2'>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             <strong> Analyze Your Text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
             TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count , chacter count or .... 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>  Browser Compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              This word coounter softwere works in any browser such as Chrome, Firefox, Microsoft Edge, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, etc.
            </div>
          </div>
        </div>
      </div>
      {/* <button type="button" onClick={toggleStyle} className="btn-btn-primary">{btntext}</button> */}
    </div>
  )
}
