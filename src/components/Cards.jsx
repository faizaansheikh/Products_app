import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from './Ui/Image';
import Buton from './Ui/Buton';
import style from './Ui/buton.module.css'
import { myInfo } from '../App';
import { useContext } from 'react';
function Cards({elem,id,img,title,price}) {
  
   
  const {getID} = useContext(myInfo)
  const {info} = useContext(myInfo)
  
  const dispatch = info.dispatch
  const state = info.state
  const handleAdd = ()=>{
     dispatch({type:"ADD",payload:elem})
     getID(id)
    //  localStorage.setItem('data',JSON.stringify(state))
  }
  React.useEffect(()=>{
    localStorage.setItem('data',JSON.stringify(state))
  },[state])
 
  return (

    <Card onClick={handleAdd} className={style.card} sx={{ maxWidth: 305 , m:'20px'}}>
      <CardActionArea>
        <Image
        image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize:'18px',textAlign:'center'}}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontSize:'17px',textAlign:'center',position:'relative',right:'5px',fontWeight:'bold',color:'black'}}>
          <Typography sx={{fontSize:'14px',display:'inline',p:'5px'}}>$</Typography>
           {price}
          </Typography>
          
          <Buton>Add to cart</Buton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default Cards