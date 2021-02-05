
import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import checkboxFull from "../../images/checkboxFull.png";
import checkboxNull from "../../images/checkboxNull.png";
import img_preloader from "../../images/preloader_ring.png"
import {TOGGLE_FILTER_STOPS} from '../../constants/actions'
import {getCaptionStop} from '../../API/api_getTicketOffer'

export const ListFilterStopsValue = ({id})=>{

   const loading = useSelector((state)=>state.initialListTickets.loading)

   const dispath = useDispatch()

   const checkbox = useSelector((state)=>state.filterStops.stops_obj[id])
   
   const onClickHandler = ()=>{ dispath({type:TOGGLE_FILTER_STOPS,payload:id}) }

   return (
         <div className="listFilterStopsValue" onClick={onClickHandler}>
         <img src={ checkbox?(checkboxFull):(checkboxNull)} className="listFilterStopsValue__checkBox" alt={"Чекбокс"}></img>
         <div className="listFilterStopsValue__text-value">{getCaptionStop(id,true)}</div>
         </div>
         )
       
      
   
}
