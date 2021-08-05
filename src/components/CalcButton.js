import React, { useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";

const CalcButton = ({ value, addToResult }) => {
  const [number, setNumber] = useState(value);

  const isOperatorCheck = (val) => !isNaN(val) || val === "." || val === "=";

  /*
  const getValue = (event) => {
    setNumber(event.target.value);
  };
  */

  return (
    <Button
      onClick={() => addToResult(value)}
      value={value}
      variant='outlined'
      className={`button ${isOperatorCheck(value) ? "" : "operator"}`}
      style={{ padding: 20, backgroundColor: "#e0e1e6" }}
    >
      {value}
    </Button>
  );
};

export default CalcButton;
