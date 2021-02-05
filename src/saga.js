import axios from "axios";
import { put, takeLatest, delay,select, all } from "redux-saga/effects";//,take, select
import {get_SortParams,getData} from './API/api_saga'
import {  ADD_PACK_INITIAL_LIST,
   START_FILL_INITIAL_LIST,
   STOP_FILL_INITIAL_LIST,
   LOAD_FILTERED_LIST_TICKETS ,
   ADD_SORTS_TICKETS,
   ADD_ERROR_MESSAGE,
   CLEAR_ERROR_MESSAGE,
   TOGGLE_FILTER_TICKETS,
   SORT_FILTERED_LIST_TICKETS,
   INITIAL_LIMIT_TICKETS,
   ADD_FILTER_STOPS,
   TOGGLE_FILTER_STOPS
  } from "./constants/actions";

import {URL_GET_ID,URL_GET_LIST_TICKETS} from './constants/urls'




function* fillInitialList() {
  
  try {
   
    const resonse =  yield axios.get(URL_GET_ID)
    const searchId = resonse.data.searchId
    
    if (searchId===undefined || searchId===null || searchId===""){
      yield put({ type: ADD_ERROR_MESSAGE, payload: "Некорекктный id для получения данных, попробуйте еще раз" }); 
      console.log("Некорекктный id для получения данных, попробуйте еще раз")
      yield delay(2000) 
      yield put({ type: CLEAR_ERROR_MESSAGE}); 
      return
    }
    while(true){
        try{

            let response = yield getData(URL_GET_LIST_TICKETS,searchId)

            if (Number(response.status) === 502) {
              continue
            } else if (Number(response.status) !== 200) {
                yield delay(1000)
              continue
            } else {
              const new_data = yield response.data;

              yield put({ type: ADD_PACK_INITIAL_LIST, payload: new_data.tickets});
                            
              let initialListTickets = [...yield select((state) => state.initialListTickets.list)];
              
              const {minPrice,fastTime,optimal} = get_SortParams( initialListTickets )            

              yield put({ type: ADD_SORTS_TICKETS, payload: { minPrice, fastTime ,optimal:{price:optimal.price,time:optimal.duration}}});

              const  filteredListTickets = yield select((state) => state.initialListTickets.list)

              yield put({ type: LOAD_FILTERED_LIST_TICKETS,payload:filteredListTickets});
              
              const arr_stops = Array.from( new Set( filteredListTickets.reduce( ( stopsAll , element )=>{
                      stopsAll = [...stopsAll,...element.segments.reduce((stops,elem)=>{stops.push(elem.stops.length); return stops},[])]  
                      return stopsAll
                    },[]
                    )
                  )
              )
              
              yield put({ type: ADD_FILTER_STOPS,payload:arr_stops})
              
             
              if (new_data.stop===true){ 

                yield put({ type: STOP_FILL_INITIAL_LIST});

                yield put({ type: INITIAL_LIMIT_TICKETS})

                break
              }
            }
        }
        catch (error) {
          yield put({ type: ADD_ERROR_MESSAGE, payload: "ошибка получения списка билетов" }); 
          console.log("ошибка получения списка билетов",error)
          yield delay(1000) 
          yield put({ type: CLEAR_ERROR_MESSAGE}); 

          yield put({ type: STOP_FILL_INITIAL_LIST});
          yield put({ type: INITIAL_LIMIT_TICKETS})
          
          break
        }
        
    }

  } catch (error) {
    yield put({ type: ADD_ERROR_MESSAGE, payload: "ошибка получения id для получения данных" }); 
    console.log("ошибка получения id для получения данных")
    yield delay(2000) 
    yield put({ type: CLEAR_ERROR_MESSAGE}); 
  }


}



function* fetch_data() {
  yield takeLatest(START_FILL_INITIAL_LIST, fillInitialList);
}

function* fillfilteredListTickets(action) {
  yield put({ type:SORT_FILTERED_LIST_TICKETS, payload:action.payload}); 
}


function* filterTickets_data() {
  yield takeLatest(TOGGLE_FILTER_TICKETS, fillfilteredListTickets);
}

function* filterStops_data() {
  yield takeLatest(TOGGLE_FILTER_STOPS, filterStops_data_work);
}


function* filterStops_data_work() {

const stops_obj = yield select((state) => state.filterStops.stops_obj)

const activeStopsArr =  Object.keys(stops_obj).reduce((stops,id_stop)=>{

  if (stops_obj[id_stop]){ stops.push(Number(id_stop)) }
  return stops

 },[])

 const filteredListTickets = [...yield select((state) => state.initialListTickets.list)]

if (activeStopsArr.length===0){

  yield put( { type:LOAD_FILTERED_LIST_TICKETS , payload:filteredListTickets } )  
  
  const {minPrice,fastTime,optimal} = get_SortParams( filteredListTickets )            

  yield put({ type: ADD_SORTS_TICKETS, payload: { minPrice, fastTime ,optimal:{price:optimal.price,time:optimal.duration}}});

  return

}

const filteredListTickets_ = filteredListTickets.filter(element=>{

  return activeStopsArr.includes( element.segments.reduce( ( stopCount , el )=>{
              stopCount+=el.stops.length
              return stopCount
          },0)
          )
  }

  )

  yield put( { type:LOAD_FILTERED_LIST_TICKETS , payload:filteredListTickets_ } )  

  const {minPrice,fastTime,optimal} = get_SortParams( filteredListTickets_ )            

  yield put({ type: ADD_SORTS_TICKETS, payload: { minPrice, fastTime ,optimal:{price:optimal.price,time:optimal.duration}}});

}

function* mySaga() {
  yield all([fetch_data(),filterTickets_data(),filterStops_data()]);
}

export default mySaga;