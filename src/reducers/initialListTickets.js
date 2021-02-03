import {START_FILL_INITIAL_LIST,ADD_PACK_INITIAL_LIST,STOP_FILL_INITIAL_LIST} from '../constants/actions'

const initialState = {
  list:[],
  loading:false,
  searchId:""
}

export const initialListTickets = (state = initialState,action)=> {
  
  switch (action.type) {
    
       case START_FILL_INITIAL_LIST:
          return {
            ...state,
            loading:true
          };
      case ADD_PACK_INITIAL_LIST:
        
      return {
        ...state,
        list:[...state.list,...action.payload].sort((a,b)=>(a.price-b.price))
      };  
      case STOP_FILL_INITIAL_LIST:
        return {
          ...state,
          loading:false
        };  
     
      default:
          return state;
  }
}