import React from 'react';

import { useLocation, useNavigate } from 'react-router';

export const ConfirmedBooking = () => {
    const search = useLocation().search;
    const params = new URLSearchParams(search);

    const navigate = useNavigate();
    return(
        <div style={{ gap: 10, paddingBottom: 20 }}>
            <h1>Your Booking at Little Lemon has been confirmed!</h1>
            <h3>Date: {params.get("date")}</h3>
            <h3>Time: {params.get("time")}</h3>
            <h3># of Guests: {params.get("guests")}</h3>
            <h3>Occasion: {params.get("occasion")}</h3>
            <button type="button" class="btn btn-warning" onClick={() => navigate("/")}>
                Return Home
            </button>
        </div>
    )
}

