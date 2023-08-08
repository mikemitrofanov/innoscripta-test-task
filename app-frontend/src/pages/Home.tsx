import Filters from "../components/Filters.tsx";
import * as React from "react";
import Articles from "../components/Articles.tsx";

const Home = () => {
    return (
        <>
            <main>
                <Filters />
                <Articles />
            </main>
        </>
    )
}

export default Home;