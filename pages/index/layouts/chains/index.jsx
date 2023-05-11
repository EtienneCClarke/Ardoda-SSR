import { AnimationOnScroll } from "react-animation-on-scroll";
import Ethereum from "../../../../assets/images/png/chains/withText/Ethereum.png";
import Polygon from "../../../../assets/images/png/chains/withText/Polygon.png";
import Avalanche from "../../../../assets/images/png/chains/withText/Avalanche.png";
import Arbitrum from "../../../../assets/images/png/chains/withText/Arbitrum.png";
import BNB from "../../../../assets/images/png/chains/withText/BNB Chain.png";
import "./chains.css";

export default function Chains() {

    return(
        <section id="chains">
            <div className="chains-container glass">
                <div className="chains-content">
                    <AnimationOnScroll duration={1} animateIn="animate__fadeInUp" animateOnce={true} className="header">
                        <h1>Full EVM Support<span className="blue-txt">.</span></h1>
                        <p>Ardoda is compatible with the most popular EVM blockchains</p>
                    </AnimationOnScroll>
                    <div className="chains-grid">
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                            <img src={Ethereum} alt="Etherem" />
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                            <img src={Polygon} alt="Polygon" />
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                            <img src={Avalanche} alt="Avalanche" />
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                            <img src={Arbitrum} alt="Arbitrum" />    
                        </AnimationOnScroll>
                        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
                            <img src={BNB} alt="BNB Chain" />
                        </AnimationOnScroll>
                    </div>
                </div>
            </div>
            <div className="balls-container">
                <div className="a background-ball"></div>
                <div className="b background-ball"></div>
                <div className="c background-ball"></div>
            </div>
        </section>
    );
}