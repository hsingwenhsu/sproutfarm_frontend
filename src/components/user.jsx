import React, {Component} from "react";
import '../index.css';
class User extends Component {
    constructor(props){
        super(props);
    }
    render(){
        var icon = './img/gold.png';
        return(
            <div class="ts segmented single line items">
                <div id="colored_bar" class="content">
                    <h2 id="white_font">User</h2>
                </div>
                <div id="user" class="ts secondary segment">
                    <div  class="item">
                        <div class="content">
                            <div>
                                <center><img height="100" src={icon}/></center>
                            </div>  
                        </div>
                    </div>
                    <div  class="item">
                        <div class="content">
                            <div class="ts header">
                                Username: Goldy
                            </div>  
                        </div>
                    </div>
                    <div  class="item">
                        <div class="content">
                            <div class="ts header">
                                Level: 1
                            </div>  
                        </div>
                    </div>
                    <div  class="item">
                        <div class="content">
                            <div class="ts header">
                                Balance: 10000 $
                            </div>  
                        </div>
                    </div>
                </div>
            </div>       
        )
    }
}

export default User