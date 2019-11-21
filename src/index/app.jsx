import React from 'react';
import { render } from 'react-dom';

export const t = () => {
  render(<h1>Hello world</h1>, document.querySelector('#root'));
};
