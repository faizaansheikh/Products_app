import { Box } from '@mui/material'
import React, { useContext } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import style from './Ui/buton.module.css'
import { myInfo } from '../App';


function MediaControlCard() {
  const {info} = useContext(myInfo)
  // const {myId} = useContext(myInfo)
   const state = info.state
 
  const dispatch = info.dispatch
 
  return (
   <>
 {
  state.map((elem)=>{
    // getTotal(elem)
    return(
<Box sx={{display:'flex',justifyContent:'space-around',mb:'30px'}}>
   <Box sx={{display:'flex',flexDirection:'column',flexDirection:'row'}}>
   <img src={elem.image} 
    width="70px"
   alt="" />
   <Box sx={{display:'flex',flexDirection:'column',mt:'30px',ml:'20px'}}>
   <Box sx={{color:'whitesmoke',}}>{elem.title}</Box>
    <Box sx={{color:'#808080',fontSize:'15px'}}>Quantity : {elem.quantity}</Box>
    </Box>
   </Box>
  
   <Box>
    <Box sx={{display:"flex",justifyContent:'end',zIndex:'5'}}><ClearIcon onClick={()=>dispatch({type:"DELETE",payload:elem.id})} className={style.clear}/></Box>
    <Box sx={{pt:'8px',color:'#dd901a',display:"flex",justifyContent:'end'}}>$ {elem.price*elem.quantity}</Box>
    <Box sx={{pt:'8px'}}>
    <button onClick={()=>dispatch({type:"DECREASE",payload:elem.id})} className={style.btn}>-</button>
    <button onClick={()=>dispatch({type:"INCREASE",payload:elem.id})} className={style.btn}>+</button>
    </Box>
   </Box>
   </Box>
    )
  })
 }
   
   
   </>
  )
}

export default MediaControlCard