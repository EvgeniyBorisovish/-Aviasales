import { combineReducers } from "redux";
import {sortTickets} from "./sortTickets"
import {filterStops} from "./filterStops"
import {initialListTickets} from "./initialListTickets"
import {countLimitTickets} from "./countLimitTickets"
import {filteredListTickets} from './filteredListTickets'


export default combineReducers({
  sortTickets,
    filterStops,
  initialListTickets,
  filteredListTickets,
  countLimitTickets
 });
