import React from "react";
import "../styling/TargetIntroduction.css";

type Target = {
  name: string;
  startX: number;
  endX: number;
  startY: number;
  endY: number;
};

type TargetList = Target[];

interface Props {
  targets: TargetList;
  startGame: () => void;
}

const TargetIntroduction: React.FC<Props> = ({ targets, startGame }) => {
  return (
    <div className="targets">
      <h1>You need to find:</h1>
      {targets.map((target) => {
        return (
          <div className="flexContainer" key={"container-" + target.name}>
            <img
              src={"images/" + target.name + ".png"}
              alt={"Image of " + target.name}
            ></img>
            <div key={"Introduction-" + target.name}>{target.name}</div>
            <br></br>
          </div>
        );
      })}
      <button onClick={startGame}>Get started!</button>
    </div>
  );
};

export default TargetIntroduction;
