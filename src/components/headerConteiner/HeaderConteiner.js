import {START_FILL_INITIAL_LIST} from '../../constants/actions'
import axios from "axios";
import React from "react";
import logoPlane from "../../images/logoPlane.png";
import { useDispatch } from 'react-redux';

async function getListTickets(searchId,data=[]){
   
   try
   {//https://front-test.beta.aviasales.ru/tickets?searchId=3q9rb
      let response = await axios(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);

      if (response.status === 502) {
         // Статус 502 - это таймаут соединения;
         // возможен, когда соединение ожидало слишком долго
         // и сервер (или промежуточный прокси) закрыл его
         // давайте восстановим связь
         await getListTickets(searchId,data);
      } else if (response.status !== 200) {
         
         console.log("statusText",response.statusText, response.status );
         
         await new Promise(resolve => setTimeout(resolve, 1000));
         await getListTickets(searchId,data);

      } else {
      
         const new_data = await response.data;
         
         console.log(new_data)

         data = [...data,...new_data.tickets]

         if (!new_data.stop){ data =  await getListTickets(searchId,data); }
         
      }
   }
   catch (error){
      console.log("error", error);
   }

   return data
}

async function workWithData(){
   try
   {
      const resonse =  await axios.get("https://front-test.beta.aviasales.ru/search")

      console.log(resonse)

      if (resonse.data.searchId!==undefined && resonse.data.searchId!==null && resonse.data.searchId!==""){

         const listTickets = await getListTickets(resonse.data.searchId)

         console.log("listTickets",listTickets)

         console.log(
           Array.from( new Set( listTickets.reduce((arr,element)=>{
               return [...arr,...element.segments.map(el=>(el.stops.length))]
            },[])
            )
            ).sort()
         )
         
      }

   }
   catch (error){
      console.log("error", error);
   }
   

}

export const HeaderConteiner = ()=>{
   const dispatch = useDispatch();
   const onClickHandler = ()=>{
   
   //   workWithData()
   dispatch({type: START_FILL_INITIAL_LIST})
   }
   return (
   <div className="headerConteiner" onClick={onClickHandler}>
      <img src={logoPlane} alt={"Логотип самолет"}></img>
   </div>);
   
}
//http://pics.avs.io/99/36/FV.png
//<img src={logoPlane} alt={"Логотип самолет"}></img>