import loadComponent from "../../helpers/loadComponent.js";
import { smoothScroll } from "../../helpers/smoothScroll.js";
import { url } from "../../helpers/urlConfig.js";
import sidebarTogle from "../../components/sidebar/sidebar.js";
import FetchProfileTopbar from "../../components/topbar/profile.js";

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

async function validateToken(token) {
  try {
    const response = await fetch("/api/validate-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    if (response.ok) {
      const result = await response.json();
      return result.valid; // Server should return { valid: true } if the token is valid
    } else {
      console.error("Token validation failed:", response.statusText);
      return false;
    }
  } catch (error) {
    console.error("Error validating token:", error);
    return false;
  }
}
export async function main() {

  const token = getCookie("token");
  if (!token) {
    window.location.href = "/login";
    return;
  }

  const isValidToken = await validateToken(token);
  if (!isValidToken) {
    window.location.href = "/dashboard";
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
