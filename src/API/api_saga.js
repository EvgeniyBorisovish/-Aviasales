export function  get_SortParams(listTickets) {
    listTickets.forEach((element)=>{
        element.duration = element.segments.reduce((accum,element)=>(accum+element.duration),0)
      })
      

      const minPrice = listTickets[0].price
      


      listTickets.sort((a,b)=>{
          if ( a.price===b.price ) {
            if ( a.duration<b.duration ) {
              return -1
            }
            else if ( a.duration>b.duration ) {
              return 1
            }
            else {
              return 0
            }
          }
          else {
            return 0
          }
        }
      )

      const opt_price = listTickets[0].price
      const opt_duration = listTickets[0].duration

      
      const fastTime = listTickets.sort((a,b)=>(a.duration-b.duration))[0].duration

return {
        minPrice,
        fastTime,
        optimal:{price:opt_price,duration:opt_duration}
       }

}