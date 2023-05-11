import { forwardRef } from "react";
import laptop from "../../../../assets/images/png/laptop.png";
import "./hero.css";

function Hero({}, ref) {
    
    return(
        <section ref={ref} id="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Funding Distribution Tool<br/>for Angel Investors.</h1>
                    <h2>Leveraging smart contracts for <span className="blue-txt bold">Investors</span></h2>
                    <p>Empowering investors to securely fund &amp;<br/> recuperate their investments.</p>
                    <a className="hero-cta" >Create your first MPA today!</a>
                </div>
            </div>
            <img src={laptop} alt="laptop" />
            <div className="balls-container">
                <div className="a background-ball"></div>
                <div className="b background-ball"></div>
                <div className="c background-ball"></div>
                <div className="d background-ball"></div>
            </div>
        </section>
    );
}

export default forwardRef(Hero);