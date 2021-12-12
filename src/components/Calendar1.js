import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import '../App.css'

const Calendar1 = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <Calendar 
            onChange={setDate}
             value = {date}
             maxDate={new Date((date.getFullYear()+10),(date.getMonth()+1),(date.getDay()))}
             minDate={new Date((date.getFullYear()-10),(date.getMonth()+1),(date.getDay()))}
             />
            <div className='day'>{date.toDateString()}</div>
        </div>
        
    
    )
}

export default Calendar1;
