
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
      <Box sx={{ width: '100%',
       position: 'absolute !important',
       zIndex: '9999 !important',
       top: 0,
       left: 0,
       right: 0,
       height: '100%',
       minHeight: '100vh',
       background: '#fff',
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center' 
       }}>
            <CircularProgress disableShrink />
      </Box>
  )
}