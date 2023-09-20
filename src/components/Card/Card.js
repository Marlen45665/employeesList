import "./Card.css"
import Email from "../../assets/icons/email.svg"
import Website from "../../assets/icons/website.svg"
import Phone from "../../assets/icons/phone.svg"


function Card(props){
    console.log("рендер Card")

    function initials(name){
        const initialFull =  name.split(' ').map(word => word.charAt(0)).join('');
        if (initialFull.length <= 2) {
            return initialFull;
        } else {
            return initialFull.substring(0, 2);
        }
    }

    return(
        <div className="card">
            <div className="card-name">
                <div className="avatar">
                    <div className="initials">{initials(props.data.name)}</div>
                </div>
                <div className="name-box">
                    <div className="name">{`{${props.data.name}}`}</div>
                    <div className="username">{`{${props.data.username}}`}</div>
                </div>
            </div>
            <div className="user-info">
                <div className="icon">
                    <img src={Email} alt="logo"></img>
                </div>
                <div className="user-info-title">email:{`{${props.data.email}}`}</div>
            </div>
            <div className="user-info">
                <div className="icon">
                    <img src={Website} alt="logo"></img>
                </div>
                <div className="user-info-title">website:{`{${props.data.website}}`}</div>
            </div>
            <div className="user-info">
                <div className="icon">
                    <img src={Phone} alt="logo"></img>
                </div>
                <div className="user-info-title">phone:{`{${props.data.phone}}`}</div>
            </div>
            
        </div>
    )
}

export default Card;