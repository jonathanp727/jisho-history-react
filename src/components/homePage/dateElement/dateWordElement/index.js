import React from 'react';

const DateWordElement = ({ word }) => (
  <div>
    { word.word + ' '}
    { word.count }
  </div>
)

export default DateWordElement;
