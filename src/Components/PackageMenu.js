import React from "react";

const data = [
    {
        "title": "Pasta + Ice Tea",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "img": require("../media/images/ourmenu1.png"),
        "cost": "34.00",
    },
    {
        "title": "Vegetable Pasta",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "img": require("../media/images/ourmenu3.png"),
        "cost": "34.00",
    },
    {
        "title": "Beef Pasta",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "img": require("../media/images/ourmenu4.png"),
        "cost": "34.00",
    },
]

function PackageMenu() {
    return (
        <section className="packagemenu-container">
            <div className="container">
                <div className="wrapper">
                    <h2>PackageMenu.js</h2>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consecteur adipiscing elit.<br /> Vivamus lacinia odio virae vestibulum vestibulum.</p>
                    <div className="cards col-3">
                        {data.map((element, index) => {
                            return (
                                <div className="card" key={index}>
                                    <img src={element.img} alt="Image" />
                                    <h3>{element.title}</h3>
                                    <p>{element.text}</p>
                                    <button data-cost={element.cost}>${element.cost}</button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PackageMenu;