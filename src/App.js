import { useReducer } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import BookingForm from "./components/BookingForm";
import BookingPage from "./components/BookingPage";
import { ConfirmedBooking } from "./components/ConfirmedBooking";

import { fetchAPI } from "./APIs";



export const updateTimes = (state, action) => fetchAPI(new Date(action.date));
export const initializeTimes = () => { return fetchAPI(new Date())};

function App() {
      const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
      const router = createBrowserRouter([
        {
          path: "/",
          element: (
            <>
              <Nav />
              <Main availableTimes={availableTimes} />
              <Footer />
            </>
          ),
        },
        {
          path: "/booking",
          element: (
            <>
            <Nav />
            <BookingPage 
              availableTimes={availableTimes}
              setAvailableTimes ={dispatch}
              />
            <Footer />
            </>
          )
        },
        {
          path: "/confirmation",
          element: (
            <>
            <Nav />
            <ConfirmedBooking />
            <Footer />
            </>
          )
        },
    ]);
  return <RouterProvider router = {router} />;
}

export default App;
