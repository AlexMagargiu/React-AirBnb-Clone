import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App(){
    return(
        <div className="content">
            <Navbar />
            <div className="delimiter"></div> 
            <Hero />
        </div>
    )
}

export default App;