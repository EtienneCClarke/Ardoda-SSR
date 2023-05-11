import { Link } from "../../../../renderer/Link";
import "./article.css";

export default function Article({ data }) {
    
    function date() {
        let options = { day: '2-digit', month: 'long', year: 'numeric'};
        let datePublished = new Date(data.fields.datePublished);
        return(<p>{datePublished.toLocaleDateString("en-GB", options)}</p>);
    }

    return (
        <Link className="article" href={`/blog/${data.sys.id}`}>
            <img
                className="article-image"
                src={data.fields.image.fields.file.url}
                alt={data.fields.image.fields.title}
            />
            <div className="article-content">
                <h2 className="article-title">{data.fields.title}</h2>
                <p className="article-summary">{data.fields.summary}</p>
                <p className="article-date">{date()}</p>
            </div>
        </Link>
    )
}