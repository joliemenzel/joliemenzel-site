// src/tagged.11tydata.js
module.exports = {
  // Filter the tag list BEFORE pagination so we only paginate valid, non-custom tags
  pagination: {
    before: (tags, data) => {
      const custom = new Set(((data.site && data.site.customTagPages) || [])
        .map(t => String(t).toLowerCase()));
      return (tags || []).filter(raw => {
        if (typeof raw !== "string") return false;
        const clean = raw.trim();
        if (!clean) return false; // drop empty/whitespace
        const lower = clean.toLowerCase();
        if (custom.has(lower)) return false; // handled by custom file (e.g., games)
        const slug = lower.replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
        if (!slug || slug === "index") return false; // avoid /tagged/ and /tagged/index
        return true;
      });
    }
  },

  eleventyComputed: {
    // Now every paginated item is valid, so ALWAYS return a real permalink
    permalink: (data) => {
      const lower = String(data.tag || "").toLowerCase();
      const slug  = lower.replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-");
      return `tagged/${slug}/index.html`;
    },
    title: (data) =>
      data.tag ? data.tag.charAt(0).toUpperCase() + data.tag.slice(1) : data.title
  }
};
