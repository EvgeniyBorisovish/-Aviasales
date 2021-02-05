
import React from "react";
import {getStartStopTime,getDurationString,getCaptionStop}  from '../../API/api_getTicketOffer'
import {URL_PICT_AIR_COMPANY} from '../../constants/urls'

export const TicketOffer = ({ticket,first})=>{

const {carrier,price,segments} = ticket

   return (
   <div className="ticketOffer">
      <div className= {"ticketOffer-conteiner"+(first?" ticketOffer-conteiner_first":"")}>
          <div className="ticketOffer-conteiner-header">
              <div className="ticketOffer-conteiner-header__total-price">
                {new Intl.NumberFormat('ru-RU').format(price,)}&nbsp;{"Р"}
              </div>
              <img src={`${URL_PICT_AIR_COMPANY}${carrier}.png`} alt={`Логотип ${carrier}`}></img>
          </div>
          {
           segments.map(({origin,destination,date,stops,duration},index)=>(
            <div className="ticketOffer-conteiner-marching-sheet" key={index}>
                <div className="marching-sheet-column">
                  <div className="marching-sheet-column__header">
                    {origin}&nbsp;–&nbsp;{destination}
                  </div>  
                  <div className="marching-sheet-column__value">
                    {getStartStopTime(date,duration)}
                  </div>  
                </div>  

                <div className="marching-sheet-column">
                  <div className="marching-sheet-column__header">
                    В пути
                  </div>  
                  <div className="marching-sheet-column__value">
                    {getDurationString(duration)}
                  </div>  
                </div>  


                <div className="marching-sheet-column">
                  <div className="marching-sheet-column__header">
                      {getCaptionStop(stops.length)}
                  </div>  
                  <div className="marching-sheet-column__value">
                      {stops.join(",")}
                  </div>  
                </div>  
            </div>
           )
           ) 
          }
      </div>   
   </div>);
  
}
