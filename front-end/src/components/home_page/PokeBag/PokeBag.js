import "./PokeBag.css"

import Cartas from "../../card/CardsBack"
import CardsBack from "../../card/CardsBack"

function PokeBag(){
    return (
        <div className="background-pokeBag">
            <div className="row-cards">
            <CardsBack />
            <CardsBack />
            <CardsBack />
            <CardsBack />
            <CardsBack />
            </div>
        <div className="row-cards">
            <CardsBack />
            <CardsBack />
            <CardsBack />
            <CardsBack />
            <CardsBack />
            </div>
        <div className="row-cards">
            <CardsBack />
            <CardsBack />
            <CardsBack />
            <CardsBack />
            <CardsBack />
            </div>
        <div className="row-cards">
            <CardsBack />
            <CardsBack />
            <CardsBack />
            <CardsBack />
            <CardsBack />
            </div>
        </div>
    )
}

export default PokeBag