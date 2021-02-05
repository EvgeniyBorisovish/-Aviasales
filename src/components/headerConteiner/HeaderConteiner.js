
import React from "react";
import { useDispatch } from 'react-redux';
import {START_FILL_INITIAL_LIST} from '../../constants/actions'
import logoPlane from "../../images/logoPlane.png";


export const HeaderConteiner = ()=>{

   const dispatch = useDispatch();

   const onClickHandler = ()=>{ dispatch({type: START_FILL_INITIAL_LIST})}
  
   return (
   <div className="headerConteiner " onClick={onClickHandler}>
      <div className="headerConteiner__group">
         <img src={logoPlane} alt={"Логотип самолет"} className="headerConteiner__logoPlane" ></img>
         <div className="headerConteiner__circle-preloader"></div>
      </div>
      
   </div>);
}
