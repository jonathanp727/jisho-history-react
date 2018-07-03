import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Initial React Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
