import React from 'react'
/* import Navbar from '@components/Navbar/NavBar' */
import Box from '@mui/material/Box';
const Layout = ({children}) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        m: [0, 'auto'],
        backgroundColor: '#F7F7F7',
        padding: ['15px', '20px'],
        overflowX: 'hidden',
        '@media(min-width: 780px)' : {
          width: '360px !important',
        },
        color: '#333 !important'
      }}
    >
        {/* <Navbar /> */}
        <div>{children}</div>
    </Box>
  )
}

export default Layout