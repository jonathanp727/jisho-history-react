import React from 'react';
import { Bar } from 'react-chartjs-2';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class WordDataPanel extends React.Component {
  data = {
    labels: [],
    datasets: [
      {
        label: 'Hits in last year',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ],
  };
  options = {
    scales: {
      yAxes: [{
        ticks: {
          fixedStepSize: 1,
        }
      }],
    },
  };
  constructor(props) {
    super(props);

    // Set up labels
    let curDate = new Date().toDateString();
    let curMonth = curDate.substring(4, 7);
    let index = months.findIndex((el) => {
      return el === curMonth;
    });
    // Start from earlist month and push all months into labels arr
    let itr = index + 1;
    while(itr % 12 != index) {
      this.data.labels.push(months[itr % 12]);
      itr++;
    }
    this.data.labels.push(months[index]);

    // Read in data
    const earliestAllowedPoint = (new Date().getTime() / 1000) - 31540000;
    for(let i = 0; i < this.props.word.dates.length; i++) {
      if(this.props.word.dates[i] < earliestAllowedPoint) {
        continue;
      }
      let date = new Date(this.props.word.dates[i]).toDateString();
      let month = date.substring(4, 7);
      let index = this.data.labels.findIndex((el) => {
        return el === month;
      });
      this.data.datasets[0].data[index]++;
    }
  }
  render() {
    return (
      <div>
        <Bar data={this.data} options={this.options}/>
      </div>
    )
  }
}

export default WordDataPanel;
