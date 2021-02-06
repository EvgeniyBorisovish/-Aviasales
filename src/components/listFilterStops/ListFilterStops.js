
import React from "react";
import {useSelector} from 'react-redux'
import ListFilterStopsValue from '../listFilterStopsValue'
import Preloader from '../Preloader'
export const ListFilterStops = ()=>{

  let stops_ids = useSelector((state)=>state.filterStops.stops_ids)

   return (
   <div className={stops_ids.length>0?"listFilterStops":"listFilterStops preloderVisible"}>
      {
         stops_ids.length===0 &&
         <Preloader borderRightColor={"#FFFFFF"}/>}
      {
         stops_ids.map((id)=><ListFilterStopsValue id={id} key={id}/>)
      }
   </div>);
   
}

