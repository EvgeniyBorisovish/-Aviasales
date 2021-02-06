import {ADD_SORTS_TICKETS,TOGGLE_SORTS_TICKETS,CLEAR_SORTS_TICKETS} from '../constants/actions'

const initialState = {
    minPrice:{active:false,text:"Самый дешевый",value:""},
    fastTime:{active:false,text:"Самый быстрый",value:""},
    optimal:{active:false,text:"Оптимальный",value:{price:"",time:""}},
}

export const sortTickets = (state = initialState,action)=> {

  switch (action.type) {
       case ADD_SORTS_TICKETS:
         
        return {
            ...state,
            minPrice:{...state.minPrice,active:true,value:action.payload.minPrice},
            fastTime:{...state.fastTime,active:false,value:action.payload.fastTime},
            optimal:{...state.optimal,active:false,value:{price:action.payload.optimal.price,time:action.payload.optimal.time}},
        };
        
        case TOGGLE_SORTS_TICKETS:
          
              return{
              ...Object.keys(state).reduce((new_state,id_filter)=>{ 

                  new_state[id_filter]={}
                  new_state[id_filter] = state[id_filter]
                  new_state[id_filter].active = id_filter===action.payload?true:false
                  
                  return new_state
               },{})
              }

         case CLEAR_SORTS_TICKETS:

         return{...initialState
           
         }

                    

      default:
        return state;
  }
}