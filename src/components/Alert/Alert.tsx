import React from "react";

interface AlertData {
  children: React.ReactNode;
  isDimissible?: boolean | false;
  alertInfo?: boolean | true;
  alertWarning?: boolean;
  alertSuccess?: boolean;
  alertDanger?: boolean;
}

export default function Alert({
  children,
  isDimissible,
  alertInfo,
  alertWarning,
  alertSuccess,
  alertDanger,
}: AlertData) {
  const classes = `alert ${alertInfo ? "alert-info" : ""} ${
    alertWarning ? "alert-primary" : ""
  } ${alertSuccess ? "alert-success" : ""} ${
    alertDanger ? "alert-danger" : ""
  }`;
  return (
    <div
      className={`${classes} ${
        isDimissible ? "alert-dismissible show fade" : ""
      }`}
      role="alert"
    >
      {children}
      {isDimissible && (
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span className="material-icons-round">close</span>
        </button>
      )}
    </div>
  );
}
