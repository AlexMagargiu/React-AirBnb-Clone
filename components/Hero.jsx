import grid from "../images/photo-grid.png" 

function Hero(){
    return(
        <main className="hero-section">
            <img src={grid} alt="A gird of different photos"></img>
            <div className="offer">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts--all without leaving home.</p>
            </div>
        </main>
    )
}

export default Hero;