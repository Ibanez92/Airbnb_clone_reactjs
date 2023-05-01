import Navbar from "./assets/components/navbar"
import Hero from "./assets/components/hero"
import Card from "./assets/components/card"
import katie from "../src/images/katie_z.png"
import data from "../data"

function App() {
    const cards = data.map((info) => {
        return <Card img={katie}
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life Lessons with Katie Zaferes"
            price={136}/>
    })
    return (
        <div>
            <Navbar/>
            <Hero/>
        </div>
    )
}

export default App
