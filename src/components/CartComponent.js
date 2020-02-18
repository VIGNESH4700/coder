import React from 'react'
import '../styles/ButtonCompon.css';
import ButtonComponent from './ButtonComponent';
class CartComponent extends React.Component{
    constructor()
    {
        super();
    }
    render(){
        return(
            <div class="second-sub1">
                <h5 class="prod-name">Chicken 65 Biriyani</h5>
                <button class="calculation" onclick="decrement()">-</button>
                <input class="calculation" type="text" name="Chicken-quan" value="0" id="quan"/>
                <button class="calculation">+</button>
                <h4 class="cost">Rs.145</h4>
            </div>
        );
    }
}

export default CartComponent;