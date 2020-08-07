import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: true,
    //displayLegend: true,
    //legendPosition: "right",
    location: "State"
  };

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Religious affiliations of " + this.props.location+" people",
              fontSize: 25
            },
            legend: {
              //display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
