import React from "react";
import bg from "../media/images/bg3.jpg";

function OurStatistic() {
    return (
        <section className="statistic-container">
            <div className="container">
                <div className="background-container bg-red-filter">
                    <img src={bg} alt="Background" />
                </div>
                <div className="wrapper">
                    <h2>Our Statistic</h2>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consecteur adipiscing elit.<br /> Vivamus lacinia odio virae vestibulum vestibulum.</p>
                    <div className="cards col-3">
                        <div className="card">
                            <p>153</p>
                            <p>Menu</p>
                        </div>
                        <div className="card">
                            <p>3.4k</p>
                            <p>Store</p>
                        </div>
                        <div className="card">
                            <p>32</p>
                            <p>Country</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default OurStatistic;