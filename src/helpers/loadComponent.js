export default async function loadComponent(selector, url) {
  if (!url || !url.trim()) {
    console.error("Invalid URL:", url);
    return;
  }
  
  const element = document.querySelector(selector);
  if (!element) {
    console.error("Invalid selector:", selector);
    return;
  }

  try {
    console.log(`Loading component from URL: ${url}`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to load file: ${response.status} - ${response.statusText}`);
    }
    const html = await response.text();
    element.innerHTML = html;
  } catch (error) {
    console.error("Error loading component:", error);
  }
}
