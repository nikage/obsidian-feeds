#!/usr/bin/env node
/*
 * Copy the built Obsidian-Feeds plugin into a local vault.
 *
 * Usage:
 *   OBSIDIAN_PLUGIN_DEST="/absolute/path/to/your/vault/.obsidian/plugins" yarn install
 *
 * If the OBSIDIAN_PLUGIN_DEST environment variable is missing, the script exits with an error.
 */
import { copyFileSync, mkdirSync, existsSync } from "fs";
import path from "path";
import process from "process";

const destRoot = process.env.OBSIDIAN_PLUGIN_DEST;
if (!destRoot) {
  console.error(
    "[obsidian-feeds] Missing OBSIDIAN_PLUGIN_DEST environment variable. " +
      "Set it to your vault's .obsidian/plugins directory and re-run.\n" +
      "Example:\n  OBSIDIAN_PLUGIN_DEST=\"$HOME/Library/Mobile Documents/com~apple~CloudDocs/Obsidian/.obsidian/plugins\" yarn install",
  );
  process.exit(1);
}

const pluginDir = path.join(destRoot, "obsidian-feeds");
if (!existsSync(pluginDir)) {
  mkdirSync(pluginDir, { recursive: true });
}

["main.js", "manifest.json", "styles.css"].forEach(file => {
  copyFileSync(path.join(process.cwd(), file), path.join(pluginDir, file));
});

console.log(`[obsidian-feeds] Plugin files copied to ${pluginDir}`); 