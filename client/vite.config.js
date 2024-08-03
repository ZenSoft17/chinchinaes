import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";

export default defineConfig({
    plugins : [React()],
    server : {
        host : 'localhost',
        port : 3000
    }
});