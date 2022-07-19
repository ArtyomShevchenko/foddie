import React from "react";
import bg from "../media/images/bg3.jpg";

function Template() {
    return (
        <section className="template-container">
            <div className="container col-2">
                <section>
                    <div className="background-container bg-red-filter">
                        <img src={bg} alt="Background" />
                    </div>
                </section>
                <section className="wrapper">
                    <h2>Our Statistic</h2>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consecteur adipiscing elit.<br /> Vivamus lacinia odio virae vestibulum vestibulum.</p>
                    <button>Order now</button>
                </section>
            </div>
        </section>
    )
};

export default Template;