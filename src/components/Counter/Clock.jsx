//import React, { Component } from 'react';
import { useEffect, useState, useRef } from 'react';

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      console.log('Це інтервал кожні 1000 ms' + Date.now());
      setTime(new Date());
    }, 1000);
  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div>
      <p>Поточний час: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Зупинити
      </button>
    </div>
  );
}

// export class Clock extends Component {
//   state = {
//     time: new Date(),
//   };

//   intervalId = null;

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       console.log('Це інтервал кожні 1000 ms' + Date.now());
//       this.setState({ time: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     console.log('Цей метод викликається перед розмонтуванням компонента');
//     this.stop();
//   }

//   stop = () => {
//     clearInterval(this.intervalId);
//   };

//   render() {
//     return (
//       <div>
//         <p>Поточний час: {this.state.time.toLocaleTimeString()}</p>
//         <button type="button" onClick={this.stop}>
//           {' '}
//           Зупинити
//         </button>
//       </div>
//     );
//   }
// }
