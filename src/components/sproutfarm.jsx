import React, {Component} from "react";
import Sprout from "./sprout";

class SproutFarm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sprouts: [
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
        };
    }
    render() {
        return (
        
            <div class="twelve wide column segment">
                <div class="ts segmented single line items">
                    <div id="colored_bar" class="content">
                        <h2 id="white_font">My Sprout Farm</h2>
                    </div>
                    <div class="ts single line items">
                        <div id="sprout_container" class="ts container grid very">
                            
                            <Sprout key={this.state.sprouts[0].id} value={this.state.sprouts[0].value} id={this.state.sprouts[0].id}/>
                            <Sprout key={this.state.sprouts[1].id} value={this.state.sprouts[1].value} id={this.state.sprouts[1].id}/>
                            <Sprout key={this.state.sprouts[2].id} value={this.state.sprouts[2].value} id={this.state.sprouts[2].id}/>
                            <Sprout key={this.state.sprouts[3].id} value={this.state.sprouts[3].value} id={this.state.sprouts[3].id}/>
                            <Sprout key={this.state.sprouts[4].id} value={this.state.sprouts[4].value} id={this.state.sprouts[4].id}/>
                            <Sprout key={this.state.sprouts[5].id} value={this.state.sprouts[5].value} id={this.state.sprouts[5].id}/>
                            <Sprout key={this.state.sprouts[6].id} value={this.state.sprouts[6].value} id={this.state.sprouts[6].id}/>
                            <Sprout key={this.state.sprouts[7].id} value={this.state.sprouts[7].value} id={this.state.sprouts[7].id}/>
                            <Sprout key={this.state.sprouts[8].id} value={this.state.sprouts[8].value} id={this.state.sprouts[8].id}/>
                            <Sprout key={this.state.sprouts[9].id} value={this.state.sprouts[9].value} id={this.state.sprouts[9].id}/>
                            <Sprout key={this.state.sprouts[10].id} value={this.state.sprouts[10].value} id={this.state.sprouts[10].id}/>
                            <Sprout key={this.state.sprouts[11].id} value={this.state.sprouts[11].value} id={this.state.sprouts[11].id}/>
                            <Sprout key={this.state.sprouts[12].id} value={this.state.sprouts[12].value} id={this.state.sprouts[12].id}/>
                            <Sprout key={this.state.sprouts[13].id} value={this.state.sprouts[13].value} id={this.state.sprouts[13].id}/>
                            <Sprout key={this.state.sprouts[14].id} value={this.state.sprouts[14].value} id={this.state.sprouts[14].id}/>
                            <Sprout key={this.state.sprouts[15].id} value={this.state.sprouts[15].value} id={this.state.sprouts[15].id}/>
                            <Sprout key={this.state.sprouts[16].id} value={this.state.sprouts[16].value} id={this.state.sprouts[16].id}/>
                            <Sprout key={this.state.sprouts[17].id} value={this.state.sprouts[17].value} id={this.state.sprouts[17].id}/>
                            <Sprout key={this.state.sprouts[18].id} value={this.state.sprouts[18].value} id={this.state.sprouts[18].id}/>
                            <Sprout key={this.state.sprouts[19].id} value={this.state.sprouts[19].value} id={this.state.sprouts[19].id}/>
                            <Sprout key={this.state.sprouts[20].id} value={this.state.sprouts[20].value} id={this.state.sprouts[20].id}/>
                            <Sprout key={this.state.sprouts[21].id} value={this.state.sprouts[21].value} id={this.state.sprouts[21].id}/>
                            <Sprout key={this.state.sprouts[22].id} value={this.state.sprouts[22].value} id={this.state.sprouts[22].id}/>
                            <Sprout key={this.state.sprouts[23].id} value={this.state.sprouts[23].value} id={this.state.sprouts[23].id}/>
                            <Sprout key={this.state.sprouts[24].id} value={this.state.sprouts[24].value} id={this.state.sprouts[24].id}/>
                            
                        </div>
                    </div>   
                </div>
            </div>   
        
        );
    }
}

export default SproutFarm