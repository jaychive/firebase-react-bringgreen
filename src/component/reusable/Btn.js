import React from 'react';
// import propsDB from '../../json/propsDB.json';

function Btn(props) {
  console.log(props.type);
  return (
    <div className='reusableBtn'>
      <div className='d-flex'>
        <a href={props.type && props.type.btnLink} target={props.type && props.type.btnTarget} rel="noopener noreferrer" className={`border border-${props.type && props.type.btnColor} rounded-pill py-3 px-4 text-decoration-none text-${props.type && props.type.btnColor} d-block`}>{props.type && props.type.btnContent}</a>
      </div>
    </div>
  );
}

export default Btn;