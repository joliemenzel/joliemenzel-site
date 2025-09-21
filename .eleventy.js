module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  

  // Collections
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/**/*.{md,html}").sort((a,b) => b.date - a.date)
  );

  eleventyConfig.addCollection("portfolio", (api) => {
  return api.getFilteredByTags("site_portfolio").sort((a, b) =>
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

  eleventyConfig.addShortcode("youtube", function(input, opts = {}) {
    const width = opts.width ? String(opts.width) : "";
    const ratio = String(opts.ratio || "16/9");
    const align = opts.align || "center";

    const maxWidth = width ? (/^\d+$/.test(width) ? `${width}px` : width) : "100%";
    const margin =
      align === "left"  ? "1.5rem auto 1.5rem 0" :
      align === "right" ? "1.5rem 0 1.5rem auto" :
                          "1.5rem auto";

    // --- Parse ID + timestamp from many input shapes ---
    function parseYouTube(u) {
      const s = String(u).trim();
      // If they passed just the id (possibly with ?t=…)
      let id = s, query = "";
      if (s.startsWith("http")) {
        const url = new URL(s);
        // watch?v=ID or youtu.be/ID or /embed/ID
        if (url.hostname.includes("youtube.")) {
          if (url.pathname === "/watch") id = url.searchParams.get("v") || "";
          else if (url.pathname.startsWith("/embed/")) id = url.pathname.split("/").pop();
        } else if (url.hostname.includes("youtu.be")) {
          id = url.pathname.replace(/^\/+/, "");
        }
        query = url.search.replace(/^\?/, "");
      } else {
        // non-URL; split "ID?foo" pattern
        [id, query = ""] = s.split("?");
      }

      // Collect params and normalize timestamp
      const params = new URLSearchParams(query);
      let start = null;

      // Prefer explicit start=
      if (params.has("start")) {
        const v = params.get("start");
        if (v && /^\d+$/.test(v)) start = parseInt(v, 10);
      }

      // Support t=100, t=100s, t=1m40s, t=1h2m3s
      if (start == null && params.has("t")) {
        const t = params.get("t") || "";
        let secs = null;
        if (/^\d+$/.test(t)) secs = parseInt(t, 10);
        else {
          const m = t.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i);
          if (m) {
            const [, h="0", m_="0", s_="0"] = m;
            secs = (+h)*3600 + (+m_)*60 + (+s_);
          }
        }
        if (Number.isFinite(secs)) start = secs;
        params.delete("t"); // remove t; we'll emit start
      }

      // Clean known non-embed params (optional)
      params.delete("v"); // from watch URLs
      return { id, start, params };
    }

    const { id, start, params } = parseYouTube(input);
    if (!id) throw new Error("youtube shortcode: could not parse video id");

    // Build embed URL
    if (start != null) params.set("start", String(start));
    // nice defaults you may want
    params.set("rel", "0");           // show related from same channel
    params.set("modestbranding", "1");
    const qs = params.toString();
    const src = `https://www.youtube.com/embed/${id}${qs ? `?${qs}` : ""}`;

    return `<div class="video-embed" data-ratio="${ratio}" style="--max:${maxWidth}; margin:${margin}">
      <iframe
        src="${src}"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>`;
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

  // use slugs to link to posts
  eleventyConfig.addFilter("postUrlBySlug", (posts, slug) => {
    const p = (posts || []).find(
      (p) => (p.data && (p.data.slug || p.fileSlug)) === slug
    );
    return p ? p.url : "#";
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    pathPrefix: process.env.PATH_PREFIX || "/",  // keep this
    templateFormats: ["njk","md","html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };

};
