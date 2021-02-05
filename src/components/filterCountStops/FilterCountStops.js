
import React from "react";
import {useSelector} from 'react-redux'
import  ListFilterStops  from "../listFilterStops";

export const FilterCountStops = ()=>{

const loading =   useSelector((state)=>state.initialListTickets.loading)
 
   return (
    <div className="filterCountStops">
        <div className="filterCountStops__caption">
            Количество пересадок
        </div>
        <ListFilterStops/>
     </div>);
   
   
}


