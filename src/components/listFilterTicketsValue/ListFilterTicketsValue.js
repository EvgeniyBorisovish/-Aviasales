
import React from "react";
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
import {TOGGLE_FILTER_TICKETS} from '../../constants/actions'

export const ListFilterTicketsValue = ({name,value})=>{

const  filterObj =  useSelector((state) => state.filterTickets[name]);//initialListTickets
const  countListTickets =  useSelector((state) => state.initialListTickets.list.length);//



const dispath = useDispatch()
const onClickHandler = ()=>{
   if (countListTickets===0){return}
   dispath({type:TOGGLE_FILTER_TICKETS,payload:name})
}
   return (
      <div className={"listFilterTicketsValue" + (filterObj.active?" listFilterTicketsValue--cheked":"")} onClick={onClickHandler}>
            <div>{filterObj.text}</div>
            <div>{value}</div>
      </div>
   );
   
}
