import logo from "./logo.svg";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import "./App.css";
import React, { Component } from "react";
import CalcButton from "./components/CalcButton";
import Result from "./components/Result";
import ClearButton from './components/ClearButton';

export default class App extends Component {

  /*
  constructor(props) {
    super(props);
  }
  */

  componentDidMount() {}

  componentDidUpdate() {}

  state = {
    totalValue: 0,
    result: "",
    total: null,
    next: null,
    operation: null
  };

  setResult = () => {
    
  }

  handleClear = () => {
    this.setState({result: ""});
  }

  addToResult = (value) => {
    this.setState({result: this.state.result + value});
    console.log(this.result);
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
            <Result result={this.state.result}/>
          </Grid>
          <Grid className='row' justifyContent='center'>
            <CalcButton value='7' addToResult={this.addToResult}></CalcButton>
            <CalcButton value='8' addToResult={this.addToResult}></CalcButton>
            <CalcButton value='9' addToResult={this.addToResult}></CalcButton>
            <CalcButton value='*' addToResult={this.addToResult}></CalcButton>
          </Grid>
          <Grid className='row' justifyContent='center'>
            <CalcButton value='4' addToResult={this.addToResult}></CalcButton>
            <CalcButton value='5' addToResult={this.addToResult}></CalcButton>
            <CalcButton value='6' addToResult={this.addToResult}></CalcButton>
            <CalcButton value='+' addToResult={this.addToResult}></CalcButton>
          </Grid>
          <Grid className='row' justifyContent='center'>
            <CalcButton value='1' addToResult={this.addToResult}></CalcButton>
            <CalcButton value='2' addToResult={this.addToResult}></CalcButton>
            <CalcButton value='3' addToResult={this.addToResult}></CalcButton>
            <CalcButton value='-' addToResult={this.addToResult}></CalcButton>
          </Grid>
          <Grid className='row' justifyContent='center'>
            <CalcButton value='0' addToResult={this.addToResult}></CalcButton>
            <CalcButton value='.' addToResult={this.addToResult}></CalcButton>
            <CalcButton value='=' addToResult={this.addToResult}></CalcButton>
            <CalcButton value='/' addToResult={this.addToResult}></CalcButton>
          </Grid>
          <Grid className='row'>
            <ClearButton handleClear={this.handleClear}>Clear</ClearButton>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
