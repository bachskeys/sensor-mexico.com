import React, { Component } from 'react';
import "../css/contactanos.css";



export default class Contactanos extends Component{

render(){
    return(
<div class="container">
					<div class="cont-flip">
						<div class="front">
							<h2>Contactanos</h2>
						</div>
						<div class="back">
							<a href="#" class="flip close"></a>
							<form class="contact-form" action="">
								<input class="gutter" type="text" placeholder="Name"/>
								<input class="gutter" type="text" placeholder="Telephone"/>
								<input type="text" placeholder="Email"/>
								<textarea name="" id="text-area" placeholder="Leave a message"></textarea>
								<input type="submit" value="Send"/>
							</form>
						</div>
					</div>
</div>

    );
}


}
