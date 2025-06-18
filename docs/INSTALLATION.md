# Installation Guide

This guide covers several ways to install **Obsidian Feeds**.

---

## 1. Community-Plugin Store (coming soon)
When the plugin is approved:
1. Open **Settings → Community plugins** in Obsidian.
2. Click **Browse** and search for "Feeds".
3. Press **Install** and then **Enable**.

---

## 2. BRAT (development builds)
While waiting for the store release you can install the latest development build with [BRAT](https://github.com/TfTHacker/obsidian42-brat):
1. Install BRAT from Community plugins.
2. Run **BRAT → Add a beta plugin for testing**.
3. Enter the GitHub repo URL:
   ```
   https://github.com/lukemt/obsidian-feeds
   ```
4. BRAT will clone and link the repo; enable **Feeds** afterwards.

---

## 3. Manual / Local Build
This is useful when you are hacking on the source or need a bleeding-edge version.

### Prerequisites
* Node.js ≥16 and **Yarn**
* A local copy of this repository
* Your Obsidian vault path

### Steps
```bash
# 1) clone & enter
git clone https://github.com/lukemt/obsidian-feeds.git
cd obsidian-feeds

# 2) build and deploy
OBSIDIAN_PLUGIN_DEST="/absolute/path/to/your/vault/.obsidian/plugins" \
  yarn install
```
What happens:
1. `yarn install` runs the `install` script defined in `package.json`.
2. The build process creates `main.js`, `styles.css`, `manifest.json`.
3. `scripts/install.js` copies those files into
   `$OBSIDIAN_PLUGIN_DEST/obsidian-feeds/`.

> **Tip:** Add the environment variable to your shell profile for quicker rebuilds:
> ```bash
> export OBSIDIAN_PLUGIN_DEST="$HOME/Dropbox/Notes/.obsidian/plugins"
> ```

### Updating
After editing source code:
```bash
yarn dev      # in one terminal – watches & rebuilds on change
# OR
yarn build && node scripts/install.js   # single rebuild
```
Then switch back to Obsidian and reload plugins (or disable/enable **Feeds**).

---

## Troubleshooting
* **"Missing OBSIDIAN_PLUGIN_DEST"** – set the variable to your vault's `.obsidian/plugins` directory.
* **Plugin doesn't appear** – confirm the destination path and that Obsidian trusts community plugins.
* **Old code still running** – reload Obsidian or toggle the plugin off/on after copying files. 