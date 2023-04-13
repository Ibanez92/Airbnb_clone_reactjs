export default function Card(props) {
    return (
        <div className="card">
            <img src={`src/assets/images/${props.img}`} alt="katie zaferes image" className="card--image"/>
            <div className="card--stats">
                <img src="src\assets\images\star_1.png" className="card--star"/>
                <span>{props.rating}</span>
                <span className="grey">{props.reviewCount} •</span>
                <span className="grey">USA</span>
            </div>
            <p>Life Lesson with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}