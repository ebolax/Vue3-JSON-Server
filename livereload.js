import livereload from "livereload";

const server = livereload.createServer({
    exts: ["html", "js", "css", "mjs", "json"]
});
server.server.once("connection", () => {
    setTimeout(() => {
        server.refresh();
    }, 100);
});

server.watch("./dist");
