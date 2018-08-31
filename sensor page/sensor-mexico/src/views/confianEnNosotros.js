import React, { Component } from 'react';
import {Carousel} from "react-materialize";
import  "../css/confian.css";



export default class ConfianEnNosotros extends Component {


    componentDidMount(){


    }



    render() {
   return (
          
   
 <div className='car-container'><Carousel options={{ fullWidth: true }}>
 <div className='white'>

  <img className="uas" src='./Assets/panel1.jpg'></img> 
 
 
 </div>
 <div className='white'>
 <img className="uas" src='./Assets/panel2.jpg'></img> 
 </div>
 <div className='white'>
   <img className="uas" src='./Assets/panel3.jpg'></img> 
 </div>
 <div className='white'>
 <img className="uas" src='./Assets/panel4.jpg'></img> 
 </div>
 <div className='white'>
 
 <img className="uas" src='./Assets/panel5.jpg'></img> 
 </div>
</Carousel>



</div>

   
   
    
  

     
      );
  }
}