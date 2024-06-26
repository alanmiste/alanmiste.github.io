document.addEventListener("DOMContentLoaded", () => {
  const languageButtons = document.querySelectorAll(
    ".language-switcher button"
  );
  const contentElements = document.querySelectorAll("[data-translate-key]");

  const loadLanguage = (lang) => {
    fetch(`./assets/json/${lang}.json`)
      .then((response) => response.json())
      .then((data) => {
        contentElements.forEach((element) => {
          const key = element.getAttribute("data-translate-key");
          if (data[key]) {
            element.innerHTML = data[key];
          }
        });
        localStorage.setItem("language", lang); // Save the selected language
      })
      .catch((error) => console.error("Error loading language file:", error));
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.getAttribute("data-lang");
      loadLanguage(lang);
    });
  });

  const savedLanguage = localStorage.getItem("language") || "de";
  loadLanguage(savedLanguage);
});
