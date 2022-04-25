import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';
import { Padding } from '@mui/icons-material';

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -18,
  left: 0,
  right: 0,
  margin: '0 auto',
  maxWidth: 300,
  background: '#333 !important',
  color: '#fff !important',
  TextDecoderStream: 'uppercase'
});

export default function BottomAppBar({handlePayment}) {
  return (
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, background: 'transparent', boxShadow: 'none !important', paddingX: 2 }}>
        <Toolbar>
          <StyledFab variant="extended" onClick={handlePayment}>
            Ir a pagar
          </StyledFab>
        </Toolbar>
      </AppBar>
  );
}