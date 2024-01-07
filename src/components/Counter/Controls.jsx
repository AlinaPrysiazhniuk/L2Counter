import React from 'react';

export const Controls = ({ onIncrement, onDecrement }) => (
  <div>
    <button type="button" onClick={onIncrement}>
      Збільшити на 1
    </button>
    <button type="button" onClick={onDecrement}>
      Зменшити на 1
    </button>
  </div>
);
