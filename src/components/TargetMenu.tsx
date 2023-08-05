import React from "react";
import "../styling/TargetMenu.css";

interface Props {
  isLeft: boolean;
  pageX: number;
  pageY: number;
  targets: {
    name: string;
    startX: number;
    startY: number;
    endX: number;
    endY: number;
  }[];
  validateAnswer: (name: string, posX: number, posY: number) => void;
}

const TargetMenu: React.FC<Props> = ({
  isLeft,
  pageX,
  pageY,
  targets,
  validateAnswer,
}) => {
  let leftCss: string;
  if (isLeft) {
    leftCss = `calc((calc(${pageX}px - calc(var(--target-box-size) * 2))) - 30px);`;
  } else {
    leftCss = `calc((calc(${pageX}px + calc(var(--target-box-size) * 0.5))) + 30px);`;
  }
  const css = `
    .target-menu {
        position: absolute;
        top: calc(${pageY}px - calc(var(--target-box-size) / 2));
        left: ${leftCss}
        border-radius: ${isLeft ? "20% 0% 0% 20%" : "0% 20% 20% 0%"};
    }
    `;

  return (
    <div className="target-menu">
      <style>{css}</style>
      {targets.map((target) => {
        return (
          <div className="flexContainer">
            <img
              src={"images/" + target.name + ".png"}
              alt={"Image of " + target.name}
            ></img>
            <button
              key={target.name}
              onClick={() => validateAnswer(target.name, pageX, pageY)}
            >
              {target.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TargetMenu;
