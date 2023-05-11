import { contentfulClient } from "../../../libs/contentful";

export { onBeforeRender };

async function onBeforeRender(pageContext) {

    const id = pageContext.routeParams.id;
    let post = await contentfulClient.getEntry(id);
    post = post.fields;

    const pageProps = { post }

    return {
        pageContext: {
            pageProps
        }
    }

};