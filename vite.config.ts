import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	test: {
		globals: true, // describe, it, expect などを使えるようにする (推奨)
		environment: "jsdom", // または 'happy-dom'
		setupFiles: ["./setupTests.ts"], //  @testing-library/jest-dom を import するファイルを追加
		// exclude: [...configDefaults.exclude, 'e2e/*'], //  exclude フォルダを指定
		root: fileURLToPath(new URL("./", import.meta.url)),
	},
});
