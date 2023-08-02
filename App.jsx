import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data";

function App(){
    const cardElement = data.map(data => {
        return <Card 
                    key = {data.id}
                    item = {data}
                />
    }) 
    return(
        <div className="content">
            <Navbar />
            <div className="delimiter"></div> 
            <Hero />
            <div className="offer-div">{cardElement}</div>
        </div>
    )
}

export default App;