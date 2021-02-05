
import React from "react";
import {useSelector} from 'react-redux'
import ListFilterStopsValue from '../listFilterStopsValue'
export const ListFilterStops = ()=>{
   
  let stops_ids = useSelector((state)=>state.filterStops.stops_ids)

  const loading = useSelector((state)=>state.initialListTickets.loading)

   return (
   <div className="listFilterStops">
      {
         stops_ids.map((id)=><ListFilterStopsValue id={id} key={id}/>)
      }
   </div>);
   
}
