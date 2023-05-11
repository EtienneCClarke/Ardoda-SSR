import { createClient } from "contentful";

const contentfulClient = createClient({
    space: "96ca3730wynu",
    accessToken: "2mPo0PzNBZDWGK5huiuYJ67FKnk70QqO-fCcAUYTJLg"
})

export { contentfulClient };