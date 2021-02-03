
import React from "react";
import {useSelector} from 'react-redux'
import ListFilterTransplantsValue from '../listFilterTransplantsValue'
export const ListFilterTransplants = ()=>{
  const stops_ids = useSelector((state)=>state.filterStops.stops_ids)
   return (
   <div className="listFilterTransplants">
      {stops_ids.map((id)=>(<ListFilterTransplantsValue id={id} key={id}/>))}
   </div>);
   
}
