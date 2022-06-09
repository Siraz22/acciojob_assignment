import {useState, useEffect, useRef, createRef} from 'react'
import {Button, Col, Row} from 'react-bootstrap'
import './App.css';

function App() {
  
  const [scrollPosition, setScrollPosition] = useState(0)
  const [srcText, setSrcText] = useState('fold1.png')
  
  const section1 = createRef();
  const section2 = createRef();
  const section3 = createRef();

  var baseNo = 500
  var baseNoText = 800

  function handleScroll(){
    const scrollPos = window.pageYOffset;
    setScrollPosition(scrollPos);
  }

  function changeSectionContents(scrollPosPassed){
    
    if(scrollPosPassed >= baseNo + 700*3){
      setSrcText("fold4.png")
    }
    else if(scrollPosPassed >= baseNo + 700*2){
      setSrcText("fold3.webp")
    }
    else if(scrollPosPassed >= baseNo + 700){
      setSrcText("fold2.webp")
    } 
    else if(scrollPosPassed >= baseNo){
      setSrcText("fold1.png")
    }

    if(scrollPosPassed >=baseNoText && scrollPosPassed <= baseNoText+300){
      section1.current.classList.add("fadeIn")
      section1.current.classList.remove("fadeOut")
    }
    else{
      section1.current.classList.add("fadeOut")
      section1.current.classList.remove("fadeIn")
    }

    if(scrollPosPassed >=baseNoText + 700 && scrollPosPassed <= baseNoText + 700 +300){
      section2.current.classList.add("fadeIn")
      section2.current.classList.remove("fadeOut")
    }
    else {
      section2.current.classList.add("fadeOut")
      section2.current.classList.remove("fadeIn")
    }

    if(scrollPosPassed >=baseNoText + 700*2 && scrollPosPassed <= baseNoText + 700*2 +300){
      section3.current.classList.add("fadeIn")
      section3.current.classList.remove("fadeOut")
    }
    else {
      section3.current.classList.add("fadeOut")
      section3.current.classList.remove("fadeIn")
    }
  
  }
  
  function check(){
    
    console.log(section1.current)
    console.log(scrollPosition)

    //var thing = document.getElementById('counter')
    
    // counterRef.current.classList.toggle("fadeIn")
    // counterRef.current.classList.toggle("fadeOut")

    //counterRef.classList.toggle("fadeIn")
    //counterRef.classList.toggle("fadeOut")
  }

  useEffect(()=>{
    //call once
    window.addEventListener("scroll", handleScroll);
    return () =>{
      //add only one event listener
      window.removeEventListener("scroll", handleScroll);
    }
  },[]);

  //to get the updated values of sections ref
  useEffect(()=>{
    // console.log(section1);
    changeSectionContents(scrollPosition);
  },[window.pageYOffset]);

  return (
    <div className="darkThemeApp">
      
      {/* <Button
      variant='outline-secondary'
        onClick={check}
      >
        Debug Button
      </Button> */}

      <div 
        // ref = {counterRef}
        // className='fadeIn'
        // id = "counter"
        style={{position : 'fixed'}}>
        Debug {scrollPosition}
      </div>

      <div className="section">
        <h4>Heading 1</h4>
      </div>
      <div className="section">
        Sample Text
      </div>

      <hr/>

      {/* Assignment Component */}
      <div className="section">

      <Row>
      
        <Col sm={6}>
          <div className="stickyBanner">
            <h1><b>FILLER SAMPLE</b></h1>
            <p>Sample text</p>
          </div>

          <div ref={section1} className="stickyBanner fadeOut">
            <h1><b>SECTION 1 TEXT</b></h1>
            <p>This is section 1</p>
          </div>

          <div ref={section2} className="stickyBanner fadeOut">
            <h1>This is section 2</h1>
            <p>This is section 2</p>
          </div>
          
          <div ref={section3} className="stickyBanner fadeOut">
            <h1>This is section 3</h1>
            <p>This is section 3</p>
          </div>

        </Col>

        <Col>
          {/* sticky component will show the image */}
          <div className="sticky">
              
              <div className="phonePreviewParent">
                <img 
                id='phoneContent'
                  src= {'images/'+srcText}
                  height={500}
                ></img>
                {/* <img class="image1" src="https://via.placeholder.com/50" /> */}
                <img 
                id="phoneFrame" 
                height={530}
                width={290}
                src="https://i.imgur.com/VkCAJj2.png" />
              </div>
            
            {/* {srcText} */}
          </div>
        </Col>
      
      </Row>

      </div>
      <hr/>
      
      <div className="section">
        Sample Text
      </div>
      <div className="section">
        Sample Text
      </div>
      <div className="section">
        Sample Text
      </div>

    </div>
  );

}

export default App;
