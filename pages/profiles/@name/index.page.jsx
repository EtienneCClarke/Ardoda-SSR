import { Header, Footer } from "../../../components";
import Article from "./article";

import "../../../assets/css/style.css";
import "./profile.css";

function Page(pageProps) {

    const { person, articles } = pageProps;

    return(
        <>
            <Header />
            <section id="profile">
                <div className="profile-details-wrapper">
                    <div className="profile-content">
                        <img
                            className="person-image"
                            src={person.image.fields.file.url}
                            alt={person.image.fields.title}
                        />
                        <div className="profile-text">
                            <h1 className="person-name">{person.name}</h1>
                            <h2 className="person-role">{person.role}</h2>
                            <h3 className="person-location">{person.location}</h3>
                            <p className="person-bio">{person.bio}</p>
                        </div>
                    </div>
                </div>
                <div className="articles">
                    <p className="latest">Latest from {person.name}</p>
                    {articles.map((article, idx) => {
                        return <Article data={article} key={idx}/>
                    })}
                </div>
            </section>
            <Footer />
        </>
    )
}

export { Page }