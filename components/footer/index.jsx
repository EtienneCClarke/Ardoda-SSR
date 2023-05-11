import logo from "../../assets/vectors/logo.svg";
import { Link } from "../../renderer/Link";
import twitter from "../../assets/vectors/socials/twitter_large.svg";
import instagram from "../../assets/vectors/socials/instagram_large.svg";
import linkedin from "../../assets/vectors/socials/linkedin_large.svg";
import "./footer.css";

export default function Footer() {
    return(
        <footer id="footer">
            <div className="footer-container">
                <div className="footer-content-left">
                    <img
                        src={logo}
                        onClick={() => {scroll("hero")}}
                        alt="Ardoda"
                        draggable="false"
                    />
                    <p>Accomplish more together.</p>
                    <div className="footer-socials push-bottom">
                        {/* <a href="#"><img src={twitter} /></a>
                        <a href="#"><img src={instagram} /></a>
                        <a href="#"><img src={linkedin} /></a> */}
                    </div>
                </div>
                <div className="footer-spacer"></div>
                <div className="footer-content-right">
                    <a onClick={() => alert("under construction")}>CONNECT</a>
                    <a onClick={() => alert("under construction")}>TERMS AND CONDITIONS</a>
                    <a onClick={() => alert("under construction")}>PRIVACY POLICY</a>
                    <Link href="./blog">BLOG</Link>
                </div>
            </div>
            <div className="copyright-container">
                <p>Copyright &#169;2022 Dream Kollab</p>
            </div>
        </footer>
    );
}