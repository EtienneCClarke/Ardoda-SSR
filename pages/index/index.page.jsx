import { useRef } from "react";
import { Header, Footer } from "../../components";
import {
    Hero,
    Think,
    Service,
    Chains,
    WellBeing,
    Goals,
    Story,
    Team,
    Pricing
} from "./layouts"
import "./home.css"
import "../../assets/css/style.css"
import "animate.css/animate.min.css";

export const documentProps = {
    title: 'Hello'
}

function Page() {

	const sections = {
        hero: useRef(null),
        service: useRef(null),
        wellBeing: useRef(null),
        about: useRef(null),
        pricing: useRef(null)
    };

    function scrollTo(target) {
        sections[target].current?.scrollIntoView({ behaviour: 'smooth' });
    };

	return(
		<>
			<Header scrollTo={scrollTo}/>
            <Hero ref={sections.hero}/>
            <Think />
            <Service ref={sections.service} />
            <Chains />
            <WellBeing ref={sections.wellBeing} />
            <Goals />
            <Story ref={sections.about} />
            <Team />
            <Pricing ref={sections.pricing} />
			<Footer />
		</>
	);
}

export { Page }
