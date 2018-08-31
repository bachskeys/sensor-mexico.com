import React, { Component } from 'react';
import '../css/quienesSomos.css';
import {BrowserRouter,Route,Link,Switch,withRouter} from 'react-router-dom';
import MyRouter from './myRouter.js';


const whoAreWE =()=>{

    return(  <div>
    <div className="quienes-container">
           <h1>¿QUIÉNES SOMOS?</h1>
        <div>
            <p id="p1">Sensor, sistemas en Tecnologías S.A. de C.V. es una empresa mexicana especializada en</p>
            <p id="p2">implementación de tecnologías para la seguridad, información y comunicaciones.</p>
            <p id="p3">Acceso a la mayor calidad en innovación tecnológica con equipo propio de desarrollo y lo</p>  
            <p id="p4">más importante, personal calificado y en permanente capacitación.</p>
            <p id="p5">Enfocados en soluciones inteligentes, adaptables, con el mejor costo-beneficio </p>
            <p id="p6">para nuestros clientes.</p>
        </div>
    </div>
 
        <div id="mision-box">
                <div className="mision-text">
                        <h2 id="mision-h2">Mision</h2>
                        <p id="mision-p1">Ofrecer soluciones integrales que brinden seguridad, confianza
                        </p>
                        <p id="mision-p2">
                        y optimicen procesos tanto en el hogar como en la empresa.
                        </p>
                        
                </div>
          
        </div>
        <div id="vision-box">
            <h2 id="vision-h2">Vision</h2>
            <p id="vision-p1">Ser la empresa líder en la implementación de tecnología en el 
            </p>
            <p id="vision-p2">
             mercado de la seguridad electrónica y comunicaciones.
            </p>
        </div>
        <div id="valores-box">
            <h2 id="valores-h2">Valores</h2>
            <div id="valores-box1">
            <div className='honestidad-container'>
            <h3 id="honestidad-text">Honestidad</h3>
                <p id="honestidad-p1">Describir puntualmente los alcances</p>
                <p id="honestidad-p2"> y limitaciones de nuestras soluciones.</p>
            </div>             
            </div>
            <div id="valores-box2">
            <div className="responsabilidad-container">
            <h3 id="responsabilidad-text">Responsabilidad</h3>
                <p id="responsabilidad-p1">Cumplir estrictamente con nuestro </p>
                <p id="responsabilidad-p2">compromiso de calidad, tiempo y </p>
                <p id="responsabilidad-p3">garantía. </p>
            </div>          
            </div>
            <div id="valores-box3">
            <div className="respeto-container">
            <h3 id="respeto-text">Respeto</h3>
                <p id="respeto-p1">En el trato con nuestros clientes y</p>
                <p id="respeto-p2">hacia compañeros y directivos de la  </p>
                <p id="respeto-p3">empresa </p>
            </div>  
            </div>
            <div id="valores-box4">
               <div className='confidencialidad-container'>
                <h3 id="confidencialidad-text">Confidencialidad</h3>
                <p id="confidencialidad-p1">Cuidadoso trato en el uso de </p>
                <p id="confidencialidad-p2">información.</p>
                </div>
                
            
            </div>
        
        
        
        </div>
        </div>);
};




class QuienesSomos extends Component {
     constructor(props){
         super(props);


  
     }
  componentWillMount(){

    console.log(this.context);
  }
  AutoRender(){
     window.location.reload()
  }




  render() {
    return (
    <div>
        <div className="Container">

     
            <div className="flex-container2">
                <div className="item1"><br></br></div>
                <div className="item2">
                <img className='logo' src="./Assets/logo.png"/>
                </div>

            </div>
            <div className="stripe">
                <div className="red-stripe"></div>
                <div className="white-stripe"></div>

            </div>


             <div className="flex-container1">
                <div className="item3">
                <BrowserRouter>
                    <div className="button-container">
                    <div className="button1"><Link to="/"><img id="button1" className="Home-png btn-hover" src="./Assets/home.png" onClick={()=>this.AutoRender()}></img></Link></div>
                    <div className="button2" ><Link to="/Confian"><img id="button2" className="Home-png btn-hover" src="./Assets/confianennosotros.png" onClick={()=>this.AutoRender()}  ></img></Link></div>
                    <div className="button3"><Link to ='/Contactanos'><img id="button3"className="Home-png btn-hover" src="./Assets/contactanos.png" onClick={()=>this.AutoRender()} ></img></Link></div>
                    <div className="button4"><img id="button4"className="Home-png btn-hover" src="./Assets/quienessomoslogo.png"></img></div>

                    </div>
                </BrowserRouter>

                    
                 
                </div>               
                <div className="item4">
                <BrowserRouter>
                    <MyRouter body={whoAreWE}/>
                </BrowserRouter>
                </div>
            </div>
        </div>
         <div className="Footer">
         <h4 id="sensor-footer">WWW.SENSORMEXICO.COM</h4>      
         </div>
    </div>
      
            
           
      
    );
  }
}

export default QuienesSomos;
