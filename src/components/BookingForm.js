import React, { useState, useEffect } from "react";
import { fetchAPI } from "../APIs";
import { Formik } from "formik";
import * as Yup from 'yup';

export default function BookingForm(props){

    const getDate = (today = new Date()) => {
        return today.toISOString().slice(0, 10);
    }

    const todayDate = new Date().toISOString().slice(0, 10);

    const scheduleValid = Yup.object().shape({
        date: Yup.date()
            .min(getDate(), "Cannot choose a date before today")
            .required('Required'),
        time: Yup.string()
            .required('Required'),
        guests: Yup.number()
            .min(1, 'Cannot go past 1')
            .max(10, 'Cannot go above 10')
            .required('Required'),
        occasion: Yup.string()
            .required('Required'),
    });


    const [availableTimes, setAvailableTimes] = useState(
        fetchAPI(new Date())
    );
    const [date, setDate] = useState(
        new Date().toISOString().slice(0, 10)
    );
    const [time, setTime] = useState([]);
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    

    useEffect(() => {
        if(!date) return;
        setAvailableTimes(fetchAPI(new Date(date)));
    }, [date]);


    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({ date, time, guests, occasion });

        // const success = submitAPI( {date, time, guests, occasion} );
        // if (!success){
        //     return;
        // }

        console.log(`Reservation Date: ${date}`);
        console.log(`${todayDate}`);
        console.log(`Time: ${time}`);
        console.log(`Number of Guests: ${guests}`);
        console.log(`Occasion: ${occasion}`);
    }

    return (
        <div>
            <h1>Reserve Your Table</h1>

            <Formik
                initialValues={{
                    date: '',
                    time: '',
                    guests: 1,
                    occasion: '',
                }}
                validate={values => {
                    const errors = {};
                    if (!values.date) {
                        errors.date = 'Required';
                    }
                    if (!values.time) {
                        errors.time = 'Required';
                    }
                    if (!values.occasion) {
                        errors.occasion = 'Required';
                    }
                    if (values.occasion === '') {
                        errors.occasion = 'Required';
                    }
                    if (!values.guests) {
                        errors.guests = 'Required';
                    }
                    else if (values.guests > 10) {
                        errors.guests = 'Cannot be more than 10 guests';
                    }
                    else if (values.guests < 1) {
                        errors.guests = 'Has to be at least 1 guest';
                    }
                    return errors;
                }}
                validationSchema={scheduleValid}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
            <form 
            style={{ display: "grid", gap: 10, paddingBottom: 20 }}
            onSubmit={handleSubmit}
            >
                <div className="Date">
                    <label htmlFor="resDate">Choose Date:</label>
                    <input 
                        type="date"
                        id="resDate"
                        min={todayDate}
                        data-testid="date"
                        value={date} 
                        required={true}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                    />
                </div>

                <div>{errors.date && touched.date}</div>

                <div className="Time">
                    <label htmlFor="resTime">Choose Time:</label>
                    <select 
                        id="resTime" 
                        data-testid="time"
                        value={time}
                        required={true}
                        onChange={(e) => {
                            setTime(e.target.value);
                            // props.setAvailableTimes( { date: e.target.value });
                        }}
                    >
                    {availableTimes.map((time, index) => (
                            <option key={index}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>

                <div>{errors.time && touched.time}</div>

                <div className="Guests">
                    <label htmlFor="resGuests">Number of Guests:</label>
                    <input 
                        type="number" 
                        data-testid="guests"
                        value={guests}
                        id="resGuests"
                        placeholder="0" 
                        min="1" 
                        max="10"
                        required={true}
                        onChange={(e) => setGuests(e.target.value)}>
                    </input>
                </div>

                <div>{errors.guests && touched.guests}</div>

                <div className="Occasion">
                    <label htmlFor="resOccasion">Occasion:</label>
                    <select 
                        id="resOccasion"
                        data-testid="occasion" 
                        value={occasion}
                        required={true}
                        onChange={(e) => setOccasion(e.target.value)}>
                        <option value=""></option>
                        <option value="Birthday">Birthday</option>
                        <option value="Engagement">Engagement</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>

                <div>{errors.occasion && touched.occasion}</div>

                <button 
                    onClick={handleSubmit} 
                    data-testid="submit"
                    type="submit"
                    disabled={!(date && time && guests && occasion)}
                    >Make Your Reservation
                </button>
            </form>
            )}
            </Formik>
        </div>
    )
}