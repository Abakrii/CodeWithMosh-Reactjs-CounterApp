import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value,
        tags: [
            'tag1',
            'tag2',
            'tag3'
        ]
    }

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }
    handleIncrement = product => {
        console.log('product', product)

        this.setState({ value: this.state.value + 1 })
    }

    doHandleIncrement = () =>{
        this.handleIncrement({id:1})
    }
    render() {
        console.log("props", this)
        return (
            <div>
                {this.props.children}
                <span className={this.getBagdeClasses()}>{this.formatCount()}</span>

                <button 
                onClick={()=>this.handleIncrement({product:1})} 
                className="btn btn-secondary btn-sm"
                >
                    Increment
                    </button>
            </div>
        );
    }



    getListOfTags() {
        const listOfTags = this.state.tags.map(tag => <li key={tag}>{tag}</li>)
        return listOfTags
    }

    getBagdeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'zero' : count;
    }

}

export default Counter;