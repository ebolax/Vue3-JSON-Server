const livereload = require("livereload");

const server = livereload.createServer({
    exts: [
        "html",
        "js",
        "css",
        "mjs",
        "json"
    ]
});
server.server.once("connection", () =>
{
    setTimeout(() =>
    {
        server.refresh();
    }, 100);
});

server.watch(__dirname + "/dist");