import ZAI from "z-ai-web-dev-sdk";

const PORT = 3000;

// Simple Bun HTTP server
const server = Bun.serve({
  port: PORT,
  async fetch(req) {
    const url = new URL(req.url);

    // API route: /api/search
    if (url.pathname === "/api/search") {
      const query = url.searchParams.get("q");
      if (!query || query.trim().length === 0) {
        return new Response(JSON.stringify({ error: "Query parameter 'q' is required" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      try {
        const zai = await ZAI.create();
        const searchResult = await zai.functions.invoke("web_search", {
          query: query.trim(),
          num: 15,
        });

        return new Response(
          JSON.stringify({ results: searchResult, query: query.trim() }),
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
      } catch (error) {
        console.error("Search error:", error);
        return new Response(
          JSON.stringify({ error: "Search failed", details: error.message }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
    }

    // Serve static files from /public directory
    const publicDir = import.meta.dir + "/public";
    let filePath = publicDir + url.pathname;

    // Default to index.html
    if (url.pathname === "/" || url.pathname === "") {
      filePath = publicDir + "/index.html";
    }

    try {
      const file = Bun.file(filePath);
      if (await file.exists()) {
        return new Response(file);
      }
    } catch {}

    // 404
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`🟢 Hulya Search Engine running at http://localhost:${PORT}`);
