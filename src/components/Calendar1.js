import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import '../App.css'

const Calendar1 = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <Calendar onChange={setDate} value = {date} />
            <div className='day'>{date.toDateString()}</div>
        </div>
        
    
    )
}

export default Calendar1;
