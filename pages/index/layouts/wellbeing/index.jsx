import { forwardRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import esg from "../../../../assets/images/png/well-being.png";
import "./wellbeing.css";

function WellBeing({}, ref) {
 
    return(
        <section ref={ref} id="well-being">
            <div className="well-being-content">
                <AnimationOnScroll duration={1} animateIn="animate__fadeInLeft" animateOnce={true} className="well-being-left">
                    <img src={esg} alt="people and nature" />
                </AnimationOnScroll>
                <AnimationOnScroll duration={1} animateIn="animate__fadeInRight" animateOnce={true} className="well-being-right">
                    <div className="header">
                        <h1>Well Being<span className="blue-txt">.</span></h1>
                        <p>ESG targets &and; United Nations SDG global goals</p>
                    </div>
                    <p>
                        Ardoda values ESG: Environment-friendly blockchain, social community focus, and governance with transparent smart contracts.
                    </p>
                    <p>
                        “Access to financial services has a positive impact in addressing poverty (SDG 1), gender equality (SDG 5) and reducing inequalities of other minorities.” - UNDP
                    </p>
                    <p>
                        Ardoda promotes diversity, economic growth, and creativity through innovative technology, and equal access to services. It supports sustainable practices, transparency, and collaboration for shared goals.
                    </p>
                    <p>
                        Our objective is to use technology to bridge the trust barrier and empower people to work together towards a common goal.
                    </p>
                </AnimationOnScroll>
            </div>
        </section>
    );
}

export default forwardRef(WellBeing)