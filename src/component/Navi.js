import { useRef } from "react";
import { useMemo } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

function Navi(props){
    return(
        <Scrollspy className={ 'd-md-flex mb-0 gnb_ul ' + props.cls + ' ' + props.toggle } items={[]} currentClassName="is-current">
        {
          props.type[props.sort] &&
          props.type[props.sort].map((item, index) =>{
            return(
              <li id={ 'naivID'+index } key={ 'naivID'+index } ><a href={item.naviLink} className="text-decoration-none text-center px-4">{item.naviText}</a></li>
            )
          })
        }
      </Scrollspy>
    )
  }

  export default Navi;