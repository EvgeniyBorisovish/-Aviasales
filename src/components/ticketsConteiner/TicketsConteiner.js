
import React from "react";
import  ListFilterTickets  from "../listFilterTickets";
import  ListTickets  from "../listTickets";
export const TicketsConteiner = ()=>{

   return (
   <div className="ticketsConteiner">
      <ListFilterTickets/>
      <ListTickets/>
    </div>);
  
}
