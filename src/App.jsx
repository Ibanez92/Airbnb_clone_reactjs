import Navbar from "./assets/components/navbar"
import Hero from "./assets/components/hero"
import Card from "./assets/components/card"
import katie from "../src/images/katie_z.png"
import data from "../data"

function App() {
    const cards = data.map((info) => {
        return <Card img={info.coverImg}
            rating={info.stats.rating}
            reviewCount={info.stats.reviewCount}
            country={info.location}
            title= {info.title}
            price={info.price}/>
    })
    return (
        <div>
            <Navbar/>
            {cards}
        </div>
    )
}

export default App
