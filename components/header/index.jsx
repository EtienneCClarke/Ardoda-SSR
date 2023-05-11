import React, { useState } from "react";
import { Link } from "../../renderer/Link";
import { usePageContext } from "../../renderer/usePageContext";
import logo from "../../assets/vectors/logo.svg";
import "./header.css";

export default function Header({ scrollTo }) {

    const [toggleNav, setToggleNav] = useState(false);
    const pageContext = usePageContext();

    function redirect(target) {
        if(target == "hero") {
            if(pageContext.urlPathname == "/blog") {
                window.location.pathname = "/"
            }
            else if(pageContext.urlPathname.includes("blog/")) {
                window.location.pathname = "/blog"
            }
            else if(pageContext.urlPathname != "/") {
                window.location.pathname = "/"
            }
            else {
                setToggleNav(false);
                scrollTo(target);
            }
        } else {
            if(pageContext.urlPathname != "/") {
                window.location.pathname = "/"
            } else {
                setToggleNav(false);
                scrollTo(target);
            }
        }
    }

    return(
        <div className="header-container">
            <div className="logo-container">
                <img
                    src={logo}
                    onClick={() => {redirect("hero")}}
                    alt="Ardoda"
                    draggable="false"
                />
            </div>
            <div
                className={
                    "links-container "
                    + (toggleNav ? "links-open" : "links-closed")
                }
            >
                <a
                    className="header-link"
                    onClick={() => redirect("service")}
                >Our Service</a>
                <a
                    className="header-link"
                    onClick={() => redirect("pricing")}
                >Pricing</a>
                <a
                    className="header-link"
                    onClick={() => redirect("wellBeing")}
                >Well being</a>
                <a
                    className="header-link"
                    onClick={() => redirect("about")}
                 >About Us</a>
                <Link
                    className={"header-link " + (pageContext.urlPathname == "/blog" ? "active" : "")}
                    href="/blog"
                >Blog</Link>
                <a
                    className="header-connect"
                >Connect Wallet</a>
            </div>
            <div className="burger-container">
                <div
                    className={"burger-btn " + (toggleNav ? "burger-open" : "")}
                    onClick={() => {setToggleNav(toggleNav => !toggleNav)}}
                >
                    <span></span>
                </div>
            </div>
        </div>
    );
}