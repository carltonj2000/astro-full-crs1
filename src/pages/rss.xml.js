import rss from "@astrojs/rss";

const blogsImp = import.meta.glob("./blog/*.md", { eager: true });
const blogs = Object.values(blogsImp);
export function get(context) {
  return rss({
    stylesheet: "/rss/styles.xsl",
    title: "Buzz’s Blog",
    description: "A humble Astronaut’s guide to the stars",
    site: context.site,
    items: blogs.map((blog) => ({
      link: blog.url,
      title: blog.frontmatter.title,
      pubDate: blog.frontmatter.date,
    })),
  });
}
