import logo from "./logo.svg";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import "./App.css";
import React, { Component } from "react";
import CalcButton from "./components/CalcButton";

export default class App extends Component {
  componentDidMount() {}

  componentDidUpdate() {}

  state = {
    totalValue: 0,
  };

  render() {
    return (
      <Grid
        className='App'
        direction='column'
        container
        justifyContent='center'
        style={{ height: "100vh" }}
      >
        <Grid
          className='calc-wrapper'
          container
          alignItems='center'
          alignContent='center'
        >
          <Grid className='row' justifyContent='center'>
            <CalcButton value='7'></CalcButton>
            <CalcButton value='8'></CalcButton>
            <CalcButton value='9'></CalcButton>
            <CalcButton value='*'></CalcButton>
          </Grid>
          <Grid className='row' justifyContent='center'>
            <CalcButton value='4'></CalcButton>
            <CalcButton value='5'></CalcButton>
            <CalcButton value='6'></CalcButton>
            <CalcButton value='+'></CalcButton>
          </Grid>
          <Grid className='row' justifyContent='center'>
            <CalcButton value='1'></CalcButton>
            <CalcButton value='2'></CalcButton>
            <CalcButton value='3'></CalcButton>
            <CalcButton value='-'></CalcButton>
          </Grid>
          <Grid className='row' justifyContent='center'>
            <CalcButton value='0'></CalcButton>
            <CalcButton value='.'></CalcButton>
            <CalcButton value='='></CalcButton>
            <CalcButton value='/'></CalcButton>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
