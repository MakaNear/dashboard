import { folderPath } from "https://cdn.jsdelivr.net/gh/jscroot/url@0.0.9/croot.js";

const isGithubPages = window.location.hostname.includes("github.io");
const repoName = "dashboard"; // Ganti dengan nama repositori Anda

// Sesuaikan jalur jika di-host pada GitHub Pages
export const croot = folderPath() + (isGithubPages ? `${repoName}/src/` : "src/");

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
