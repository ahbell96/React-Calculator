import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

const Result = (props) => {

    return (
        <Grid className="result">
            <Typography>{props.result}</Typography>
        </Grid>
    )
}

export default Result;