
import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import checkboxFull from "../../images/checkboxFull.png";
import checkboxNull from "../../images/checkboxNull.png";
import {TOGGLE_FILTER_STOPS} from '../../constants/actions'
import {getCaptionStop} from '../../API/api_getTicketOffer'

export const ListFilterTransplantsValue = ({id})=>{

   const dispath = useDispatch()

   const checkbox = useSelector((state)=>state.filterStops.stops_obj[id])
   
   const onClickHandler = ()=>{ dispath({type:TOGGLE_FILTER_STOPS,payload:id}) }

   return (
   <div className="listFilterTransplantsValue" onClick={onClickHandler}>
      <img src={ checkbox?(checkboxFull):(checkboxNull)} className="listFilterTransplantsValue__checkBox" alt={"Чекбокс"}></img>
      <div className="listFilterTransplantsValue__text-value">{getCaptionStop(id,true)}</div>
   </div>);
   
}
