const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
	transpileDependencies: true,
	outputDir: "./src/vue",
	publicPath: "/fresh-choice"
});
