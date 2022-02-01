import React, { Component } from 'react';

class Counter extends Component {
   state = {
       value: this.props.counter.value,
      
    };


    
    handleIncrement = () => {
        this.setState({value: this.state.value + 1});
    }

    doHandleIncrement = (p) => {
        this.handleIncrement({p});
    }

    handleDecrement = () => {
        this.setState({value: this.state.value - 1});
    }
    doHandleDecrement = (p) => {
        this.handleDecrement({p});
    }
     
 render() { 
    return (
            <div>
                <button 
                className = "btn btn-secondary btn-sm"
                onClick={this.doHandleDecrement}>
                    -</button>
                <span className = {this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick ={this.doHandleIncrement} 
                className = "btn btn-secondary btn-sm">
                    +</button>
                <button className="btn btn-danger btn-sm m-2" 
                onClick={() => this.props.onDelete(this.props.counter.id)}> x </button>

            </div>
        ); 
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.state
        return value === 0 ? 0 : value
    }


}





 
export default Counter;