import React from "react";
import "../styling/TargetBox.css";

interface Props {
  isLeft: boolean;
  pageX: number;
  pageY: number;
}

const TargetBox: React.FC<Props> = ({ isLeft, pageX, pageY }) => {
  const css = `
    .target-box {
        position: absolute;
        top: calc(${pageY}px - calc(var(--target-box-size) / 2));
        left: calc(${pageX}px - calc(var(--target-box-size) / 2));
        border-radius: ${isLeft ? "0% 20% 20% 0%" : "20% 0% 0% 20%"};
    }
    `;
  return (
    <div className="target-box">
      <style>{css}</style>
    </div>
  );
};

export default TargetBox;
