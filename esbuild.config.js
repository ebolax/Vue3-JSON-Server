import esbuild from "esbuild";
import vuePlugin from "esbuild-plugin-vue3";
import fs from "fs";

const args = process.argv.slice(2);

const watch = args[0] === "dev";
const minify = args[0] === "prod";

// frontend
esbuild.build({
    entryPoints: ["src/main.ts"],
    bundle: true,
    watch,
    minify,
    outfile: "dist/www/index.js",
    plugins: [vuePlugin()]
});

// backend
let backend_files = fs.readdirSync("src/server");
backend_files = backend_files.map((el) => "src/server/" + el);

esbuild.build({
    platform: "node",
    entryPoints: backend_files,
    bundle: false,
    watch,
    outfile: "dist/server.js"
});
