import React, { useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";

const CalcButton = ({ value, handleClick }) => {

  const isOperatorCheck = (val) => !isNaN(val) || val === "." || val === "=";

  return (
    <Button
      onClick={value === '=' ? () => handleClick() : () => handleClick(value)}
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
