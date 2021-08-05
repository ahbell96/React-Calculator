import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

const Result = ({result, total}) => {

    return (
        <Grid className="result">
            <Typography>{total === '' ? result : total}</Typography>
        </Grid>
    )
}

export default Result;