// component card
import star from "../../images/star_1.png"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.info.coverImg} className="card--image"/>
            <div className="card--stats">
                <img src={star} className="card--star"/>
                <span>{props.rating}</span>
                <span className="grey">({props.info.reviewCount}) • </span>
                <span className="grey">{props.info.location}</span>
            </div>
            <p className="card--title">{props.info.title}</p>
            <p className="card--price"><span className="bold">From ${props.info.price}</span> / person</p>
        </div>
    )
}