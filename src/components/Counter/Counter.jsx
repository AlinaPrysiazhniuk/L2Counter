//import React from 'react';
//import { Controls } from './Controls';
//import { Value } from './Value';
import { useState, useEffect } from 'react';
//import { Value } from './Value';

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
  //const [counterA, setCounterA] = useState(0);
  //const [counterB, setCounterB] = useState(0);
  const [totalClicks, setCount] = useState(0);

  // const handleCounterIncrement = () => {
  //   setCount(state => state + 1);
  // };

  // const handleCounterDecrement = () => {
  //   setCount(state => state - 1);
  // };

  useEffect(() => {
    // const totalClicks = counterA + counterB;
    // console.log(totalClicks);
    document.title = `totalClicks = ${totalClicks}`;
    console.log(document.title);
  });

  return (
    <>
      <p>Ви натиснули {totalClicks} разів</p>
      <button type="button" onClick={() => setCount(totalClicks + 1)}>
        Збільшити на 1
      </button>

      <button type="button" onClick={() => setCount(totalClicks - 1)}>
        Зменшити на 1
      </button>
    </>
  );
}
