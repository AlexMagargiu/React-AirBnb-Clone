import person from "../images/katie-zaferes.png"
import star from "../images/star.png"

function Card(){
    return(
        <div className="card">
            <img src={person} alt="An image of a person" className="person-img"></img>
            <div className="information">
                <div className="rating">
                    <img src={star}></img>
                    <p>5.0 <span className="gray">(6) · USA</span></p>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><strong>From $136 / </strong>person</p>
            </div>
        </div>
        
    )
}

export default Card;

