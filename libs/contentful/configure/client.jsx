import pkg from "contentful";
const { createClient } = pkg;

const contentfulClient = createClient({
    space: "96ca3730wynu",
    accessToken: "2mPo0PzNBZDWGK5huiuYJ67FKnk70QqO-fCcAUYTJLg"
})

export { contentfulClient };