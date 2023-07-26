import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

function App(){
    return(
        <div className="content">
            <Navbar />
            <div className="delimiter"></div> 
            <Hero />
            <Card />
        </div>
    )
}

export default App;