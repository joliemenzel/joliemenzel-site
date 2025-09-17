module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("filterByTag", function(posts, tag) {
    return posts.filter(p => (p.data.tags || []).includes(tag));
  });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Collections: posts + tags
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/**/*.{md,html}")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addFilter("indexOfPage", function(posts, currentPage) {
    return posts.findIndex(p => p.url === currentPage.url);
  });

  eleventyConfig.addCollection("tagList", (collectionApi) => {
    const tags = new Set();
    collectionApi.getFilteredByGlob("src/posts/**/*.{md,html}").forEach(item => {
      (item.data.tags || []).forEach(t => tags.add(t));
    });
    return [...tags].sort();
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};