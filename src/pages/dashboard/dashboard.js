import loadComponent from "../../helpers/loadComponent.js";
import { smoothScroll } from "../../helpers/smoothScroll.js";
import { url } from "../../helpers/urlConfig.js";

export async function main() {
  const promises = [
    loadComponent("header.topbar", url.components.topbar + "topbar.html"),
    loadComponent("aside.sidebar", url.components.sidebar + "sidebar.html"),
    loadComponent(".dashboard .content", url.pages.dashboard + "content/content.html"),
    loadComponent("footer.footer", url.components.footer + "footer.html"),
  ];

  Promise.all(promises)
    .then(() => smoothScroll())
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}
