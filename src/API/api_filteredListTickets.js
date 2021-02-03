export function sortFilteredListTickets(list,type_sort){
    

    const sortList = [...list]

    switch (type_sort) {
        
        case "minPrice":
     
           return sortList.sort((a,b)=>(a.price-b.price))

        case "fastTime":

            sortList.forEach((element)=>{
                element.duration = element.segments.reduce((accum,element)=>(accum+element.duration),0)
              })//.sort((a,b)=>(a.duration-b.duration));
              console.log("sortList",sortList)
           return sortList.sort((a,b)=>(a.duration-b.duration));

        case "optimal": 

        sortList.sort((a,b)=>(a.price-b.price))

        sortList.sort((a,b)=>{
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

       default:
           return sortList;
   }


}