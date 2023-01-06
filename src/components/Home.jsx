import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Cards from './Cards';
import { products } from './products'; 
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import style from './Ui/buton.module.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import CustomDrawer from './CustomDrawer';
import { useContext } from 'react';
import { myInfo } from '../App';
import Alerts from './Alerts';

function Home() {
  const {info} = useContext(myInfo)

  const state = info.state
  const length = state.length
  const [items,setItems] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const fetchData = ()=>{
    setItems(products)
  }
  
  useEffect(()=>{
    fetchData()

  },[])
  
  return (
    <>
    
    <Box sx={{width:'100%',height:'70px',bgcolor:'rgb(27, 26, 32)',
  position:'sticky',
  top:'0',
  right:'0',
  bottom:'0',
  left:'0'  ,
  zIndex:'2'
  }}>
    <ShoppingCartOutlinedIcon className={style.shoping} sx={{
      fontSize:'32px',
     fontWeight:'lighter',
      pt:"14px",
      pl:'16px',
      pr:'16px',
      position:'relative',
       top:'3px',
       color:'whitesmoke',
       float:'right'
      }} onClick={()=>setIsOpen(true)}/>
       <div className={style.nums}>{length}</div>
    
      </Box>
    <Container sx={{bgcolor: '#fafad2', height:'auto'}} maxWidth="lg">
    <Typography variant='p' sx={{textAlign:'center',ml:'45px', position:'relative',top:'25px',fontSize:'18px'}}>
      {items.length} Product(s) Found</Typography>
    <Box sx={{ display:'flex', flexDirection:"row",justifyContent:'space-evenly',flexWrap:'wrap',mt:'30px',mb:'30px'}} >
      {
        items.map((elem,ind)=>{
          return <Cards elem={elem} id={elem.id} key={ind} img={elem.image} title={elem.title} price={elem.price}/>
        })
      }
   
    </Box>
   
  </Container>
  <CustomDrawer isOpen={isOpen} setIsOpen={setIsOpen}/>
  
  </>
  )
}
// #cfe8fc

export default Home