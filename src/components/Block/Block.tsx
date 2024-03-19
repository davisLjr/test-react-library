import React from "react";
import classNames from "classnames";
import {ProgressBarProps} from "../ProgressBar/ProgressBar";
import ProgressBar from "../ProgressBar/ProgressBar";

export interface ButtonBlockProps {
  title?: string;
  description?: string;
  blockProgressBar?: ProgressBarProps;
  isLight?: boolean;
}

export default function Block(
  props: React.PropsWithChildren<ButtonBlockProps>,
) {
  const {title, description, blockProgressBar, isLight, children} = props;

  const BlockClasses = classNames("card", "card-block", {
    "bg-light": isLight,
  });

  return (
    <div className={BlockClasses.trim()}>
      <div className="card-body">
        {title && <h4 className="block-title">{title}</h4>}
        {description && <p className="block-text">{description}</p>}
        {blockProgressBar && (
          <ProgressBar
            type={blockProgressBar.type}
            progress={blockProgressBar.progress}
          />
        )}
        {children}
      </div>
    </div>
  );
}
