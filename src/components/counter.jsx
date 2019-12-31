import React, { Component } from "react";

class Counter extends Component {
//   state = {
//     value: this.props.counter.value,
//     tags: ["tag1", "tag2", "tag3"],
//     test: {
//       test1: "ab",
//       test2: "bc",
//       test3: "cd"
//     }
//   };

  // constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this)
  // }
  handleIncrement = product => {
    console.log("product", product);

    this.setState({ value: this.state.value + 1 });
    // for(let x in this.state.test) {
    //     console.log(x)
    // }
  };

//   doHandleIncrement = () => {
//     this.handleIncrement({ id: 1 });
//   };
  render() {
    console.log('counter is Rendered')
    return (
      <div>
        <span className={this.getBagdeClasses()}>{this.formatCount()}</span>
        <button
        onClick={()=>this.props.onIncrement(this.props.counter)}
        //   onClick={() => this.handleIncrement({ product: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button 
            onClick={()=>this.props.onDelete(this.props.counter.id)}
        className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  getListOfTags() {
    const listOfTags = this.state.tags.map(tag => <li key={tag}>{tag}</li>);
    return listOfTags;
  }

  getBagdeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
