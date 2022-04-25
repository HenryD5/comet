import React, { useCallback, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { grey } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const ItemPayment = ({handleCart, ...pageProps}) => {
    const { item, chk } = pageProps;
    const [checked, setChecked] = React.useState(false);
    // events
    const handleClick = useCallback(() => handleCart(item, !checked), [item, !checked, handleCart], );
    const handleChange = () => {
        setChecked(!checked);
        handleClick()
    };
    useEffect(() => {
        if(chk) {
            setChecked(false);
        }
    }, [chk]);
    
    // logic
    let spare = 0
    let spareRes = 0
    let copyDate
    
    const due = new Date(item?.due);
    const now = new Date();
    const checkDate = due.getTime() < now.getTime();

    switch (item?.status) {
        case 'PAID':
            copyDate = 'Pagado el'
            break
        case 'DUE':
            copyDate = checkDate ? 'Vencido el' : 'Vence el'
            break
        case 'OUTSTANDING':
            copyDate = 'Ahorra hasta el'
            spareRes = (item?.price * 0.02)
            spare = (parseInt(item.price) + parseInt(spareRes))
            break
    }
    // filters
    const money = (value) => {
        const val = parseInt(value)
        const format = parseFloat(val)
        const valF = format.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        return`$ ${valF}`
    };
    const dateF = (value) => {
        const meses = [
            "Enero", "Febrero", "Marzo",
            "Abril", "Mayo", "Junio", "Julio",
            "Agosto", "Septiembre", "Octubre",
            "Noviembre", "Diciembre"
          ]
          
          const date = new Date(value);
          const dia = date.getDate();
          const mes = date.getMonth();
          const dateFormat = dia + ' de ' + meses[mes] + '.';
          return dateFormat
    }
    

    // view
    return (
        <Paper sx={{ marginY: '5px', paddingY:'8px' , paddingX: 0.8, cursor: item?.status === 'PAID' && 'pointer', color: '#333' }} elevation={0}>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}
                sx={{
                    marginBottom: '10px'
                }}
            > 
                <Box gridColumn={item?.status !== 'PAID' ? 'span 6' : 'span 11' } sx={{ textAlign: 'left' }}>
                    <Typography component="div" sx={{ flexGrow: 1, fontSize: '1rem' }}>
                        {item?.name}
                    </Typography>
                    <Typography component="div" sx={{ flexGrow: 1, fontSize: '0.8rem' }}>
                        {copyDate} {(item?.payin !== null && item?.status === 'PAID') ? <span>{dateF(item?.payin?.created)}</span> : <span>{dateF(item?.due)}</span> }
                    </Typography>
                </Box>
                { (item?.status !== 'PAID') &&
                    <Box gridColumn="span 5" sx={{ textAlign: 'right' }}>
                        <Typography component="div" sx={{ flexGrow: 1, fontSize: '1rem' }}>
                        { spare > 0 &&  <del className='before-price'>{money(spare)}</del>} <span>{money(item?.price)}</span>
                        </Typography>
                        { (item?.interest > 0 || spareRes > 0 ) &&
                            <Typography component="div" sx={{ flexGrow: 1, fontSize: '0.8rem' }}>
                            { item?.interest > 0 && <div>Interés: {money(item?.interest)}</div> }
                            { spareRes > 0 && <div>Ahorras: { money(spareRes)}</div> }
                            </Typography>
                        }
                    </Box>
                }
                <Box gridColumn="span 1" sx={{ textAlign: 'right' }}>
                    {  item?.status !== 'PAID' ?
                        <Checkbox
                                id={item?.id}
                                checked={checked}
                                onChange={handleChange}
                                sx={{
                                    color: grey[900],
                                    '&.Mui-checked': {
                                    color: grey[800],
                                    },
                                    '& .MuiSvgIcon-root': { fontSize: 35 },
                                    '&.MuiButtonBase-root': {padding: 0} 
                                }}
                        />
                        :
                        <KeyboardArrowRightIcon sx={{
                            color: grey[500],
                            '&.MuiSvgIcon-root': { fontSize: 38 }
                        }}/>
                    }
                </Box>
            </Box>
        </Paper> 
    )
}
ItemPayment.propTypes = {
    item: PropTypes.object,
    chk: PropTypes.bool
}
export default ItemPayment;