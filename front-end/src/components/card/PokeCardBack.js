import './PokeCardBack.css'


function PokeCardBack(props){
    return(
        <div>
            <div  onClick={props.onClick} className="poke-cards-tras">
            </div>
        </div>
    )
}

export default PokeCardBack