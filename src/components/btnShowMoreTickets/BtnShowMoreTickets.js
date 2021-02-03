
import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import {ADD_COUNT_LIMIT_TICKETS} from '../../constants/actions'

export const BtnShowMoreTickets = ()=>{
    
  const dispath = useDispatch()

  const onClickHandler = ()=>{ dispath({type:ADD_COUNT_LIMIT_TICKETS}) }

  const  countTickets =  useSelector((state) => state.filteredListTickets.list.length)

   return (
    <>
        {countTickets>0 &&
          (<div className="btnShowMoreTickets" onClick={onClickHandler}><div className="btnShowMoreTickets__header" >Показать еще 5 билетов</div></div>)
        }
    </>)
  
}
