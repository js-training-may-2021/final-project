import React from "react";
import './404.scss'
import {useHistory} from "react-router-dom";

const Page404 = () => {
    const history = useHistory();

    function handleGoToPokemons() {
        history.push("/");
    }
    return (
        <div className="page404">
            {/*<Header/>*/}
            <div className="page404__wrapper wrapper">
                <div className="page404__title">
                    <span>4</span>
                    <img src="/pokeball-png.png" alt="pokeball"/>
                    <span>4</span>
                </div>
                <div>
                    Uh-oh!
                </div>
                <div>
                    You look lost...
                </div>
                <button onClick={handleGoToPokemons}>Go to pokemons</button>
            </div>
        </div>
    )
}

export default Page404;