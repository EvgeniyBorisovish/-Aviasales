
import React from "react";
import {getStartStopTime,getDurationString,getCaptionStop}  from '../../API/api_getTicketOffer'
/*
carrier: "MH"
price: 15027
segments: Array(2)
0:
date: "2021-02-11T06:50:00.000Z"
destination: "HKT"
duration: 1929
origin: "MOW"
stops: (2) ["AUH", "SIN"]
*/
//{origin: "MOW", destination: "HKT", date: "2021-02-11T04:21:00.000Z", stops: Array(1), duration: 835}


export const TicketOffer = ({ticket,first})=>{
  const {carrier,price,segments} = ticket
//13 400
   return (
   <div className="ticketOffer">
      <div className= {"ticketOffer-conteiner"+(first?" ticketOffer-conteiner_first":"")}>
          <div className="ticketOffer-conteiner-header">
              <div className="ticketOffer-conteiner-header__total-price">
                {new Intl.NumberFormat('ru-RU').format(price,)}&nbsp;{"Р"}
              </div>
              <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt={`Логотип ${carrier}`}></img>
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
