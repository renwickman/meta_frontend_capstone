import { render, screen } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { initializeTimes, updateTimes } from "./App";


    //const availableTimes1 = ['17:00', '18:00', '19:00'];
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

    // test('Renders the BookingForm heading', () => {
    //     render(<BookingForm />);
    //     const headingElement = screen.getByText("Reserve Your Table");
    //     expect(headingElement).toBeInTheDocument();
    // });

    // test('initializeTimes works', async () => {
    //     render(<BookingForm availableTimes={availableTimes1} />);
    //     const timeOptions = await screen.findAllByTestId('resTime');
    //     expect(timeOptions.length).toBe(3);
    // });


    // test('updateTimes works', () => {
    //     render(<BookingForm availableTimes={availableTimes1} />);
    //     fireEvent.click(submitButton);
    //     expect(initTimes).toBeInTheDocument();
    // })

    // test('Submission works', () => {
    //     const onSubmit = jest.fn();
    //     render(<BookingForm onClick={onSubmit} />);

    //     const dateInput = screen.getAllByLabelText('Choose Date: ');
    //     const timeInput = screen.getAllByLabelText('Choose Time: ');
    //     const guestsInput = screen.getAllByLabelText('Number of Guests: ');
    //     const occasionInput = screen.getAllByLabelText('Occasion: ');
    //     const submitButton2 = screen.getByText("Reserve Your Table");

    //     fireEvent.change(dateInput, { target: { value: '2023-06-05' } });
    //     fireEvent.change(timeInput, { target: { value: '17:00' } });
    //     fireEvent.change(guestsInput, { target: { value: '4' } });
    //     fireEvent.change(occasionInput, { target: { value: 'Anniversary' } });
    //     fireEvent.click(submitButton2);

    //     //fireEvent.click(submitButton);

    //     expect(onSubmit).toHaveBeenCalledWith({
    //         resDate: '2023-06-05',
    //         resTime: '17:00',
    //         resGuests: '4',
    //         resOccasion: 'Anniversary'
    //     });
    // });

