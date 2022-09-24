import {RiDeleteBinFill} from "react-icons/ri";
import {BsPencilFill} from "react-icons/bs";

function Card(props){
    return (
        <div className={"card"}>
            <img className={"card-img"} alt={"card-images"} src={props.imgSrc}/>
            <div className={"card-body"}>
                <img src={props.userIcon} alt={"user-icon"} id={"user"}/>
                <div className={"card-desc"}>
                    <div className={"card-title"}>{props.name}</div>
                    <div className={"card-text"}>{props.text}</div>
                </div>
                <div className={"icons"}>
                    <RiDeleteBinFill id={"trash"}/>
                    <BsPencilFill id={"edit"}/>
                </div>
            </div>
        </div>
    );
}

export  default Card;