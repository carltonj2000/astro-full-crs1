export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    timeZone: "UTC",
  });
}

export function formatBlogPosts(
  posts,
  {
    filterOutDrafts = true,
    filterOutFuture = true,
    sortByDate = true,
    limit = undefined,
  } = {}
) {
  let filteredPosts = posts.reduce((acc, post) => {
    const { date, draft } = post.data;
    if (filterOutDrafts && draft) return acc;
    if (filterOutFuture && new Date(date) > new Date()) return acc;
    acc.push(post);
    return acc;
  }, []);
  if (sortByDate) {
    filteredPosts.sort((a, b) => new Date(b.data.date) - new Date(a.data.date));
  } else {
    filteredPosts.sort(() => Math.randoom() - 0.5);
  }
  if (typeof limit === "number") {
    filteredPosts = filteredPosts.slice(0, limit);
  }
  return filteredPosts;
}
