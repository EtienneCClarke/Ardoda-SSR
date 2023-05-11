import { useEffect, useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { indexInClass } from "../../../../utils/indexInClass";
import "./think.css";

export default function Think() {

    const ref = useRef();
    const SECONDS_MS = 7500;

    useEffect(() => {
        const interval = setInterval(() => {
            const elements = ref.current.getElementsByClassName("think-content");

            // get current active
            let target = indexInClass(elements, 'active');

            // remove animations
            elements[target].classList = "think-content";
            elements[target].getElementsByTagName("h3")[0].classList = "";
            
            // update to new target index
            target++;
            if(target == elements.length) { target = 0 }

            // add animations to next
            elements[target].classList = "think-content active";
            elements[target].getElementsByTagName("h3")[0].classList = "line-1 anim-typewriter";
        }, SECONDS_MS);

        return () => clearInterval(interval);
    }, [])

    return(
        <section id="think" ref={ref}>
            <AnimationOnScroll duration={1} animateIn="animate__fadeInLeft">
                <div className="think-content active">
                    <h1>Think Big<span className="blue-txt">.</span></h1>
                    <h3 className="line-1 anim-typewriter">
                        The best way to predict the future is to create it.
                    </h3>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll duration={1} animateIn="animate__fadeInRight">
                <div className="think-content">
                    <h1>Strategise<span className="blue-txt">.</span></h1>
                    <h3>
                        Develop modern strategies that drive revenue.
                    </h3>
                </div>
            </AnimationOnScroll>
            <AnimationOnScroll duration={1} animateIn="animate__fadeInLeft">
                <div className="think-content">
                    <h1>Make an Impact<span className="blue-txt">.</span></h1>
                    <h3>
                        Create a legacy that pioneers technology for years to come.
                    </h3>
                </div>
            </AnimationOnScroll>
            <div className="balls-container">
                <div className="a background-ball"></div>
                <div className="b background-ball"></div>
            </div>
        </section>
    );
}