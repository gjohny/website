function toggleStyleSheet() {
  // Task 1
  // Steps
  // 1 (a) Get style element by ID (hint: getElementById)
  old_style = document.getElementById("stylesheet");

  // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
  curr = old_style.getAttribute("href");

  // 1 (c) Determine new stylesheet file name
  new_style = curr === "style_two.css" ? "style.css" : "style_two.css";

  // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
  old_style.setAttribute("href", new_style);

  // TASK 2
  // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
  // hint: localStorage.setItem(name, value)
  saved = localStorage.setItem("href", new_style);
}

window.onload = function () {
  // TASK 2
  // TODO: Make the last div color persist even when someone refreshes the page.

  // Steps
  // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
  saved = localStorage.getItem("href");

  if (!saved) {
    saved = "style.css";
    localStorage.setItem("href", saved);
    return;
  }

  // 2 (b) get html style element by ID
  elem = document.getElementById("stylesheet");

  // 2 (c) replace href attribute of html element.
  elem.setAttribute("href", saved);
};

document.querySelectorAll(".scroll-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default jump behavior
    const targetId = this.getAttribute("href").substring(1); // Remove '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center", // Centers the section in the viewport
      });
    }
  });
});
