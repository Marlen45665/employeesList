import { initials } from "../servise/initial"
import Email from "../../assets/icons/email.svg"
import Website from "../../assets/icons/website.svg"
import Phone from "../../assets/icons/phone.svg"
import "./Card.css"


function Card({data}){
    return(
        <div className="card">
            <div className="card-name">
                <div className="avatar">
                    <div className="initials">{initials(data.name)}</div>
                </div>
                <div className="name-box">
                    <div className="name">{`{${data.name}}`}</div>
                    <div className="username">{`{${data.username}}`}</div>
                </div>
            </div>
            <div className="user-info">
                <div className="icon">
                    <img src={Email} alt="logo"></img>
                </div>
                <div className="user-info-title">email:{`{${data.email}}`}</div>
            </div>
            <div className="user-info">
                <div className="icon">
                    <img src={Website} alt="logo"></img>
                </div>
                <div className="user-info-title">website:{`{${data.website}}`}</div>
            </div>
            <div className="user-info">
                <div className="icon">
                    <img src={Phone} alt="logo"></img>
                </div>
                <div className="user-info-title">phone:{`{${data.phone}}`}</div>
            </div>
        </div>
    )
}

export default Card;