import './App.css'
import Navbar from "./assets/components/navbar"
import Hero from "./assets/components/hero"
import Card from "./assets/components/card"

function App() {
    return(
        <div>
            <Navbar />
            <Hero />
            <Card 
                img="katie-zaferes.png"
                rating="5.0"
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}

export default App
