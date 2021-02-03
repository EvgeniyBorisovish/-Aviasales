import {ADD_FILTER_STOPS,TOGGLE_FILTER_STOPS} from '../constants/actions'

const initialState = {
  stops_ids:[],
  stops_obj: {}//id свойства поля это количество пересадок а значение Boolean Используемость {0:false,1:true,3:true} 
}

export const filterStops = (state = initialState,action)=> {
  
  switch (action.type) {
    
       case ADD_FILTER_STOPS:
         const stops_ids = Array.from( new Set([...state.stops_ids,...action.payload]) ).sort((a,b)=>(a-b))
         
          return {
            ...state,
            stops_ids: stops_ids,
            stops_obj:stops_ids.reduce( ( obj , stop )=>{ obj[stop] = false; return obj},{})
          };
         
        case TOGGLE_FILTER_STOPS:
          
          return {
            stops_ids:state.stops_ids,
            stops_obj:{...state.stops_obj,[action.payload]:!state.stops_obj[action.payload]}
          };

      default:
          return state;
  }
}
