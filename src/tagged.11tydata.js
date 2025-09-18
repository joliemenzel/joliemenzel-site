// src/tagged.11tydata.js
module.exports = {
  pagination: {
    data: "collections.tagList",
    size: 1,
    alias: "tag",
    before: (tags, data) => {
      const custom = new Set(((data.site && data.site.customTagPages) || [])
        .map(t => String(t).toLowerCase()));
      return (tags || []).filter(raw => {
        if (typeof raw !== "string") return false;
        const clean = raw.trim();
        if (!clean) return false;
        const lower = clean.toLowerCase();
        if (custom.has(lower)) return false; // handled by a custom page (e.g., games)
        const slug = lower.replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
        if (!slug || slug === "index") return false; // avoid /tagged/ and /tagged/index
        return true;
      });
    }
  },

  // Render all tag pages with one template under _includes
  layout: "tag.njk",

  eleventyComputed: {
    permalink: (data) => {
      const lower = String(data.tag || "").toLowerCase();
      const slug  = lower.replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
      return `tagged/${slug}/index.html`;
    },
    title: (data) =>
      data.tag ? data.tag.charAt(0).toUpperCase() + data.tag.slice(1) : data.title
  }
};
