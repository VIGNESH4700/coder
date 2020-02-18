import  React from 'react';
import '../styles/restaurant-list.css';
import HeaderComponent from '../components/HeaderComponent';
import ButtonComponent from '../components/ButtonComponent';
import ItemComponent from '../components/ItemComponent';
import CartComponent from '../components/CartComponent';
import RestaurantServices from '../util/RestaurantServices';
import RestaurantCard from '../components/RestaurantCard';
class OrderComponent extends React.Component{
    
    constructor(){
        super();
        this.state = {
            menuLists : []
        }
    }
    componentWillMount(){
        this.setState({
            menuLists : RestaurantServices.readMenuJSONFile(this.props.match.params.id)
        });
    }
    printList(){
        let arrayOfCards = []
        for(let object of this.state.menuLists){
            arrayOfCards.push(<ItemComponent items={object} />)
        }
        return arrayOfCards;
    }

    render(){
        return(
            
        <div>
            <HeaderComponent userName="vicky!" />
            <div class="main-container">
                <div class="first-container">
                    <div class="first-sub1">
                        <div>
                        <h1 id="biriyani">The Biriyani Point</h1>
                        <h5 class="indian-biriyani">Indian Biriyanis</h5>
                        <h5 class="indian-biriyani">Kodambakkam, Chennai</h5>
                        </div>
                    </div>
                    <div>
                        <div>
                        <h1 id="item-order">Order Now</h1>
                        </div>
                        {this.printList()}
                    </div>
                </div>
                <div class="second-container">
                    <div className="second-sub3">
                    <h3 id="cart-title">My Cart</h3>
                    </div>
                    {/* <div class="second-sub1">
                        <h5 class="prod-name">Chicken 65 Biriyani</h5>
                        <button class="calculation" onclick="decrement()">-</button>
                        <input class="calculation" type="text" name="Chicken-quan" value="0" id="quan"/>
                        <button class="calculation">+</button>
                        <h4 class="cost">Rs.145</h4>
                    </div>  */}
                     <CartComponent />
                    <div class="second-sub1">
                        <h5 class="prod-name">Venila Ice Cream</h5>
                        <button class="calculation">-</button>
                        <input class="calculation" type="text" name="Chicken-quan" value="0"/>
                        <button class="calculation">+</button>
                        <h4 class="cost">Rs.100</h4>
                    </div>
                    <div class="second-sub2">
                        <h5 class="total2" >Sub Total<span class="sub-total">Rs.340</span></h5>
                        <h5 class="total">Delivery Charges<span className="sub2">45</span></h5>
                        <h5 class="total">Coupon(SUPER)<span className="sub2">-90</span></h5>
                        <h5 class="total2">Grand Total<span class="sub-total">Rs.295</span></h5>
                        <ButtonComponent type="submit" value="PAY NOW" id="submit"/>
                    </div>
                </div>
            </div>
        </div>
        );

    }
}

export default OrderComponent;