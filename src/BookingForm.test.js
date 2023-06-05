import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./App";


    
    //const today = new Date().toISOString().string('T')[0];
    //const submitData = jest.fn();


    test("Schedule Times", () => {
        const dates = initializeTimes;
        expect(dates).not.toBe([]);
    });

    test("Times updated dynamically", () => {
        const dates = updateTimes("", { date: "2023-06-25"})
        expect(dates).not.toBe([])
    });


    test('Renders the BookingForm heading', () => {
        render(<BookingForm />);
        const headingElement = screen.getByText("Reserve Your Table");
        expect(headingElement).toBeInTheDocument();
    });

    test('initializeTimes works', () => {
        const availableTimes1 = ['17:00', '18:00', '19:00'];
        render(<BookingForm availableTimes={availableTimes1} />);
        const timeOptions = screen.getByTestId('time');
        expect(timeOptions.length).toBe(7);
    });


