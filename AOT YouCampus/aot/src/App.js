import React from "react";
import  "./app.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import program from "./images/3.svg";
import vector from "./images/2.svg";
import i1 from "./images/icon1.svg";
import i2 from "./images/icon2.svg";
import i3 from "./images/icon3.svg";
import dev from "./images/5.svg";
import google from "./images/google.svg";
import arrow from "./images/arrow.png";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <h1 className="top-heading">AOT YOUCAMPUS</h1>
        </header>
        <img src={program} style={{height: '30%'}}/>
        <section className="description-container">
            <div className="description">
                 <h4 className="application-heading">The Application</h4>
                 <h4 className="mid-description-heading">All AOTIANS</h4>
                 <p className="last-description-para">Actually need</p>
            </div>
            <div className="icon-combinator">
         {/* <img src={vector} style={{position: 'absolute', right:'2%' , top:'0%'}}/>
          <img src={i1} style={{position: 'absolute',right: '2%',top: '0%'}}/>
          <img src={i2} style={{position: 'absolute',right: '87%',top: '25%'}}/>
          <img src={i3} style={{position: 'absolute',right: '39%',top: '48%'}}/>*/}
          {/* Trying to make the image situated at the right side, but as its a combination of the
          a lot images....So I have made their position absolute.....But for this...as it
          cannot be a responsive design ......so I made the last 4 img tags as a comment */}
               <img src={dev} style={{height:'100%'}}></img>
            </div>
        </section>
        <div className="d-grid gap-5 col-6 mx-auto" style={{justifyContent: 'center'}}>
            <button className="btn btn-primary" type="button" style ={{
              background: 'rgba(4, 227, 227, 0.87)',
              border: '2px solid #3F3D56',
              borderRadius: '25px',
              width: '345px',
              height: '60px',
              fontSize: '136%'
            }}>Sign Up</button>
            <span style ={{color: 'white',width: '10%',position:'absolute',top: '67%',left: '45%'}}>-OR-</span>
            <button className="btn btn-primary" type="button" style={{
              background: '#3F3D56',
              borderRadius: '25px',
              width: '345px',
              height: '52px',
              fontSize: '136%'
            }}>Log In</button>
              <button className="btn btn-primary" type="button" style={{
              background: '#CACACA',
              borderRadius: '25px',
              width: '345px',
              height: '54px',
              color: 'black',
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap : '20px'
            }}>
                   <img src={google}></img> {/*https://icons8.com/icons/set/ */}
                   Continue with Google
                   <img src={arrow}></img>   {/*https://icons8.com/icons/set/ */}
            </button>
            <section style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                <p style={{color: 'white', margin:'0'}}>@Copy Right 2022</p>
                <p style={{color: 'white'}}>Designed and Developed by AOT Students</p>
            </section>
        </div>
    </div>
  );
}

export default App;