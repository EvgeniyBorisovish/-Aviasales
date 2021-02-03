import {URL_GET_ID,URL_GET_LIST_TICKETS} from '../constants/urls'
import axios from "axios";
 
 
 export async function* getPackTickets(){
         
    try
    {
       const resonse =  await axios.get(URL_GET_ID)
       const searchId = resonse.data.searchId
       let new_data = {} 
       if (searchId!==undefined && searchId!==null && searchId!==""){
 
        try
        {
           let status=true 
          while(status){
                try
                {
                    let response = await axios(`?searchId="${URL_GET_LIST_TICKETS}${searchId}`);
                
                    if (Number(response.status) === 502) {
                        // Статус 502 - это таймаут соединения;
                        // возможен, когда соединение ожидало слишком долго
                        // и сервер (или промежуточный прокси) закрыл его
                        // давайте восстановим связь
                        continue
                    } else if (Number(response.status) !== 200) {
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        continue
                    } else {
                    
                         new_data = await response.data;
                         
                        yield {
                            listTickets:new_data.tickets,
                            error:""}
                        }        

                        if (!new_data.stop){ continue }
                        
                    }
                
                catch (error){
                console.log("error", error);
                }
          }

        }
        catch (error){
               yield {
                listTickets:[],
                error:"ошибка получения списка билетов"}
         }        

          
       }
 
    }
    catch (error){
        yield {
        listTickets:[],
        error:"ошибка получения id для получения данных"}
    }
     
 
 }