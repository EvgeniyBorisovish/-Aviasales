import { combineReducers } from "redux";
import {filterTickets} from "./filterTickets"
import {filterStops} from "./filterStops"
import {initialListTickets} from "./initialListTickets"
import {countLimitTickets} from "./countLimitTickets"
import {filteredListTickets} from './filteredListTickets'


export default combineReducers({
    filterTickets,
    filterStops,
  initialListTickets,
  filteredListTickets,
  countLimitTickets
 });
