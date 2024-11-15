import { folderPath } from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js";

// Deteksi apakah di-host di GitHub Pages
const isGithubPages = window.location.hostname.includes("github.io");
const repoName = "makanaear.github.io"; // Sesuaikan dengan nama repo Anda

// Tentukan `croot` berdasarkan hosting di GitHub Pages
export const croot = isGithubPages ? `/${repoName}/src/` : folderPath() + "src/";

// Periksa hasil dari croot
console.log("Base Path:", croot);

export const folder = {
  components: croot + "components/",
  pages: croot + "pages/",
  helpers: croot + "helpers/",
};

export const url = {
  components: {
    topbar: folder.components + "topbar/",
    sidebar: folder.components + "sidebar/",
    footer: folder.components + "footer/",
  },
  pages: {
    dashboard: folder.pages + "dashboard/",
  },
};
