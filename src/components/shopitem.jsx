import React, {Component} from "react";

class ShopItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        var icon = './img/fertilizer.png';
        var itemname = 'Fertilizer';
        return(
            <div id="shopitem" class="ts secondary segment">
                <div class="item">
                    <div class="content">
                        <div>
                            <center><img height="100" src={icon}/></center>
                        </div>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <div class="ts header">Product: {itemname}</div>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <div class="ts header">Cost: 100 $ </div>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                        <center><button class="ts button info">Purchase</button></center>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopItem