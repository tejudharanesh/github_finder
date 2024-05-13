import React from "react";
import { useContext } from "react";
import alertContext from "../../context/alert/AlertContext";

const Alert = () => {
  const { alert } = useContext(alertContext);
  return (
    alert !== null && (
      <div>
        <p className="font-semibold">{alert.msg}</p>
      </div>
    )
  );
};

export default Alert;
