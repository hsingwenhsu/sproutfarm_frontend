import React from 'react';
import ReactDOM from 'react-dom';
import Sprout from './components/sprout';
import SproutFarm from './components/sproutfarm';
import SproutHeader from './components/sproutheader';
import User from './components/user';
import Shop from './components/shop';
import './index.css';
class SproutApp extends React.Component {
    constructor(props){
        super(props);
    }

    render () {
        return (
            <div>
                <SproutHeader/>
                <div id="main_container" class="ts container grid very">
                    <div class="four wide column segment">
                        <User/>
                        <Shop/>
                    </div>   
                        <SproutFarm/>
                </div>
            </div>
        );
    }

}
ReactDOM.render(<SproutApp/>, document.getElementById('root'));