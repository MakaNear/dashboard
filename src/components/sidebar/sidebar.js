export async function navbar() {
  const list = document.querySelectorAll(".navbar .nav .nav-main .links a");

  list.forEach((link) => {
    const href = link.getAttribute("href");

    if (window.location.pathname === "/" && href === "/") {
      link.classList.add("active");
    }
  });

  // ----- Display Logout Button ----- //
  const loginCookie = window.Cookies.get("login"); // Access Cookies from window object
  const logoutButton = document.querySelector(".nav-others .logout");
  const loginButton = document.querySelector(".nav-others .to-login");

  if (logoutButton) {
    if (loginCookie) {
      logoutButton.style.display = "inline-block";
      loginButton.style.display = "none";
    } else {
      logoutButton.style.display = "none";
      loginButton.style.display = "inline-block";
    }

    // ----- Logout ----- //
    logoutButton.addEventListener("click", async (event) => {
      event.preventDefault(); 
      const result = await Swal.fire({
        title: "Logout Confirmation",
        text: "Are you sure you want to log out?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log out!",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        // Remove token or cookie from the header
        try {
          const token = window.Cookies.get("token"); // Assuming token is stored in cookies
          if (token) {
            window.Cookies.remove("token"); // Remove token
          }

          Swal.fire({
            title: "Logged Out!",
            text: "You have successfully logged out.",
            icon: "success",
            showConfirmButton: false,
            timer: 2000, // Show alert for 2 seconds
          }).then(() => {
            window.Cookies.remove("login"); // Remove login cookie
            window.location.href = "/login"; // Redirect to login page
          });
        } catch (error) {
          Swal.fire({
            title: "Error!",
            text: "Failed to log out. Please try again.",
            icon: "error",
            confirmButtonColor: "#d33",
          });
        }
      }
    });
  }
}
