import reviewer1 from "../icons_assets/reviewer1.jpg";
import reviewer2 from "../icons_assets/reviewer2.jpg";
import reviewer3 from "../icons_assets/reviewer3.jpg";
import reviewer4 from "../icons_assets/reviewer4.jpg";
import greek_salad from "../icons_assets/greek_salad.jpg";
import Mario_and_Adrian_A from "../icons_assets/Mario_Adrian_A.jpg";
import Mario_and_Adrian_B from "../icons_assets/Mario_Adrian_B.jpg";
import lemon_dessert from "../icons_assets/lemon_dessert.jpg";
import bruschetta from "../icons_assets/bruschetta.svg";
// import { BsFillCarFrontFill } from  "react-icons/bs";




function Main() {
    return  (
    <main>
        <section id="weekSpecial">
        <div className="weekSpecialBox">
            <div className="top">
                <h1>This week's specials!</h1>
                <button class="btn btn-warning">Online Menu</button>
            </div>
            <br />
            <div className="content">
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <img src={greek_salad} alt="cardImage" className="cardImage" />
                            <div className="cardContent">
                                <div className="cardHeading">
                                    <h3>Greek Salad</h3>
                                    <p className="price">$12.99</p>
                                </div>

                                <p className="description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>

                                <div className="order">
                                    <p className="orderDel">Order a Delivery</p>
                                    {/* <img src={BsFillCarFrontFill} alt="Delivery" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="column">
                        <div className="card">
                            <img src={bruschetta} alt="cardImage" className="cardImage" />
                            <div className="cardContent">
                                <div className="cardHeading">
                                    <h3>Bruschetta</h3>
                                    <p className="price">$5.99</p>
                                </div>

                                <p className="description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                                <br />
                                <div className="order">
                                    <p className="orderDel">Order a Delivery</p>
                                    {/* <img src={MdOutlineDeliveryDining} alt="Delivery" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <img height="171px" src={lemon_dessert} alt="cardImage" className="cardImage" />
                            <div className="cardContent">
                                <div className="cardHeading">
                                    <h3>Lemon Dessert</h3>
                                    <p className="price">$5.00</p>
                                </div>
                                <br />
                                <p className="description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>

                                <div className="order">
                                    <p className="orderDel">Order a Delivery</p>
                                    {/* <img src={MdOutlineDeliveryDining} alt="Delivery" /> */}
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </section>

{/* Testimonials */}
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


        <section id="history">
            <div className="history_section">
                <div className="row">
                <div className="col">
                    <h1>Little Lemon</h1>
                    <h1>Chicago</h1>
                    <br />
                    <br />
                    <p className="wordsTwo">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.  The restaurant features a locally-sourced menu with daily specials.  All started up years ago by Mario and Adrian.</p>
                </div>
                <div className="col">
                    <img width="300px" src= {Mario_and_Adrian_A}
                    alt="the owners of Little Lemon"
                    />
                    <img width="300px" src= {Mario_and_Adrian_B}
                    alt="the owners of Little Lemon"
                    />
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}

export default Main;