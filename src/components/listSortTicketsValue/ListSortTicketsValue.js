
import React from "react";
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
import {TOGGLE_SORTS_TICKETS} from '../../constants/actions'

export const ListSortTicketsValue = ({name,value})=>{

const  filterObj =  useSelector((state) => state.sortTickets[name]);
const  countListTickets =  useSelector((state) => state.initialListTickets.list.length);

const dispath = useDispatch()

const onClickHandler = ()=>{
   if (countListTickets===0){return}
   dispath({type:TOGGLE_SORTS_TICKETS,payload:name})
}
   return (
      <div className={"listSortTicketsValue" + (filterObj.active?" listSortTicketsValue--cheked":"")} onClick={onClickHandler}>
            <div>{filterObj.text}</div>
            <div>{value}</div>
      </div>
   );
   
}
