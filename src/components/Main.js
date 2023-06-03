import React, { useReducer } from "react";

// import Nav from "./Nav";
// import Header from "./Header";
import Specials from "./Specials";
import Testimonial from "./Testimonial";
import History from "./History";
import Footer from "./Footer";

import BookingForm from "./BookingForm";



export default function Main() {

    const [openTimes] = React.useState([
        {availableTime: '17:00', id: 0 },
        {availableTime: '18:00', id: 1 },
        {availableTime: '19:00', id: 2 },
        {availableTime: '20:00', id: 3 },
        {availableTime: '21:00', id: 4 },
        {availableTime: '22:00', id: 5 },
        {availableTime: '23:00', id: 6 }
    ]);

    /* const initializeTimes = {};
    //const updateTimes = () => {
    // if (action.type === '17:00') return {'17:00'};
    // if (action.type === '18:00') return {'18:00'};
    // if (action.type === '19:00') return {'19:00'};
    // if (action.type === '20:00') return {'20:00'};
    // if (action.type === '21:00') return {'21:00'};
    //};
    */

    //const [openTimes, dispatch] = useReducer(updateTimes, initializeTimes);

    
    // function timeFunc(props) {
    //     return(
    //     <div className="Time">
    //                 <label>Choose Time: </label>
    //                 <select value={time} onChange={(e) => setTime(e.target.value)}>
    //                 {props.availableTimes.map((minute) => (
    //                         <option 
    //                         key={minute.id}>{minute.hour}</option>
    //                     ))}
    //                 </select>
    //             </div>
    //     )
    // }

    return  (
        <div>
            <BookingForm availableTimes={openTimes} />
            <main>
                <Specials />
                <Testimonial />
                <History />

            </main>
            <Footer />
        </div>
    )
}