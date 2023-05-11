import { forwardRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "./story.css";

function Story({}, ref) {

    return(
        <section ref={ref} id="story">
            <div className="story-content">
                <AnimationOnScroll duration={1.4} animateIn="animate__fadeInLeft" animateOnce={true} className="header">
                    <h1>Our Story<span className="blue-txt">.</span></h1>
                    <p>Why does Ardoda exist?</p>
                </AnimationOnScroll>
                <AnimationOnScroll duration={1.4} animateIn="animate__fadeInRight" animateOnce={true} className="story-txt">
                    <p>
                        Our entrepreneurial spirit was forged in the fires of recession. 
                        At our core, we are two brothers who watched our parents build their 
                        enterprises from the ground up following the ‘08 financial crisis. 
                        <br/><br/>We learned that entrepreneurship and creating value for others is 
                        the only way to contribute towards change that matters &amp; help 
                        others succeed. In continuing uncertain times, Ardoda will empower 
                        entrepreneurs to create value by providing secure tools for angel 
                        investors.
                    </p>
                </AnimationOnScroll>
            </div>
        </section>
    );
}

export default forwardRef(Story);