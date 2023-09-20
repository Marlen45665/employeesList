import "./Card.css"

function Card(){
    return(
        <div className="card">
            <div className="card-name">
                <div className="avatar">
                    <div className="initials">LL</div>
                </div>
                <div className="name-box">
                    <div className="name">name</div>
                    <div className="username">username</div>
                </div>
            </div>
            <div className="card-email">
                <div className="icon"></div>
                <div className="email">email:email</div>
            </div>
            <div className="card-email">
                <div className="icon"></div>
                <div className="email">email:email</div>
            </div>
            <div className="card-email">
                <div className="icon"></div>
                <div className="email">email:email</div>
            </div>
            
        </div>
    )
}

export default Card;