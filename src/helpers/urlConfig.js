import { folderPath } from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js";

// Debug untuk melihat hasil dari folderPath()
console.log("folderPath() result:", folderPath());

export const croot = folderPath() + "src/";
console.log("croot:", croot);

export const folder = {
  components: croot + "components/",
  pages: croot + "pages/",
  helpers: croot + "helpers/",
};

export const url = {
  components: {
    topbar: folder.components + "topbar/",
    sidebar: folder.components + "sidebar/",
    footer: folder.components + "footer/"
  },
  pages: {
    dashboard: folder.pages + "dashboard/",
  },
};
