module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  

  // Collections
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/**/*.{md,html}").sort((a,b) => b.date - a.date)
  );

  eleventyConfig.addCollection("portfolio", (api) => {
  return api.getFilteredByTags("portfolio").sort((a, b) =>
    (a.data.order || 999) - (b.data.order || 999)
  );
  });

    eleventyConfig.addCollection("personal", (api) => {
  return api.getFilteredByTags("personal").sort((a, b) =>
    (a.data.order || 999) - (b.data.order || 999)
  );
  });

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
  eleventyConfig.addFilter("facetTags", (posts, exclude = []) => {
    const ex = new Set(exclude.map(s => String(s).toLowerCase()));
    const set = new Set();
    (posts || []).forEach(p => {
      (p.data.tags || []).forEach(t => {
        if (!t) return;
        const clean = String(t).trim();
        if (!clean) return;
        const lower = clean.toLowerCase();
        if (ex.has(lower)) return; // e.g., skip 'portfolio'
        set.add(clean);
      });
    });
    return [...set].sort((a,b) => a.localeCompare(b));
  });

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
    pathPrefix: process.env.PATH_PREFIX || "/",  // keep this
    templateFormats: ["njk","md","html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };

};
