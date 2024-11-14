import loadComponent from "/src/helpers/loadComponent.js";
import { smoothScroll } from "/src/helpers/smoothScroll.js";
import { url } from "/src/helpers/urlConfig.js";

export async function main() {
  // Tunggu hingga halaman selesai dimuat
  document.addEventListener("DOMContentLoaded", async () => {
    try {
      // Memuat semua komponen menggunakan Promise.all
      await Promise.all([
        loadComponent("header.topbar", url.components.topbar + "topbar.html"),
        loadComponent("aside.sidebar", url.components.sidebar + "sidebar.html"),
        loadComponent(
          ".dashboard .content",
          url.pages.dashboard + "content/content.html"
        ),
        loadComponent("footer.footer", url.components.footer + "footer.html"),
      ]);

      // Memastikan smooth scroll dijalankan setelah semua komponen terload
      smoothScroll();
    } catch (error) {
      console.error("Error loading components:", error);
    }
  });
}
