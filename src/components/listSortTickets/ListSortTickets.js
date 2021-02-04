
import React from "react";
import {useSelector} from 'react-redux'
import ListSortTicketsValue from '../listSortTicketsValue'
import {formatTimeH_M}  from '../../API/api_ListFilterTickets'



export const ListSortTickets = ()=>{
  const  {minPrice,fastTime,optimal} =  useSelector((state) => state.sortTickets);
  
  return(
   <div className="listSortTickets">
      <ListSortTicketsValue name={"minPrice"} checked={minPrice.active}  value={ minPrice.value===""?"":(new Intl.NumberFormat('ru-RU').format(minPrice.value,)+" р") }/>
      <ListSortTicketsValue name={"fastTime"} checked={fastTime.active}  value={formatTimeH_M(fastTime.value)}/>
      <ListSortTicketsValue name={"optimal"} checked={optimal.active}  value={`${optimal.value.price===""?"":(new Intl.NumberFormat('ru-RU').format(optimal.value.price,)+" р")} ${formatTimeH_M(optimal.value.time)}`}/>
   </div>
   );

   
}
