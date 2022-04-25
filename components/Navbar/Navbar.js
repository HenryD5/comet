import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

 const Navbar = (props) => {
    const { school, logo } = props;
    return (
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
            <AppBar position="fixed"  color="primary" sx={{ top: 0, bottom: 'auto', backgroundColor: '#FFF' }}>
                <Toolbar sx={{
                    width: '100%',
                    m: [0, 'auto'],
                    padding: ['15px'],
                    textAlign: 'center',
                    '@media(min-width: 780px)' : {
                        width: '360px !important',
                    }
                }}>
                    <Typography variant="h6" component="div" sx={{ borderRadius: '50%', overflow: 'hidden', width:'38px', height:'38px' }}>
                        <img className="logo-school" src={logo}/>
                    </Typography>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#333' }}>
                        {school}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
Navbar.propTypes = {
    school: PropTypes.string,
    logo: PropTypes.string,
  }
export default Navbar;