//import React from 'react';
//import { Controls } from './Controls';
//import { Value } from './Value';
import { useState } from 'react';
import { Value } from './Value';

// export class Counter extends React.Component {
//   static defaultProps = {
//     initialValue: 0,
//   };

//   state = {
//     value: this.props.initialValue,
//   };

//   handleIncrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value + 1,
//     }));
//   };

//   handleDecrement = () => {
//     this.setState(prevState => ({
//       value: prevState.value - 1,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <Value value={this.state.value} />
//         <Controls
//           onIncrement={this.handleIncrement}
//           onDecrement={this.handleDecrement}
//         />
//       </div>
//     );
//   }
// }

export default function CounterFunction() {
  // const [counterA, setCounterA] = useState(0);
  // const [counterB, setCounterB] = useState(0);
  const [totalCounter, setTotalCounter] = useState(0);

  const handleCounterAIncrement = () => {
    // setCounterA(state => state + 1);
    setTotalCounter(state => state + 1);
  };

  const handleCounterBIncrement = () => {
    // setCounterB(state => state + 1);
    setTotalCounter(state => state - 1);
  };

  return (
    <>
      <Value value={totalCounter} />
      <button type="button" onClick={handleCounterAIncrement}>
        Збільшити на 1
      </button>

      <button type="button" onClick={handleCounterBIncrement}>
        Зменшити на 1
      </button>
    </>
  );
}
