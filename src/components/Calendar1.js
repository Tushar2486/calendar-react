import React from 'react';
import Calendar from 'react-calendar';
import { useState } from 'react';
import '../App.css'

const Calendar1 = () => {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar onChange={onChange} value = {value} />
            <div className='day'>{value.toDateString()}</div>
        </div>
        
    
    )
}

export default Calendar1;
