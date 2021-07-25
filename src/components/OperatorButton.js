import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

const OperatorButton = ({value}) => {
    return (
        <Button variant={'outlined'}>{value}</Button>
    )
}

export default OperatorButton;