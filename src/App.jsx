import Navbar from "./assets/components/navbar"
import Hero from "./assets/components/hero"
import Card from "./assets/components/card"
import data from "../data"

function App() {
    const cards = data.map((info) => {
        return ( <Card 
            key={info.id}
            info={info}
            /> 
        )
    })
    return (
        <div>
            <Navbar/>
            <Hero />
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}

export default App
