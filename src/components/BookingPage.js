import React from "react";

import BookingForm from './BookingForm';
import { useNavigate } from "react-router";
import { submitAPI } from "../APIs";


export default function BookingPage(props) {

    const navigate = useNavigate();
    return(
        <div>
            <h1>Booking Page</h1>
            <BookingForm
            onSubmit={( { date, time, guests, occasion }) => {
                const success = submitAPI( {date, time, guests, occasion} );
                if (success) {
                    navigate({
                        pathname: "/confirmation"
                    })
                }
            }}
            {...props}/>
        </div>
    );
}