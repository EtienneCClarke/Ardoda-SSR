import { forwardRef } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import contractIcon from "../../../../assets/vectors/contract.svg";
import lockIcon from "../../../../assets/vectors/lock.svg";
import peopleIcon from "../../../../assets/vectors/people.svg";
import "./service.css";

function Service({}, ref) {
    return(
        <section ref={ref} id="service">
            <div className="service-container">
                <AnimationOnScroll duration={1} animateIn="animate__fadeInUp">
                    <div className="service-box">
                        <div className="icon-box">
                            <img src={contractIcon} alt="smart contract" />
                        </div>
                        <div className="service-content">
                            <h1>Smart Contracts Simplified<span className="blue-txt">.</span></h1>
                            <p>
                                Ardoda code-lessly generates a unique MPA (mutual payment address) 
                                and deploys a brand new smart contract onto the blockchain. You
                                define how much each participant will be entitled to upon creation
                                and any money passing through the Smart Contract will forever be
                                shared accordingly.
                            </p>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll duration={1} animateIn="animate__fadeInUp">
                    <div className="service-box">
                        <div className="icon-box">
                            <img src={lockIcon} alt="lock" />
                        </div>
                        <div className="service-content">
                            <h1>Secure Sharing<span className="blue-txt">.</span></h1>
                            <p>
                                When the MPA is paid into each participant can withdraw their funds without affecting anyone else. Once created nobody can change the percentages ensuring everyone is guaranteed their share.
                            </p>
                        </div>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll duration={1} animateIn="animate__fadeInUp">
                    <div className="service-box">
                        <div className="icon-box">
                            <img src={peopleIcon} alt="people" />
                        </div>
                        <div className="service-content">
                            <h1>Trusted<span className="blue-txt">.</span></h1>
                            <p>
                                Our technology has been professionally audited by Solidity Finance who have secured over $50bn of on-chain value including the Bored Ape Yacht Club.
                            </p>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>
            <div className="balls-container">
                <div className="a background-ball"></div>
            </div>
        </section>
    );
}

export default forwardRef(Service);