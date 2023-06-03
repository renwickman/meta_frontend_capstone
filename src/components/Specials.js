
import greek_salad from "../icons_assets/greek_salad.jpg";
import lemon_dessert from "../icons_assets/lemon_dessert.jpg";
import bruschetta from "../icons_assets/bruschetta.svg";


const Specials = () => {
    return(
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
    )
    }

export default Specials;