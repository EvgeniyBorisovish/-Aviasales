
import React from "react";
import {useSelector} from 'react-redux'
import ListFilterTicketsValue from '../listFilterTicketsValue'
import {formatTimeH_M}  from '../../API/api_ListFilterTickets'



export const ListFilterTickets = ()=>{
  const  {minPrice,fastTime,optimal} =  useSelector((state) => state.filterTickets);
  
  return(
   <div className="listFilterTickets">
      <ListFilterTicketsValue name={"minPrice"} checked={minPrice.active}  value={ minPrice.value===""?"":(new Intl.NumberFormat('ru-RU').format(minPrice.value,)+" р") }/>
      <ListFilterTicketsValue name={"fastTime"} checked={fastTime.active}  value={formatTimeH_M(fastTime.value)}/>
      <ListFilterTicketsValue name={"optimal"} checked={optimal.active}  value={`${optimal.value.price===""?"":(new Intl.NumberFormat('ru-RU').format(optimal.value.price,)+" р")} ${formatTimeH_M(optimal.value.time)}`}/>
   </div>
   );

   
}
