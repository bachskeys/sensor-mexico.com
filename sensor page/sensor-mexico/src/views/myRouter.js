import React, { Component } from 'react';
import '../css/quienesSomos.css';
import {BrowserRouter,Route,Switch,withRouter} from 'react-router-dom';
import ConfianEnNosotros from "./confianEnNosotros.js";
import Contactanos from "./contactanos.js";

class MyRouter extends Component{

render() {return( 

  
    
    <div>
        <Switch>
        <Route path="/"  component={this.props.body} exact />
        <Route path="/Confian"  component={ConfianEnNosotros} exact/>
        <Route path="/Contactanos"  component={Contactanos} exact/>

        </Switch>
       
    </div>            

    
);}



}



export default  withRouter(MyRouter)