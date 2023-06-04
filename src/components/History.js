import React from "react";
import "../App.css";
import Mario_and_Adrian_A from "../icons_assets/Mario_Adrian_A.jpg";
import Mario_and_Adrian_B from "../icons_assets/Mario_Adrian_B.jpg";

const History = () => {
    return(
    <div>
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
        </div>
    )
}

export default History;