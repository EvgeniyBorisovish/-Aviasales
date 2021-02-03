import {ADD_ERROR_MESSAGE,CLEAR_ERROR_MESSAGE} from '../constants/actions'

const initialState = {
 textError:""
}

export const erorrs = (state = initialState,action)=> {
  
  switch (action.type) {
    
       case ADD_ERROR_MESSAGE:
          return {
            ...state,
            textError:action.payload
          };
      case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        textError:""
      };  
      default:
          return state;
  }

}