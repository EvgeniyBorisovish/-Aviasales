
import React from "react";
import { useSelector } from 'react-redux';
import TicketOffer from '../ticketOffer'
import BtnShowMoreTickets from '../btnShowMoreTickets'

const Row_memo = React.memo(TicketOffer)

export const ListTickets = ()=>{

const countLimitTickets = useSelector((state) => state.countLimitTickets.count)

const  listTickets =  [...useSelector((state) => state.filteredListTickets.list)].slice(0,countLimitTickets);  
 
   return (
   <div className="listTickets">
     {
       listTickets.map((ticket,index)=>(<TicketOffer ticket={ticket} first={index===0?true:false} key={index}/>))
     }
      <BtnShowMoreTickets/>
   </div>);
  
}
