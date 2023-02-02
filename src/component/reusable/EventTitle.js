import React from 'react';
// import propsDB from '../../json/propsDB.json';

function EventTitle(props) {
  return (
    <div>
      <div className='eventSpace text-center'>
        <strong className='eventStrong'>{props.type && props.type.strong}</strong>
        <p className='eventType'>{props.type && props.type.eventType}</p>
        <h2 className='eventTitle'>{props.type && props.type.h2}</h2>
      </div>
    </div>
  );
}

export default EventTitle;