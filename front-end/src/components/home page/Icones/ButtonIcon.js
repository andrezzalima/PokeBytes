import ".Icones/buttonIcon.css";


function ButtonIcon(props){
    return (
        <div className="iconsButtons">
            <img className="imgIcons" src={props.image} onClick={props.onClick}></img>
        </div>
    )
}

export default ButtonIcon