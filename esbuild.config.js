const esbuild = require("esbuild");
const vuePlugin = require("esbuild-plugin-vue3");

const args = process.argv.slice(2);

let watch = args[0] === "dev";
let minify = args[0] === "prod";

//frontend
esbuild.build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    watch,
    minify,
    outfile: "dist/www/index.js",
    plugins: [vuePlugin()]
});

// backend
esbuild.build({
    platform: 'node',
    entryPoints: ["src/server/server.ts"],
    bundle: false,
    watch,
    outfile: "dist/server.mjs"
});