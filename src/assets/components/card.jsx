// component card with props
import star from "../../images/star_1.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} alt="katie zaferes image" className="card--image"/>
            <div className="card--stats">
                <img src={star} className="card--star"/>
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}