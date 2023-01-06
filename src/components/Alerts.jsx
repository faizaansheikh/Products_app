import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import {Box} from '@mui/material';
import style from './Ui/buton.module.css'
import { useContext } from 'react';
import { myInfo } from '../App';
export default function Alerts() {
  const {setAlert} = useContext(myInfo)
  return (
    <Box sx={{bgcolor:"rgb(57, 52, 52)",width:'100%',height:'100vh'}}>
    <Stack sx={{ width: '100%',display:'flex',alignItems:'center' }} spacing={2}>
      <Alert sx={{mt:'17%'}} severity="success">
        <AlertTitle>Success</AlertTitle>
        Order placed successfully  — 
        <button onClick={()=>setAlert(false)} className={style.cBtn}>Continue Shopping</button>
      </Alert>
     
    </Stack>
    </Box>
  );
}
