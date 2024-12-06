export default function sidebarTogle() {
  const list = document.querySelectorAll(
    ".app-header .app-header-navigation .submenu a"
  );

  list.forEach((link) => {
    const href = link.getAttribute("href");

    if (window.location.pathname === "/dashboard/" && href === "/dashboard") {
      link.classList.add("active");
    }
  });

  const menuItems = document.querySelectorAll("aside.navigation .menu-item");
  if (menuItems) {
    menuItems.forEach((menu) => {
      menu.addEventListener("click", function (e) {
        const menuName = this.getAttribute("data-menu");

        localStorage.setItem("activeMenu", menuName);
      });
    });
  }

  const activeMenu = localStorage.getItem("activeMenu");
  if (activeMenu) {
    document
      .querySelectorAll(".app-header .app-header-navigation .submenu")
      .forEach((submenu) => {
        submenu.style.display = "none";
      });

    const activeSubmenu = document.querySelector(`.${activeMenu}-submenu`);
    if (activeSubmenu) {
      activeSubmenu.style.display = "flex";
    }
  }

  const logoutButton = document.querySelector(".navigation-nav .logout");

  logoutButton.addEventListener("click", (event) => {
    console.log("Logout button clicked"); 
    
    // event.preventDefault();
    // Swal.fire({
    //   title: "Logout Confirmation",
    //   text: "Are you sure you want to log out?",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, log out!",
    //   cancelButtonText: "Cancel",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire({
    //       title: "Logged Out!",
    //       text: "You have successfully logged out.",
    //       icon: "success",
    //       showConfirmButton: false,
    //       timer: 2000, // Show alert for 2 seconds
    //     }).then(() => {
    //       window.Cookies.remove("login"); // Remove login cookie
    //       window.location.href = "/login"; // Redirect to login page
    //     });
    //   }
    // });
  });
}
