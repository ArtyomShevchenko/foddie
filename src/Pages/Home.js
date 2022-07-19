import React from "react";
import Popular from "../Components/Popular";
import OurStatistic from "../Components/OurStatistic";
import OurMenu from "../Components/OurMenu";
import Template from "../Components/Template";
import PackageMenu from "../Components/PackageMenu";
import ChifRenatta from "../Components/ChifRenatta";
import Subscribe from "../Components/Subscribe";

function Home() {
    return (
        <div>
            <Popular />
            <OurStatistic />
            <OurMenu />
            <Template />
            <PackageMenu />
            <ChifRenatta />
            <Subscribe />
        </div>
    );
};

export default Home;