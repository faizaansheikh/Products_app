import React from 'react'
import { Box, Drawer, Typography } from '@mui/material'
import style from './Ui/buton.module.css'
import ClearIcon from '@mui/icons-material/Clear';
import MediaControlCard from './MediaControlCard'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from 'react'
import { myInfo } from '../App'
import { useState } from 'react';
import { useEffect } from 'react';

function CustomDrawer({ setIsOpen, isOpen }) {
  const [here,setHere] = useState(true)
  const [disbale,setDisbale] = useState(false)
  const {info} = useContext(myInfo)
  const {setAlert} = useContext(myInfo)
  const {setOpen} = useContext(myInfo)
  const state = info.state
  const length = state.length
  const checkOut = ()=>{
    setOpen(true)
    setTimeout(() => {
      setAlert(true)
    }, 2000);
  }
  const sum = state.map(elem => elem.price*elem.quantity)
  
  let num = 0
  for (let i = 0; i < sum.length; i++) {
      num+=sum[i]
    
  }
  const handleClear = () => {
    setIsOpen(false)
    //console.log("working");
  }
 
  useEffect(()=>{
    if(!length > 0){
      setHere(true)
      setDisbale(true)
      
    }else{
      setHere(false)
      setDisbale(false)
    }
  },[state,handleClear])
 
  return (
    <>

      <Drawer anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {/* <Box></Box> */}
        <Box className={style.cartEdit} sx={{
          bgcolor: "#1B1A20",
          width: {
            xs: 380,
            sm: 530,
            md: 550,

          }, overflowX: 'hidden', height: '100vh', overflowY: 'auto', display: 'flex', flexDirection: 'column', flex: 'end'
        }}>
          <Box><ClearIcon onClick={handleClear} className={style.cl} /></Box>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>

            <Box><ShoppingCartOutlinedIcon sx={{ fontSize: "30px", color: '#F0FFFF', pr: '10px' }} />
              <div className={style.num}>{length}</div>
            </Box>
            <Typography variant='h4' sx={{ color: 'white', fontWeight: 'bold', fontSize: '20px', mb: '39px' }}>Cart</Typography>
          </Box>
          <hr className={style.hrTag} />
        {
          here ? (
            <>
            <Typography sx={{textAlign:'center',color:'rgb(141, 138, 136)',mt:'30px'}}>Your cart is empty.</Typography>
          <Typography onClick={()=>setIsOpen(false)} sx={{textAlign:'center',color:'#dd901a',mt:'30px',mb:'30px',fontSize:'15px',cursor:'pointer'}}>Keep shopping</Typography>
          </>
          ) : ( <MediaControlCard />)
        }
          

         {
          !disbale ? (<>
           <Box sx={{
            bgcolor: "#1e1c269f",
            width: {
              xs: 380,
              sm: 530,
              md: 550,
              //  lg : 450,
            },
            height: 'auto',
            boxShadow: "0px 0px 22px black", position: 'sticky', top: '0px', right: '0px', bottom: '0px', left: '0px'
          }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box>
                <Typography sx={{ color: '#808080', fontSize: '15px', p: '28px' }}>SUBTOTAL</Typography>
              </Box>
              <Box>
                <Typography sx={{ color: '#dd901a', fontSize: '20px', p: '28px' }}>$ {num}</Typography>
              </Box>
            </Box>
            <Box>
             
              <button onClick={checkOut}  className={style.checkout}>CHECKOUT</button>
            </Box>
          </Box>
          </>) : null
         }
        {/* ===subtotal section==== */}
         
          {/* ===subtotal section==== */}
        </Box>
      </Drawer>

    </>
  )
}

export default CustomDrawer