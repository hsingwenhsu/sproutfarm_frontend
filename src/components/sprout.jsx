import React, {Component} from 'react';

class Sprout extends Component {
    constructor(props){
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.doHandleIncrement = this.doHandleIncrement.bind(this);
        this.state = {
            value: this.props.value,
        };
        
    }
    handleIncrement(product){
        console.log(product);
        if(this.state.value==1){
            this.setState({value: 0})
        }
        else{
            this.setState({value: 1})
        }
        
    };
    doHandleIncrement() {
        this.handleIncrement();
    }
    
    render() {
        var icon;
        if(this.state.value==0){
            icon='./img/plantit.png';
        } else{
            icon='./img/seed.png';
        }

        return (      
            
            <div class="three wide column segmented">
                <div class="ts tiny segmented single line items">
                    <div class="content">
                        <div class="ts secondary segment">
                            <center>
                                <button className="btn" onClick={this.doHandleIncrement} className="btn btn-secondary">
                                    <center><img height="80" width="80" src={icon}/></center>
                                </button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
                
        );
    }
    formatCount() {
        const {value} = this.state;
        return value===0 ? "Zero" : value;
    }
}

export default Sprout