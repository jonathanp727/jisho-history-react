import React from 'react';

const WordElement = ({ word }) => (
  <div>
    { word.word + ' '}
    { word.count }
  </div>
)

export default WordElement;
