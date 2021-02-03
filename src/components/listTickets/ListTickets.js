
import React from "react";
import TicketOffer from '../ticketOffer'
import BtnShowMoreTickets from '../btnShowMoreTickets'

import { useSelector } from 'react-redux';

export const ListTickets = ()=>{

// const  listTickets =  [...useSelector((state) => state.initialListTickets.list)].slice(0,4);  
const countLimitTickets = useSelector((state) => state.countLimitTickets.count)

const  listTickets =  [...useSelector((state) => state.filteredListTickets.list)].slice(0,countLimitTickets);  
 
   return (
   <div className="listTickets">
     {
       listTickets.map((ticket,index)=>(<TicketOffer ticket={ticket} first={index===0,true,false} key={index}/>))
     }
      <BtnShowMoreTickets/>
   </div>);
  
}
