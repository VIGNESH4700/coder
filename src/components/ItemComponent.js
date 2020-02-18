import React from 'react'
import '../styles/ButtonCompon.css';
import ButtonComponent from './ButtonComponent';
class ItemComponent extends React.Component{
    constructor()
    {
        super();
    }
    render(){
        return(
            <div class="first-sub2">
                <h2 class="item-title">{this.props.items.itemName}</h2> 
                <ButtonComponent type="button" value="Add" className="add"/>
                <h6 class="sub2-padd">{this.props.items.desc}</h6>
                <h5>Rs. {this.props.items.price}</h5>
            </div>
        );
    }
}

export default ItemComponent;