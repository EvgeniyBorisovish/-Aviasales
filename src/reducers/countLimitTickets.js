import {limitTicketCount} from '../constants/limitTicketCount'
import {ADD_COUNT_LIMIT_TICKETS,INITIAL_LIMIT_TICKETS} from '../constants/actions'
const initialState = {count:limitTicketCount}


export const countLimitTickets = (state = initialState,action)=> {
  
    switch (action.type) {
      
            case ADD_COUNT_LIMIT_TICKETS:

            return {
              ...state,
              count:limitTicketCount+state.count
            };

            case INITIAL_LIMIT_TICKETS:

              return {
                ...state,
                count:limitTicketCount
              };

        default:
            return state;
    }
  
  }