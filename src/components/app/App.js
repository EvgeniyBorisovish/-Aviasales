
import React,{useEffect} from "react";
import {useDispatch} from 'react-redux'
import {START_FILL_INITIAL_LIST} from '../../constants/actions'
import  DashBord  from "../dashBord";
export const App = ()=>{
   const dispath = useDispatch()
   useEffect(
   ()=>{
      dispath({type:START_FILL_INITIAL_LIST})
   },[])
   return (
   <React.Fragment>
    <DashBord/>
   </React.Fragment>);
   
}
