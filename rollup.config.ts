import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import graphql from "@rollup/plugin-graphql";
import { builtinModules } from "module";
import ts from "rollup-plugin-ts";
import pkg from "./package.json";

const isDev = process.env["ROLLUP_WATCH"] === "true";
const external = Object.keys(pkg.dependencies ?? {})
  .concat(builtinModules, Object.keys(pkg.devDependencies ?? {}))
  .filter(name => !["urlcat"].includes(name));

export default {
  input: "src/index.ts",
  output: {
    file: "dist/index.mjs",
    format: "es",
  },
  external,
  context: "global",
  plugins: [
    commonjs(),
    graphql(),
    ts({
      transpiler: "swc",
    }),
    nodeResolve(),
    json(),
    // isDev && run(),
  ],
};
