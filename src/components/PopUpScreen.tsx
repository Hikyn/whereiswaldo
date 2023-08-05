import React, { Component, ReactNode } from "react";
import "../styling/PopUpScreen.css";

interface Props {
  leftSide: ReactNode;
  rightSide: ReactNode;
}
const PopUpScreen: React.FC<Props> = ({ leftSide, rightSide }) => {
  return (
    <div className="StartingScreen">
      <div>{leftSide}</div>
      <div className="border"></div>
      <div>{rightSide}</div>
    </div>
  );
};

export default PopUpScreen;
