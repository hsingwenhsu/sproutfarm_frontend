import React from 'react';
import ReactDOM from 'react-dom';
import Sprout from './components/sprout';
import SproutFarm from './components/sproutfarm';
import SproutHeader from './components/sproutheader';
import User from './components/user';
import Shop from './components/shop';
import './index.css';

var sprouts = [
    {id: 0, value:0},
    {id: 1, value:0},
    {id: 2, value:0},
    {id: 3, value:0},
    {id: 4, value:0},
    {id: 5, value:0},
    {id: 6, value:0},
    {id: 7, value:0},
    {id: 8, value:0},
    {id: 9, value:0},
    {id: 10, value:0},
    {id: 11, value:0},
    {id: 12, value:0},
    {id: 13, value:0},
    {id: 14, value:0},
    {id: 15, value:0},
    {id: 16, value:0},
    {id: 17, value:0},
    {id: 18, value:0},
    {id: 19, value:0},
    {id: 20, value:0},
    {id: 21, value:0},
    {id: 22, value:0},
    {id: 23, value:0},
    {id: 24, value:0}
]
class SproutApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "Goldy",
            userbalance: 20000,
            sprouts: sprouts
        }
        this.addSprout = this.addSprout.bind(this);
        this.plugSprout = this.plugSprout.bind(this);
        this.handlePurchase = this.handlePurchase.bind(this);
    }
    handlePurchase(itemcost){
        console.log(itemcost);
        console.log(this.state.userbalance);
        this.setState({userbalance: this.state.userbalance-itemcost});
        console.log(this.state.userbalance);
        console.log('handlePurchase');
    }

    addSprout(sproutid){
        this.state.sprouts[sproutid].value = 1;
        this.setState({sprouts: sprouts});
        console.log('index.js addSprout');
    }

    plugSprout(sproutid) {
        this.state.sprouts[sproutid].value = 0;
        this.setState({sprouts: sprouts});
        console.log('index.js plugSprout');
    }

    render () {
        return (
            <div>
                <SproutHeader/>
                <div id="main_container" class="ts container grid very">
                    <div class="four wide column segment">
                        <User username={this.state.username} userbalance={this.state.userbalance} />
                        <Shop handlePurchase={this.handlePurchase} />
                    </div>   
                        <SproutFarm addSprout={this.addSprout} plugSprout={this.plugSprout} sprouts={this.state.sprouts} />
                </div>
            </div>
        );
    }

}
ReactDOM.render(<SproutApp/>, document.getElementById('root'));