import React from 'react';
import EventTitle from './reusable/EventTitle';

function EventTwo(props) {
  return (
    <section id='event2' className='sectionSpace'>
      <EventTitle type={props.data && props.data[props.sort]}></EventTitle>
    </section>
  );
}

export default EventTwo;