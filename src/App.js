import logo from './logo.svg';
import {Grid, Typography, Box, Button} from '@material-ui/core';
import './App.css';
import React, { Component } from 'react';

export default class App extends Component {

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  state = {

  }

  render() {
    return (
      <Grid className="App" container>
        <Typography>Hello World From Calculator</Typography>
        <Grid justifyContent="center" alignItems="center" alignContent="center" item>
          <Grid style={{backgroundColor: "Red"}}>
            <Typography>Hello</Typography>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}
