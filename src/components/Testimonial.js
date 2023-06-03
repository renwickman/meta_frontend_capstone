import React from "react";
import "../App.css";

import reviewer1 from "../icons_assets/reviewer1.jpg";
import reviewer2 from "../icons_assets/reviewer2.jpg";
import reviewer3 from "../icons_assets/reviewer3.jpg";
import reviewer4 from "../icons_assets/reviewer4.jpg";

const Testimonial = () => {

        <div>
        <section id="testimonials">
                    <div className="testContainer">
                        <h1>Testimonials</h1>
                        <div className="row">
                            <div className="col">
                                <div className="card">
                                    <h3 className="rating">Rating: 5.0</h3>
                                    <div className="post">
                                        <img src={reviewer1} width="100px" alt="reviewer" />
                                        <p className="person">Sarah</p>
                                    </div>
                                    <p className="post">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <h3 className="rating">Rating: 4.75</h3>
                                    <div className="post">
                                        <img src={reviewer2} width="100px" alt="reviewer" />
                                        <p className="person">Jack</p>
                                    </div>
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <h3 className="rating">Rating: 4.90</h3>
                                    <div className="post">
                                        <img src={reviewer3} width="100px" alt="reviewer3" />
                                        <p className="person">Jane</p>
                                    </div>
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card">
                                    <h3 className="rating">Rating: 4.45</h3>
                                    <div className="post">
                                        <img src={reviewer4} width="100px" alt="reviewer4" />
                                        <p className="person">Andrew</p>
                                    </div>
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
}

export default Testimonial;