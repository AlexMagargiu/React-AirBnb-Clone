import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data";

function App(){
    const cardElement = data.map(data => {
        return <Card 
                    img = {data.coverImg}
                    rating = {data.stats.rating}
                    reviewCount = {data.stats.reviewCount}
                    country = {data.location}
                    title = {data.title}
                    price = {data.price} 
                />
    }) 
    return(
        <div className="content">
            <Navbar />
            <div className="delimiter"></div> 
            <Hero />
            {cardElement}
        </div>
    )
}

export default App;