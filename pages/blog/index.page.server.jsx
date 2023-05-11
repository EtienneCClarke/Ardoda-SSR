import { contentfulClient } from "../../libs/contentful";

export { onBeforeRender };

async function onBeforeRender(pageContext) {

    // Fetch posts
    const data = await contentfulClient.getEntries({ content_type: "blog" });
    const pageProps = { data };

    return {
        pageContext: {
            pageProps
        }
    };

};