import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "../../../../renderer/Link";
import paul from "../../../../assets/images/jpg/people/paulcclarke.jpg";
import ken from "../../../../assets/images/jpg/people/kenm.jpg";
import etienne from "../../../../assets/images/jpg/people/etienneclarke.jpg";
import sorcha from "../../../../assets/images/jpg/people/sorchamulligan.jpg";
import adam from "../../../../assets/images/jpg/people/adamjones.jpg";
import linkedin from "../../../../assets/vectors/socials/linkedin.svg";
import instagram from "../../../../assets/vectors/socials/instagram.svg";
import "./team.css"

export default function Team() {

    return(
        <section id="team">
            <div className="team-container">
                <AnimationOnScroll duration={1.4} animateIn="animate__fadeInUp" animateOnce={true} className="header">
                    <h1>Meet The Team <span className="blue-txt">.</span></h1>
                    <p>
                        Our world-class team of entrepreneurs are from the finance, 
                        music, and engineering worlds. Our shared objective is to 
                        empower entrepreneurs to drive value and facilitate secure 
                        mechanisms to reward the angels who made it possible.
                    </p>
                </AnimationOnScroll>
                <div className="team-content">
                    <AnimationOnScroll duration={1.4} animateIn="animate__fadeInUp" animateOnce={true}>
                        <div className="team-image-wrapper"></div>
                        <img src={paul} alt="Paul" className="team-image"/>
                        <div className="member-info">
                            <div className="member-text">
                                <h2 className="member-name">
                                    <Link href="./profiles/Paul Cellier-Clarke">Paul Cellier-Clarke</Link>
                                </h2>
                                <p className="member-title blue-txt">CEO</p>
                            </div>
                            <div className="member-socials">
                                {/* <a><img src={twitter} alt="twitter"/></a> */}
                                <a
                                    href="https://www.linkedin.com/in/paul-c-clarke-08ba57116/"
                                    target="_blank"
                                ><img src={linkedin} alt="linked in"/></a>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll duration={1.4} animateIn="animate__fadeInUp" animateOnce={true}>
                        <img src={etienne} alt="Etienne" className="team-image"/>
                        <div className="member-info">
                            <div className="member-text">
                                <h2 className="member-name">
                                <Link href="./profiles/Etienne Cellier-Clarke">Etienne Cellier-Clarke</Link></h2>
                                <p className="member-title blue-txt">CTO</p>
                            </div>
                            <div className="member-socials">
                                {/* <a><img src={twitter} alt="twitter"/></a> */}
                                <a
                                    href="https://www.linkedin.com/in/etienne-cellier-clarke/"
                                    target="_blank"
                                ><img src={linkedin} alt="linked in"/></a>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll duration={1.4} animateIn="animate__fadeInUp" animateOnce={true}>
                        <img src={sorcha} alt="Sorcha" className="team-image"/>
                        <div className="member-info">
                            <div className="member-text">
                                <h2 className="member-name">
                                    <Link href="./profiles/Sorcha Mulligan">Sorcha Mulligan</Link>
                                </h2>
                                <p className="member-title blue-txt">CSO / The SME Chain</p>
                            </div>
                            <div className="member-socials">
                                {/* <a><img src={twitter} alt="twitter"/></a> */}
                                <a
                                    href="https://www.linkedin.com/in/sorchamulligan/"
                                    target="_blank"
                                ><img src={linkedin} alt="linked in"/></a>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll duration={1.4} animateIn="animate__fadeInUp" animateOnce={true}>
                        <img src={adam} alt="Adam" className="team-image"/>
                        <div className="member-info">
                            <div className="member-text">
                                <h2 className="member-name">
                                    <Link href="./profiles/Adam Jones">Adam Jones</Link>
                                </h2>
                                <p className="member-title blue-txt">Marketing Advisor / Ethereum Towers</p>
                            </div>
                            <div className="member-socials">
                                {/* <a><img src={twitter} alt="twitter"/></a> */}
                                <a
                                    href="https://www.linkedin.com/in/adam-jones-3b719979/"
                                    target="_blank"
                                ><img src={linkedin} alt="linked in"/></a>
                            </div>
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll duration={1.4} animateIn="animate__fadeInUp" animateOnce={true}>
                        <img src={ken} alt="Ken" className="team-image"/>
                        <div className="member-info">
                            <div className="member-text">
                                <h2 className="member-name">
                                    <Link href="./profiles/Ken Maguire">Ken M.</Link>
                                </h2>
                                <p className="member-title blue-txt">Angel Investor</p>
                            </div>
                            <div className="member-socials">
                                {/* <a><img src={twitter} alt="twitter"/></a> */}
                                <a
                                    href="https://instagram.com/defiantstreets?igshid=NTc4MTIwNjQ2YQ=="
                                    target="_blank"
                                ><img src={instagram} alt="Instagram"/></a>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </section>
    );
}