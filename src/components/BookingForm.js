import React, { useState } from "react";
// import availableTimes from "./Main";


// Currently, a visitor to the Little Lemon web app cannot reserve a table.  
//Your task is to improve the app by allowing the user to enter data into 
//the form so that they can complete their registration.  
// Thus, you need to build a Booking Form component that has the following entries (form items):

// Date
// Time
// Number of guests
// Occasion (Birthday, Anniversary)
// Submit reservation button (to submit the form)



export default function BookingForm({availableTimes}) {

    // const availableTimes = [
    //     {id: 0, hour: '17:00' }, 
    //     {id: 1, hour: '18:00' }, 
    //     {id: 2, hour: '19:00' }, 
    //     {id: 3, hour: '20:00' }, 
    //     {id: 4, hour: '21:00' }, 
    //     {id: 5, hour: '22:00' }
    // ];
    
    const [date, setDate] = useState("");
    const [time, setTime] = useState([]);
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Reservation: Date: ${date}, Time: ${time}, Number of Guests: ${guests}, Occasion: ${occasion}`);
        alert(`Reservation: Date: ${date}, Time: ${time}, Number of Guests: ${guests}, Occasion: ${occasion}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="Date">
                    <label>Choose Date: </label>
                    <input 
                        type="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)}>
                    </input>
                </div>
                {/* <timeFunc time={props.availableTimes}></timeFunc> */}
                <div className="Time">
                    <label>Choose Time: </label>
                    <select value={time} onChange={(e) => setTime(e.target.value)}>
                    {availableTimes.map((hour) => (
                            <option key={hour.id} value={hour.availableTime}>{hour.availableTime}</option>

                        ))}
                    </select>
                </div>
                <div className="Guests">
                    <label>Number of Guests: </label>
                    <input 
                        type="number" 
                        value={guests}
                        placeholder="1" 
                        min="1" 
                        max="10" 
                        onChange={(e) => setGuests(e.target.value)}>
                    </input>
                </div>
                <div className="Occasion">
                    <label>Occasion: </label>
                    <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option value="birthday">Birthday</option>
                        <option value="engagement">Engagement</option>
                        <option value="anniversary">Anniversary</option>
                    </select>
                </div>
                <button onClick={handleSubmit} type="submit">Make Your Reservation</button>
            </form>
        </div>
    )
}