import airBnb from "../../images/airbnblogo.png"

export default function Navbar(){
    return (
        <nav>
            <img className='nav--logo' src={airBnb} />
        </nav>
    )
}