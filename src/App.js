
import { createContext, useReducer, useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';

import Home from './components/Home';
import SimpleBackdrop from './components/SimpleBackdrop';


export const myInfo = createContext()

function App() {
  const [myId,setMyId] = useState(null)
  const[alert,setAlert] = useState(false)
  const [open, setOpen] = useState(false);
 const reducer = (state,action)=>{
      switch(action.type){
        case "ADD":
          const tempState = state.filter((item) => action.payload.id === item.id)
          
          if(tempState.length > 0){
            return state
          }else{
            return  [...state, action.payload]
           
          }
        case "INCREASE" :
          const tempState1 = state.map((elem)=>{
            if(elem.id === action.payload){
              return {...elem,quantity:elem.quantity+1}
            
            }
           
            else{
              return elem
            }
          })
          return tempState1
          case "DECREASE" :
          const tempState2 = state.map((elem)=>{
            if(elem.id === action.payload){
             return {...elem,quantity:elem.quantity-1}
            }else{
              return elem
            }
          })
          return tempState2
          case "DELETE" :
            const tempState3 = state.filter((item) => item.id !== action.payload)
           return tempState3
        default :
        return state
      }
 }
 const getLocalData = ()=>{
  let localData = localStorage.getItem('data')
  if(localData === []){
    return []
  }else{
    return JSON.parse(localData)
  }
 }
 const [state,dispatch] = useReducer(reducer,getLocalData())
 
 const info = {state,dispatch}
  
 
 const getID = (id)=>{
  setMyId(id)
 }

  return (
    
  <myInfo.Provider value={{info:info,getID:getID,myId:myId,setAlert:setAlert,setOpen:setOpen}}>
    <SimpleBackdrop open={open} setOpen={setOpen}/>
    {/* <CircularProgress color="inherit" /> */}
    {
      alert ?  <Alerts/> : <Home/> 
    }
  
  

    </myInfo.Provider>
   
  );
}

export default App;
