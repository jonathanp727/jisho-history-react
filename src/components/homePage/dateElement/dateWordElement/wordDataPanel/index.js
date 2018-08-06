import React from 'react';
import { Bar } from 'react-chartjs-2';

class WordDataPanel extends React.Component {
  data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Bar data={this.data}/>
      </div>
    )
  }
}

export default WordDataPanel;
