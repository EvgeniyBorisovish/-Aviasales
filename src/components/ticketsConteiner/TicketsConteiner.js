
import React from "react";
import  ListFilterTickets  from "../listSortTickets";
import  ListTickets  from "../listTickets";
export const TicketsConteiner = ()=>{

   return (
   <div className="ticketsConteiner">
      <ListFilterTickets/>
      <ListTickets/>
    </div>);
  
}
