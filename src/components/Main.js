import React from "react";
import Header from "./Header";
import Specials from "./Specials";
import Testimonial from "./Testimonial";
import History from "./History";



export default function Main(props) {
    return  (
        <>
            <Header />
            <Specials />
            <Testimonial />
            <History />
        </>
    )
}