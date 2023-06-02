import "./buttonIcon.css";


function ButtonIcon(props){
    return (
        <div className="iconsButtons">
            <img className="imgIcons" src={props.image}></img>
        </div>
    )
}

export default ButtonIcon