import BookingForm from './BookingForm';

export default function BookingPage(props) {
    return(
        <div>
            <h1>Booking Page</h1>
            <BookingForm {...props}/>
        </div>
    )
}