import React from "react";
import "./animation.scss";

interface AnimationProps {
  children: React.ReactNode;
}

const Animation = ({ children }: AnimationProps) => {
  return (
    <>
      <div className="area">
        <ul className="circles p-0">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      {children}
    </>
  );
};

export default Animation;
