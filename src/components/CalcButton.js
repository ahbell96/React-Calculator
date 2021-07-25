import React, {useState} from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

const CalcButton = ({value}) => {

    const [number, setNumber] = useState(value);

    const getValue = (event) => {
        setNumber(event.target.value);
        
    }

    return (
        <Button variant={'outlined'} onClick={getValue} value={value}>{value}</Button>
    )
}

export default CalcButton;