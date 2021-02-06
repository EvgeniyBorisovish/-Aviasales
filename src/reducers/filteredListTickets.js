import {LOAD_FILTERED_LIST_TICKETS,SORT_FILTERED_LIST_TICKETS,CLEAR_FILTERED_LIST_TICKETS } from '../constants/actions'
import {sortFilteredListTickets} from '../API/api_filteredListTickets'
const initialState = {list:[]}

export const filteredListTickets = (state = initialState,action)=> {
    
    switch (action.type) {
        case LOAD_FILTERED_LIST_TICKETS:

            return {list:[...action.payload]}

        case SORT_FILTERED_LIST_TICKETS:

            return {list:[...sortFilteredListTickets(state.list,action.payload)]}
            
        case CLEAR_FILTERED_LIST_TICKETS:

            return {  
                ...initialState              
            }        
        default:

            return state;

    }

  }