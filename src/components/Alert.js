// Alert.js
import React, { useEffect, useRef } from "react";
import { Toast } from "bootstrap"; // comes from the bundle import above

export default function Alert({ alert }) {
  const toastRef = useRef(null);

  useEffect(() => {
    if (alert && toastRef.current) {
      const t = new Toast(toastRef.current, { delay: 2000 });
      t.show();
    }
  }, [alert]);

  const tone =
    alert?.type === "success"
      ? "bg-success text-white"
      : alert?.type === "danger"
      ? "bg-danger text-white"
      : alert?.type === "warning"
      ? "bg-warning text-dark"
      : alert?.type === "info"
      ? "bg-info text-dark"
      : "bg-secondary text-white";

  return (
    <div
      className="toast-container position-fixed bottom-0 end-0 p-3"
      style={{ zIndex: 1100 }}
    >
      <div
        ref={toastRef}
        className="toast align-items-center"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className={`toast-body ${tone}`}>{alert?.message || ""}</div>
      </div>
    </div>
  );
}
