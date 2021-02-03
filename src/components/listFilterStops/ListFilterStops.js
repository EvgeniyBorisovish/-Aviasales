
import React from "react";
import {useSelector} from 'react-redux'
import ListFilterStopsValue from '../listFilterStopsValue'
export const ListFilterStops = ()=>{
  const stops_ids = useSelector((state)=>state.filterStops.stops_ids)
   return (
   <div className="listFilterStops">
      {stops_ids.map((id)=>(<ListFilterStopsValue id={id} key={id}/>))}
   </div>);
   
}
