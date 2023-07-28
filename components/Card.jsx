import star from "../src/star.png"

function Card(props){
    return(
        <div className="card">
            <img src={props.img} alt="" className="person-img"></img>
            <div className="information">
                <div className="rating">
                    <img src={star}></img>
                    <p>{props.rating} <span className="gray">({props.reviewCount}) · {props.country}</span></p>
                </div>
                <p>{props.title}</p>
                <p><strong>From ${props.price} / </strong>person</p>
            </div>
        </div>
        
    )
}

export default Card;

