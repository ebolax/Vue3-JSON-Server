const esbuild = require("esbuild");
const vuePlugin = require("esbuild-plugin-vue3");
const fs = require('fs');

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

let backend_files = fs.readdirSync("src/server");
backend_files = backend_files.map(function(el)
{
    return 'src/server/' + el;
})

// backend
esbuild.build({
    platform: 'node',
    entryPoints: backend_files,
    bundle: false,
    watch,
    outfile: "dist/server.mjs"
});