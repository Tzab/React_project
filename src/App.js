import React, { Component } from "react";
//import logo from './logo.svg';
import "./styles.css";
import Chart from "./compo/Charts";

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }

  componentWillMount() {
    // this.getchartData();
    this.getChartData();
  }

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: [
          "Protestantism",
          "Catholicism ",
          "Non-religious",
          "Mormonism",
          "Native religions",
          "Other"
        ],
        datasets: [
          {
            label: "People",
            data: [3057180, 2256490, 1310220, 436740, 145580, 72790],
            backgroundColor: [
              //'rgba(255, 99, 132, 0.6)',
              //'rgba(54, 162, 235, 0.6)',
              "rgba(52, 52, 52, 0.3)",
              "rgba(52, 52, 52, 0.3)",
              "rgba(52, 52, 52, 0.3)",
              "rgba(52, 52, 52, 0.3)",
              "rgba(52, 52, 52, 0.3)",
              "rgba(52, 52, 52, 0.3)"
            ]
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Chart
          chartData={this.state.chartData}
          location="Arizona"
          legendPosition="bottom"
        />
      </div>
    );
  }
}

export default App;
