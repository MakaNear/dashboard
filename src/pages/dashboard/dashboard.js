import loadComponent from "../../helpers/loadComponent.js";
import { smoothScroll } from "../../helpers/smoothScroll.js";
import { url } from "../../helpers/urlConfig.js";
import sidebarTogle from "../../components/sidebar/sidebar.js";
import FetchProfileTopbar from "../../components/topbar/profile.js";
import Cookies from "https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.mjs";

export async function main() {
  const token = Cookies.get('login');
  if (!token) {
    window.location.href = "https://makanear.github.io/login";
    return;
  }
  const promises = [
    loadComponent("header.topbar", url.components.topbar + "topbar.html"),
    loadComponent("aside.sidebar", url.components.sidebar + "sidebar.html"),
    loadComponent(
      "main.dashboard section.content",
      url.pages.dashboard + "content/content.html"
    ),
  ];

  Promise.all(promises)
    .then(() => {
      smoothScroll();
      console.log(url.components.topbar + "topbar.html");
      console.log(url.components.sidebar + "sidebar.html");
      console.log(url.pages.dashboard + "content/content.html");
      sidebarTogle();
      FetchProfileTopbar();
    })
    .catch((error) => {
      console.error("Error loading components:", error);
    });
}
