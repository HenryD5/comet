import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
const Summary = (props) => {
    const money = (value) => {
        const format = parseFloat(value)
        const val = format.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        return`$ ${val}`
    };
    const { name, cohort, amount } = props;
    return (
        <Paper sx={{ marginY: '20px', paddingY:'12px' , paddingX: 2, color: '#333 !important' }} elevation={0}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}
                sx={{
                    marginBottom: '10px'
                }}
            > 
                <Box gridColumn="span 6" sx={{ textAlign: 'left', fontSize: '1rem' }}>
                    <div>{name}</div>
                </Box>
                <Box gridColumn="span 6" sx={{ textAlign: 'right', fontSize: '0.9rem' }}>
                    <div>{cohort}</div>
                </Box>
            </Box>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}
                sx={{
                    marginTop: '5px'
                }}
            > 
                <Box gridColumn="span 6" sx={{ textAlign: 'left', fontSize: '1.2rem', fontWeight: 400 }}>
                    <div>Total a Pagar</div>
                </Box>
                <Box gridColumn="span 6" sx={{ textAlign: 'right', fontSize: '1.2rem', fontWeight: 400 }}>
                    <div>{amount> 0 ? money(amount) : '$ ---'}</div>
                </Box>
            </Box>
        </Paper> 
    )
}
Summary.propTypes = {
    name: PropTypes.string.isRequired,
    cohort: PropTypes.string,
    amount: PropTypes.number
}
export default Summary;