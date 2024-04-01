import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    currentColor: "red",
  };
  render() {
    const trafficColors = {
      red: { next: "green", backgroundColor: "red" },
      yellow: { next: "red", backgroundColor: "yellow" },
      green: { next: "yellow", backgroundColor: "green" },
    };
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {Object.keys(trafficColors).map((color) => (
            <div
              className="circle black"
              style={{
                backgroundColor:
                  color === this.state.currentColor &&
                  trafficColors[color].backgroundColor,
              }}
            ></div>
          ))}
        </div>
        <button
          onClick={() => {
            this.setState({
              currentColor: trafficColors[this.state.currentColor].next,
            });
          }}
          className="next-state-button"
        >
          Next State
        </button>
      </div>
    );
  }
}
