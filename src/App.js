import Header from "./components/Header";
import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Specials from "./components/Specials";
import Testimonial from "./components/Testimonial";
import History from "./components/History";

// import Footer from "./components/Footer";
// import './App.css';
// import { BrowserRouter } from "react-router-dom";
// import BookingForm from "./components/BookingForm";
// import BookingPage from "./components/BookingPage";

function App() {
  return (
    <>
    
    {/* <Nav /> */}
      {/* <Header /> */}
      <Nav />
        <Header />
        <Main />
        <Specials />
          <Testimonial />
            <History />
        {/* <BookingPage />
        <BookingForm /> */}
        {/* <Footer /> */}
        
    </>
  );
}

export default App;
