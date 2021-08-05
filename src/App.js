import logo from "./logo.svg";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import "./App.css";
import React, { Component } from "react";
import CalcButton from "./components/CalcButton";
import Result from "./components/Result";
import ClearButton from './components/ClearButton';
import { evaluate } from 'mathjs';

export default class App extends Component {

  /*
  constructor(props) {
    super(props);
  }
  */


  componentDidMount() {}

  componentDidUpdate() {}

  state = {
    result: "",
    total: "",
    next: null,
    operation: null
  };

  setResult = () => {
    
  }

  handleClear = () => {
    this.setState({result: "", total: ""});
  }

  addToResult = (value) => {
    this.setState({result: this.state.result + value});
    console.log(this.result);
  }

  totalResult = () => {
    console.log(this.state.result)
    this.setState({total: evaluate(this.state.result)})
  }

  render() {
    return (
      <Grid
        className='App'
        direction='column'
        container
        justifyContent='center'
        style={{ height: "100vh", maxWidth: "80%", margin: "0 auto" }}
      >
        <Grid
          className='calc-wrapper'
          container
          alignItems='center'
          alignContent='center'
        >
          <Grid className='row' justifyContent='center'>
            <Result result={this.state.result} total={this.state.total}/>
          </Grid>
          <Grid className='row' justifyContent='center'>
            <CalcButton value='7' handleClick={this.addToResult}></CalcButton>
            <CalcButton value='8' handleClick={this.addToResult}></CalcButton>
            <CalcButton value='9' handleClick={this.addToResult}></CalcButton>
            <CalcButton value='*' handleClick={this.addToResult}></CalcButton>
          </Grid>
          <Grid className='row' justifyContent='center'>
            <CalcButton value='4' handleClick={this.addToResult}></CalcButton>
            <CalcButton value='5' handleClick={this.addToResult}></CalcButton>
            <CalcButton value='6' handleClick={this.addToResult}></CalcButton>
            <CalcButton value='+' handleClick={this.addToResult}></CalcButton>
          </Grid>
          <Grid className='row' justifyContent='center'>
            <CalcButton value='1' handleClick={this.addToResult}></CalcButton>
            <CalcButton value='2' handleClick={this.addToResult}></CalcButton>
            <CalcButton value='3' handleClick={this.addToResult}></CalcButton>
            <CalcButton value='-' handleClick={this.addToResult}></CalcButton>
          </Grid>
          <Grid className='row' justifyContent='center'>
            <CalcButton value='0' handleClick={this.addToResult}></CalcButton>
            <CalcButton value='.' handleClick={this.addToResult}></CalcButton>
            <CalcButton value='=' handleClick={() => this.totalResult()}></CalcButton>
            <CalcButton value='/' handleClick={this.addToResult}></CalcButton>
          </Grid>
          <Grid className='row'>
            <ClearButton handleClear={this.handleClear}>Clear</ClearButton>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
