import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const trafficColors = {
    red: { next: "green", backgroundColor: "red" },
    yellow: { next: "red", backgroundColor: "yellow" },
    green: { next: "yellow", backgroundColor: "green" },
  };
  const [currentColor, setcolor] = useState("yellow");
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {Object.keys(trafficColors).map((color) => (
          <div
            className="circle black"
            style={{
              backgroundColor:
                color === currentColor && trafficColors[color].backgroundColor,
            }}
            key={color}
          ></div>
        ))}
      </div>
      <button
        onClick={() => {
          setcolor(trafficColors[currentColor].next);
        }}
        className="next-state-button"
      >
        Next State
      </button>
    </div>
  );
};
