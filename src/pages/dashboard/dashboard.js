import loadComponent from "/src/helpers/loadComponent.js";
import { smoothScroll } from "/src/helpers/smoothScroll.js";
import { url } from "/src/helpers/urlConfig.js";

export async function main() {
  const promises = [
    loadComponent(".dashboard .topbar", url.components.topbar + "topbar.html"),
    loadComponent(".dashboard .sidebar", url.components.sidebar + "sidebar.html"),
    loadComponent(".dashboard .content", url.pages.dashboard + "content/content.html"),
    loadComponent(".dashboard .footer", url.components.footer + "footer.html"),
  ];

  Promise.all(promises)
    .then(() => {
      smoothScroll();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}