import { contentfulClient } from "../../../libs/contentful";

export { onBeforeRender };

async function onBeforeRender(pageContext) {

    const name = pageContext.routeParams.name;
    
    let person = await contentfulClient.getEntries({ content_type: "people", "fields.name": name });
    person = person.items[0].fields

    let articles = await contentfulClient.getEntries({ content_type: "blog", "fields.author": person.name });
    articles = articles.items;

    const pageProps = {
        person,
        articles
    }

    return {
        pageContext: {
            pageProps
        }
    };

};