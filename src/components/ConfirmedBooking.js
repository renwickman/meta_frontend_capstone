import React from 'react';

import { useNavigate } from 'react-router';

export const ConfirmedBooking = () => {
    const navigate = useNavigate();
    return(
        <div style={{ gap: 10, paddingBottom: 20 }}>
            <h1>Your Booking at Little Lemon has been confirmed!</h1>

            <button type="button" class="btn btn-warning" onClick={() => navigate("/")}>
                Return Home
            </button>
        </div>
    )
}

