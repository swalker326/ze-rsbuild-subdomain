import { defineConfig, RsbuildPlugin } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { withZephyr } from "zephyr-rspack-plugin";

const zephyrRsbuildPlugin = (): RsbuildPlugin => ({
  name: "zephyr-rsbuild-plugin",
  setup(api) {
    api.modifyRspackConfig(async (config, utils) => {
      config = await withZephyr()(config);
    });
  },
  pre: ["RsbuildCorePlugin", "RsbuildHtmlPlugin", "DefinePlugin"]
});

export default defineConfig({
  plugins: [pluginReact(), zephyrRsbuildPlugin()]
});
