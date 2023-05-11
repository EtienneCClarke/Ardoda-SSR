import { Link } from "../../../renderer/Link";
import { Header, Footer } from "../../../components";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import "../../../assets/css/style.css";
import "./post.css";

function Page(pageProps) {

    const { post } = pageProps

    const RICHTEXT_OPTIONS = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return <p className="post-paragraph">{children}</p>
            },
            [INLINES.HYPERLINK]: (node, children) => {
                if(node.data.uri.includes("ardoda.com")) {
                    return <a className="post-link" href={node.data.uri}>{children}</a>
                }
                return <a className="post-link" href={node.data.uri} target="_blank">{children}</a>
            },
            [BLOCKS.HEADING_1]: (node, children) => {
                return <h1 className="post-h1">{children}</h1>
            },
            [BLOCKS.QUOTE]: (node, children) => {
                return <p className="glass post-block-quote">{children}</p>
            },
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                return <img
                    className="post-image"
                    src={node.data.target.fields.file.url}
                    alt={node.data.target.fields.file.title}
                />
            }
        }
    }

    function date() {
        let options = { day: '2-digit', month: 'long', year: 'numeric'};
        let datePublished = new Date(post.datePublished);
        return(<p>{datePublished.toLocaleDateString("en-GB", options)}</p>);
    }
    
    return(
        <section id="post">
            <Header />
            <div className="post-container">
                <img className="title-image" src={post.image.fields.file.url} />
                <h1>{post.title}</h1>
                <div className="post-details-wrapper">
                    <div className="post-details">
                        <Link href={`/profiles/${post.author}`} className="post-author-container">
                            <img src={post.authorImage.fields.file.url} />
                            <div className="post-author">
                                <p className="post-author-name">{post.author}</p>
                                <p>{date()}</p>
                            </div>
                        </Link>
                        <div className="post-tags">
                            {post.tags.map((tag, idx) => {
                                return <p key={idx}>{tag}</p>;
                            })}
                        </div>
                    </div>
                </div>
                <div className="post-body">
                    {documentToReactComponents(post.content, RICHTEXT_OPTIONS)}
                </div>
            </div>
            <Footer />
        </section>
    )
}

export { Page }