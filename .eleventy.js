module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Collections
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/**/*.{md,html}").sort((a,b) => b.date - a.date)
  );

  // Filters
  eleventyConfig.addFilter("indexOfPage", (posts, currentPage) =>
    posts.findIndex(p => p.url === currentPage.url)
  );
  eleventyConfig.addFilter("withTag", (posts, tag) =>
    posts.filter(p => (p.data.tags || []).includes(tag))
  );
  eleventyConfig.addFilter("sortByOrder", (arr) =>
    [...arr].sort((a,b) => (a.data.order || 999) - (b.data.order || 999))
  );

  // SINGLE sanitized tag list (remove any other tagList definitions!)
  eleventyConfig.addCollection("tagList", (api) => {
    const tags = new Set();
    api.getFilteredByGlob("src/posts/**/*.{md,html}").forEach(item => {
      (item.data.tags || []).forEach(t => {
        if (typeof t !== "string") return;
        const clean = t.trim();
        if (!clean) return;                 // drop empty/whitespace
        const lower = clean.toLowerCase();
        if (lower === "index") return;      // reserve 'index'
        tags.add(clean);                    // keep original casing for display
      });
    });
    return [...tags].sort((a,b) => a.localeCompare(b));
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    pathPrefix: process.env.PATH_PREFIX || "/",
    templateFormats: ["njk","md","html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };

};
