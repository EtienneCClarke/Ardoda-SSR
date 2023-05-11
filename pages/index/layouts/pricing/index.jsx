import { forwardRef } from "react"
import "./pricing.css"

function Pricing({}, ref) {

    return(
        <section ref={ref} id="pricing">
            <div className="pricing-container">
                <div className="pricing-content-wrapper">
                    <div className="title-container">
                        <h1>Let's build tomorrow, <span className="blue-txt">today.</span></h1>
                        <p>The best way to predict the future is to create it</p>
                    </div>
                    <div className="pricing-content">
                        <div className="price-box glass">
                            <h2>No Upfront Cost</h2>
                        </div>
                        <div className="price-box glass">
                            <h2>4% Fee</h2>
                            <p>Per Transaction</p>
                        </div>
                    </div>
                </div>
                <div className="balls-container">
                    <div className="a background-ball"></div>
                    <div className="b background-ball"></div>
                </div>
            </div>
        </section>
    );
}

export default forwardRef(Pricing)