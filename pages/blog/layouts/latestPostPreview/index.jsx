import { useEffect, useState } from "react";
import { Link } from "../../../../renderer/Link";
import "./latestPost.css";

export default function LatestPost({ data }) {

    const [date, setDate] = useState('');

    const image = {
        background: `url(${data.fields.image.fields.file.url})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover"
    }

    useEffect(() => {
        let options = { day: '2-digit', month: 'long', year: 'numeric'};
        let datePublished = new Date(data.fields.datePublished);
        setDate(datePublished.toLocaleDateString("en-GB", options));
    }, [])

    return(
        <Link
            className="latest-post"
            href={`./blog/${data.sys.id}`}
        >
            <div className="latest-post-container">
                <div className="latest-post-image" style={image}></div>
                <div className="latest-post-content">
                    <div className="post-tags">
                        {data.fields.tags.map((tag, idx) => {
                            return <p key={idx}>{tag}</p>
                        })}
                    </div>
                    <h2 className="post-title">{data.fields.title}</h2>
                    <p className="post-summary">{data.fields.summary}</p>
                    <div className="post-author-container push-bottom">
                        <img src={data.fields.authorImage.fields.file.url} />
                        <div className="post-author">
                            <p>{data.fields.author}</p>
                            <p>{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}