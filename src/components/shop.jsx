import React, {Component} from "react";
import ShopItem from './shopitem';
class Shop extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        
        return(
            <div class="ts segmented single line items">
                <div id="colored_bar" class="content">
                    <h2 id="white_font">Shop</h2>
                </div>
                <div class="ts single line items">
                    <ShopItem/>
                    <ShopItem/>
                </div>
            </div>       
        )
    }
}

export default Shop