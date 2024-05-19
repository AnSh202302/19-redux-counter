import { connect, useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { Component } from "react";

// const Counter = () => {
//   const counter = useSelector((state) => state.counter);
//   const dispatch = useDispatch();

//   const incrementHandler = () => {
//     dispatch({ type: "increment" });
//   };
//   const decrementHandler = () => {
//     dispatch({ type: "decrement" });
//   };

//   const toggleCounterHandler = () => {};

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={decrementHandler}>-</button>
//         <button onClick={incrementHandler}>+</button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

class Counter extends Component() {
  decrementHandler() {
    this.props.increment();
  }
  incrementHandler() {
    this.props.decrement();
  }
  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.decrementHandler.bind(this)}>-</button>
          <button onClick={this.incrementHandler.bind(this)}>+</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
