import Navbar from "./assets/components/navbar"
import Hero from "./assets/components/hero"
import Card from "./assets/components/card"
import data from "../data"

function App() {
    const cards = data.map((info) => {
        return ( <Card 
            key={info.id}
            img={info.coverImg}
            rating={info.stats.rating}
            reviewCount={info.stats.reviewCount}
            country={info.location}
            title= {info.title}
            price={info.price}
            openSpots={info.openSpots}
            /> 
        )
    })
    return (
        <div>
            <Navbar/>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

export default App
