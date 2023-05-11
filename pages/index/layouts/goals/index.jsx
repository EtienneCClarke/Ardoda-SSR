import { AnimationOnScroll } from "react-animation-on-scroll";
import affordable from "../../../../assets/vectors/globalgoals/affordable.svg";
import book from "../../../../assets/vectors/globalgoals/book.svg";
import bowl from "../../../../assets/vectors/globalgoals/bowl.svg";
import cleanWater from "../../../../assets/vectors/globalgoals/clean-water.svg";
import communities from "../../../../assets/vectors/globalgoals/communities.svg";
import ecg from "../../../../assets/vectors/globalgoals/ecg.svg";
import economicGrowth from "../../../../assets/vectors/globalgoals/economic-growth.svg";
import fish from "../../../../assets/vectors/globalgoals/fish.svg";
import gender from "../../../../assets/vectors/globalgoals/gender.svg";
import inequalities from "../../../../assets/vectors/globalgoals/inequalities.svg";
import infinite from "../../../../assets/vectors/globalgoals/infinite.svg";
import infrastructure from "../../../../assets/vectors/globalgoals/infrastructure.svg";
import land from "../../../../assets/vectors/globalgoals/land.svg";
import partners from "../../../../assets/vectors/globalgoals/partners.svg";
import peace from "../../../../assets/vectors/globalgoals/peace.svg";
import people from "../../../../assets/vectors/globalgoals/people.svg";
import world from "../../../../assets/vectors/globalgoals/world-eye.svg";

import "./goals.css";

export default function Goals() {

    return(
        <section id="goals">
            <div className="goals-container">
                <AnimationOnScroll duration={1} animateIn="animate__fadeInUp" animateOnce={true}>
                    <div className="header">
                        <h1>Global Goals<span className="blue-txt">.</span></h1>
                        <p>For sustainable development</p>
                    </div>
                </AnimationOnScroll>
                <AnimationOnScroll duration={1} animateIn="animate__fadeInUp" animateOnce={true}>
                    <div className="goals-content">
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=1"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">1.</p>
                                    <p>NO <br/>POVERTY.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={people} />
                                </div>
                            </div>
                        </a>
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=2"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">2.</p>
                                    <p>ZERO <br/>HUNGER.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={bowl} />
                                </div>
                            </div>
                        </a>
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=3"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">3.</p>
                                    <p>GOOD HEALTH <br/>AND WELL-BEING.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={ecg} />
                                </div>
                            </div>
                        </a>
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=4"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">4.</p>
                                    <p>QUALITY <br/>EDUCATION.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={book} />
                                </div>
                            </div>
                        </a>
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=5"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">5.</p>
                                    <p>GENDER <br/>EQUALITY.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={gender} />
                                </div>
                            </div>
                        </a>
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=6"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">6.</p>
                                    <p>CLEAN WATER <br/>AND SANITATION.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={cleanWater} />
                                </div>
                            </div>
                        </a>
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=7"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">7.</p>
                                    <p>AFFORDABLE AND <br/>CLEAN ENERGY.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={affordable} />
                                </div>
                            </div>
                        </a>
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=8"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">8.</p>
                                    <p>DECENT WORK <br/>AND ECONOMIC <br/>GROWTH.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={economicGrowth} />
                                </div>
                            </div>
                        </a>
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=9"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">9.</p>
                                    <p>INDUSRTY, <br/>INNOVATION, AND <br/>INFRASTRUCTURE.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={infrastructure} />
                                </div>
                            </div>
                        </a>
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=10"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">10.</p>
                                    <p>REDUCED <br/>INEQUALITIES.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={inequalities} />
                                </div>
                            </div>
                        </a>
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=11"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">11.</p>
                                    <p>SUSTAINABLE CITIES <br/>AND COMMUNITIES.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={communities} />
                                </div>
                            </div>
                        </a>
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=12"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">12.</p>
                                    <p>RESPONSIBLE <br/>CONSUMPTION <br/>AND PRODUCTION.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={infinite} />
                                </div>
                            </div>
                        </a>
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=13"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">13.</p>
                                    <p>CLIMATE <br/>ACTION.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={world} />
                                </div>
                            </div>
                        </a>
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=14"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">14.</p>
                                    <p>LIFE BELOW <br/>WATER.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={fish} />
                                </div>
                            </div>
                        </a>
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=15"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">15.</p>
                                    <p>LIFE <br/>ON LAND.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={land} />
                                </div>
                            </div>
                        </a>
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=16"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">16.</p>
                                    <p>PEACE, JUSTICE <br/>AND STRONG <br/>INSTITUTIONS.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={peace} />
                                </div>
                            </div>
                        </a>
                        <a
                            className="goal"
                            href="https://www.globalgoals.org/take-action/?id=17"
                            target="_blank"
                        >
                            <div className="goal-box">
                                <div className="goal-txt bold">
                                    <p className="blue-txt">17.</p>
                                    <p>PARTNERS <br/>FOR THE <br/>GOALS.</p>
                                </div>
                                <div className="goal-icon">
                                    <img src={partners} />
                                </div>
                            </div>
                        </a>
                    </div>
                </AnimationOnScroll>
            </div>
        </section>
    );
}