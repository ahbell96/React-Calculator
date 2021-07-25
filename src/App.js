import logo from "./logo.svg";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import "./App.css";
import React, { Component } from "react";
import CalcButton from "./components/CalcButton";
import OperatorButton from "./components/OperatorButton";

export default class App extends Component {
  componentDidMount() {}

  componentDidUpdate() {}

  state = {
    totalValue: 0
  };

  render() {
    return (
      <Grid
        className="App"
        direction="column"
        container
        style={{ height: "100vh" }}
      >
        <Grid className="calc-wrapper">
          <Grid className="row">
            <CalcButton value="7"></CalcButton>
            <CalcButton value="8"></CalcButton>
            <CalcButton value="9"></CalcButton>
            <OperatorButton value="X"></OperatorButton>
            <br />
            <CalcButton value="1"></CalcButton>
            <CalcButton value="2"></CalcButton>
            <CalcButton value="3"></CalcButton>
            <OperatorButton value="-"></OperatorButton>
            <br />
            <CalcButton value="4"></CalcButton>
            <CalcButton value="5"></CalcButton>
            <CalcButton value="6"></CalcButton>
            <OperatorButton value="+"></OperatorButton>
            <br />
            <OperatorButton value="N"></OperatorButton>
            <CalcButton value="0"></CalcButton>
            <OperatorButton value="."></OperatorButton>
            <OperatorButton value="="></OperatorButton>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
