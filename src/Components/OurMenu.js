import React from "react";

const content = [
    {
        "title": "Pasta",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim.",
        "img": require("../media/images/ourmenu1.png"),
    },
    {
        "title": "Mie Cyam",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim.",
        "img": require("../media/images/ourmenu2.png"),
    },
    {
        "title": "Carbonara",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim.",
        "img": require("../media/images/ourmenu3.png"),
    },
    {
        "title": "Pecel Lele",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim.",
        "img": require("../media/images/ourmenu4.png"),
    },
]

function OurMenu() {
    return (
        <section className="ourmenu-container">
            <div className="container bg-beige-filter">
                <div className="wrapper">
                    <h2>Our Menu</h2>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consecteur adipiscing elit.<br /> Vivamus lacinia odio virae vestibulum vestibulum.</p>
                    <div className="cards col-2">
                        {content.map((element, index) => {
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

export default OurMenu;