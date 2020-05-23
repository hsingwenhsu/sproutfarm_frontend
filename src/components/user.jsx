import React, {Component} from "react";
import '../index.css';
class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: this.props.username,
            level: 1,
            userbalance: this.props.userbalance
        }
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
                                Username: {this.state.username}
                            </div>  
                        </div>
                    </div>
                    <div  class="item">
                        <div class="content">
                            <div class="ts header">
                                Level: {this.state.level}
                            </div>  
                        </div>
                    </div>
                    <div  class="item">
                        <div class="content">
                            <div class="ts header">
                                Balance: {this.props.userbalance} $
                            </div>  
                        </div>
                    </div>
                </div>
            </div>       
        )
    }
}

export default User