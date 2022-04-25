import React, {useEffect} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const AccordionStatus = ({children, ...pageProps}) => {
  const { name, status, length } = pageProps;
  const [expanded, setExpanded] = React.useState(false);
  
  useEffect(() => {
    if(length === 0) {
        setExpanded(false);
    }
  },[length]);
  
  const handleChange = () => (event, isExpanded) => {
      if(length > 0) {
        setExpanded(isExpanded);
      }
  };

  let copy = 'Puedes seleccionar mas de uno'
  if(status === 'PAID') {
    copy = 'Puedes seleccionar'
  } else if(length === 0) {
    copy = 'No hay items!!'
  }

  return (
      <Accordion expanded={expanded} onChange={handleChange()} elevation={0} sx={{ marginY: '20px', color: '#333' }}>
        <AccordionSummary
          expandIcon={length > 0 && <ExpandMoreIcon sx={{'&.MuiSvgIcon-root': { fontSize: 38 } }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          content={{ display: 'block' }}
        >
          <Box sx={{ flexGrow: 1, textAlign: 'left', width: '100%' }}>
            <Typography component="div" sx={{ width: '100%', flexShrink: 0, fontSize: '1.05rem', fontWeight: expanded ? 900 : 500 }}>
                {name}
            </Typography>
            <Typography component="div" sx={{ color: 'text.secondary',flexShrink: 0, fontSize: '0.8rem' }}>
                { expanded ? copy : length == 0 ? 'No hay items!!' :'Dale click para expandir'}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
            <div>{children}</div>
        </AccordionDetails>
      </Accordion>
  );
}
AccordionStatus.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.string,
    length: PropTypes.number
}
export default AccordionStatus