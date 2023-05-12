import { Header, Footer } from "../../components";
import { LatestPost, PostPreview } from "./layouts";
import "../../assets/css/style.css";
import "./blog.css";

export { getDocumentProps }

function getDocumentProps(pageProps) {
    return {
        cardTitle: "Ardoda Circular",
        cardDescription: "Weekly insights into technology and economy",
        cardImageUrl: "http://www.ardoda.com/ardoda_circular.jpg",
        cardSecureImageUrl: "https://www.ardoda.com/ardoda_circular.jpg",
        cardImageType: "image/jpeg",
        cardImageAlt: "Ardoda Circular title and subheading",
        cardImageWidth: "1151",
        cardImageHeight: "630",
        cardUrl: "https://ardoda.com/blog"
    }
}

function Page(pageProps) {

    const { data } = pageProps;

    return(
        <section id="blog">
            <Header />
            <div className="blog-title">
                <h1>Ardoda Circular.</h1>
                <p>Weekly insights into technology and economy</p>
            </div>
            <div className="spacer"></div>
            <LatestPost data={data.items[0]} />
            <div className="spacer"></div>
            <div className="other-posts">
                {data.items.slice(1, data.items.length)?.map((postData, idx) => {
                    return <PostPreview data={postData} key={idx}/>
                })}
            </div>
            <Footer />
        </section>
    );
};

export { Page };