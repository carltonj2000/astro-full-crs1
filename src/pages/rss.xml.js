import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { formatBlogPosts } from "../js/utils.js";

let blogsImp = await getCollection("blog");
const blogs = formatBlogPosts(blogsImp);

export function get() {
  return rss({
    stylesheet: "/rss/styles.xsl",
    title: "Buzz’s Blog",
    description: "A humble Astronaut’s guide to the stars",
    site: import.meta.env.SITE,
    items: blogs.map((blog) => ({
      link: `/blog/${blog.slug}`,
      title: blog.data.title,
      pubDate: blog.data.date,
    })),
  });
}
