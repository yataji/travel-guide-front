import React from 'react';
import './part.css'
import vector from '../src/assets/images/parVector.png'
import trip from '../src/assets/images/trip.png'
import expedia from '../src/assets/images/expedia.png'
import airbnb from '../src/assets/images/airbnb.png'
import booking from '../src/assets/images/booking.png'
const Parterns = () => {
    return (
        <section className='part-section container mx-auto relative w-full h-40'>
            <img src={vector} className="absolute vector" />
            <div className='flex content '>
                <img src={trip}/>
                <img src={expedia}/>
                <img src={booking}/>
                <img src={airbnb}/>
                <img src={booking}/>
                <img src={airbnb}/>
            </div>
        </section>
    );
}

export default Parterns;
