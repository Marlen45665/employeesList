import "./Card.css"

function Card(props){
    console.log("рендер Card")
    return(
        <div className="card">
            <div className="card-name">
                <div className="avatar">
                    <div className="initials">LL</div>
                </div>
                <div className="name-box">
                    <div className="name">{`{${props.data.name}}`}</div>
                    <div className="username">{`{${props.data.username}}`}</div>
                </div>
            </div>
            <div className="card-email">
                <div className="icon"></div>
                <div className="email">email:{`{${props.data.email}}`}</div>
            </div>
            <div className="card-email">
                <div className="icon"></div>
                <div className="email">website:{`{${props.data.website}}`}</div>
            </div>
            <div className="card-email">
                <div className="icon"></div>
                <div className="email">phone:{`{${props.data.phone}}`}</div>
            </div>
            
        </div>
    )
}

export default Card;