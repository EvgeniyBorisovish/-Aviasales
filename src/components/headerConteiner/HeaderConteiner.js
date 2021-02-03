
import React from "react";
import { useDispatch } from 'react-redux';
import {START_FILL_INITIAL_LIST} from '../../constants/actions'
import logoPlane from "../../images/logoPlane.png";

export const HeaderConteiner = ()=>{

   const dispatch = useDispatch();

   const onClickHandler = ()=>{ dispatch({type: START_FILL_INITIAL_LIST})}
  
   return (
   <div className="headerConteiner" onClick={onClickHandler}>
      <img src={logoPlane} alt={"Логотип самолет"}></img>
   </div>);
}
