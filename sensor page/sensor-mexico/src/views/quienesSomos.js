import React, { Component } from 'react';
import '../css/quienesSomos.css';

class QuienesSomos extends Component {
  render() {
    return (
    <div>
        <div className="Container">
            <div className="flex-container2">
                <div className="item1"><br></br></div>
                <div className="item2"><br></br></div>

            </div>
            <div className="stripe">
                <div className="red-stripe"></div>
                <div className="white-stripe"></div>

            </div>


             <div className="flex-container1">
                <div className="item3">
                    <div className="button-container">
                    <div className="button1"> <img id="button1" className="Home-png" src="./Assets/home.png"></img></div>
                    <div className="button2"><img id="button2" className="Home-png" src="./Assets/confianennosotros.png"></img></div>
                    <div className="button3"> <img id="button3"className="Home-png" src="./Assets/contactanos.png"></img></div>
                    
                    </div>
{/*                    
                    <img id="button1" className="Home-png" src="./Assets/home.png"></img>
                    <img id="button2" className="Home-png" src="./Assets/confianennosotros.png"></img>
                    <img id="button3"className="Home-png" src="./Assets/contactanos.png"></img>
                */}
                    
                 
                </div>               
                <div className="item4"><br></br></div>
            </div>
        </div>
         <div className="Footer"></div>
    </div>
      
            
           
      
    );
  }
}

export default QuienesSomos;
