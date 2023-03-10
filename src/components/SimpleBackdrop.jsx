import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

export default function SimpleBackdrop({open,setOpen}) {
  // const [open, setOpen] = React.useState(true);

setTimeout(() => {
    setOpen(false);
}, 2000);
  const handleToggle = () => {
    setOpen(true);
  };

  return (
    <div>
      {/* <Button onClick={handleToggle}>Show backdrop</Button> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
       
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}