import React from "react";

function ChifRenatta() {
    return (
        <section className="chifrenatta-container">
            <div className="container">
                <div className="background-container bg-white-filter">
                    <img src={require("../media/images/bg1.jpg")} alt="Background" />
                </div>
                <div className="wrapper">
                    <img className="photo" src={require("../media/images/chif.jpg")} alt="Chif picture" />
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibu-lum vestibulum. </p>
                    <h2>Chif Renatta</h2>
                </div>
            </div>
        </section>
    )
}

export default ChifRenatta;