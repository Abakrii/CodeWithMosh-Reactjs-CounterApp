import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
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

        this.setState({ count: this.state.count + 1 })
    }

    doHandleIncrement = () =>{
        this.handleIncrement({id:1})
    }
    render() {
        return (
            <React.Fragment>
                <span className={this.getBagdeClasses()}>{this.formatCount()}</span>
                {/* <ul>
                    {this.state.tags.length === 0 && 'please Create a new tag'}
                    {this.getListOfTags()}
                </ul> */}
                <button 
                onClick={()=>this.handleIncrement({product:1})} 
                className={this.getBagdeClasses()}
                >
                    Increment
                    </button>
            </React.Fragment>
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