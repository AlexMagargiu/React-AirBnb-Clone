import star from "../src/star.png"

function Card(props){
    let badgeText;
    if (props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="badge">{badgeText}</div>}
            <img src={props.item.coverImg} alt="" className="person-img"></img>
            <div className="information">
                <div className="rating">
                    <img src={star}></img>
                    <p>{props.item.stats.rating} <span className="gray">({props.item.stats.reviewCount}) · {props.item.location}</span></p>
                </div>
                <p>{props.item.title}</p>
                <p><strong>From ${props.item.price} / </strong>person</p>
            </div>
        </div>
        
    )
}

export default Card;

