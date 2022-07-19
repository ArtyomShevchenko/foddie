import React from "react";
import bg from "../media/images/bg2.jpg";
// import cardImage1 from "../media/images/popular1.jpg";
// import cardImage2 from "../media/images/popular2.jpg";
// import cardImage3 from "../media/images/popular3.jpg";

const data = [
    {
        "title": "Spicy Pasta",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "img": require("../media/images/popular1.jpg"),
    },
    {
        "title": "Vegetable Pasta",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "img": require("../media/images/popular2.jpg"),
    },
    {
        "title": "Beef Pasta",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "img": require("../media/images/popular3.jpg"),
    },
]

function Popular() {
    return (
        <section className="popular-container">
            <div className="container">
                <div className="background-container bg-white-filter">
                    <img src={bg} alt="Background" />
                </div>
                <div className="wrapper">
                    <h2>Popular</h2>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consecteur adipiscing elit.<br /> Vivamus lacinia odio virae vestibulum vestibulum.</p>
                    <div className="cards col-3">
                        {data.map((element, index) => {
                            return (
                                <div className="card" key={index}>
                                    <img src={element.img} alt="Image" />
                                    <h3>{element.title}</h3>
                                    <p>{element.text}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Popular;