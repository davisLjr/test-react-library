import React from "react";

export interface ProgressBarProps {
  progress: number;
  increaseProgress?: () => void;
  decreaseProgress?: () => void;
  type?: "bg-success" | "bg-info";
  description?: string;
}

const ProgressDescription: React.FC<{description?: string}> = ({
  description,
}) => {
  return description ? <p className="steps">{description}</p> : null;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  type,
  description,
  // increaseProgress,
  // decreaseProgress,
}) => {
  return (
    <div>
      <ProgressDescription description={description} />
      <div className="progress">
        <div
          className={`progress-bar ${type}`}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{width: `${progress}%`}}
        ></div>
      </div>
      {/* <button onClick={decreaseProgress}>Disminuir</button>
      <button onClick={increaseProgress}>Aumentar</button> */}
    </div>
  );
};

ProgressBar.defaultProps = {
  type: "bg-info",
};

export default ProgressBar;

// En caso de necesitar varias barras de progreso a la vez, se puede estudiar este modelo donde los botones vienen dentro, sino tendran que crear componentes por barra de progreso con sus botones y luego importarlos pero al no estar en el interface este genera conflicto, consultar con los chicos.
// import React, { useState } from 'react';

// interface ProgressBarProps {
//   progress: number;
//   increaseProgress: () => void;
//   decreaseProgress: () => void;
//   type: 'bg-success' | 'bg-info';
// }

// const ProgressBar: React.FC<ProgressBarProps> = (props) => {
//   const [progress, setProgress] = useState(0);

//   const increaseProgress = () => {
//     if (progress < 100) {
//       setProgress(progress + 25);
//     }
//   }

//   const decreaseProgress = () => {
//     if (progress > 0) {
//       setProgress(progress - 25);
//     }
//   }

//   static defaultProps = {
//     type: 'bg-info',
//   };

//   return (
//     <div>
//       <div className="progress">
//         <div
//           className={`progress-bar ${this.props.type}`}
//           role="progressbar"
//           aria-valuenow={progress}
//           aria-valuemin={0}
//           aria-valuemax={100}
//           style={{ width: `${progress}%` }}
//         ></div>
//       </div>
//       <button onClick={decreaseProgress}>Disminuir</button>
//       <button onClick={increaseProgress}>Aumentar</button>
//     </div>
//   );
// };

// export default ProgressBar;
