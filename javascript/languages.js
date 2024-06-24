document.addEventListener("DOMContentLoaded", () => {
  const languageButtons = document.querySelectorAll(
    ".language-switcher button"
  );

  const contentElements = {
    lanHome: "home",
    lanAbout: "about",
    lanProjects: "projects",
    lanContact: "contact",
  };

  const loadLanguage = (lang) => {
    fetch(`./assets/json/${lang}.json`)
      .then((response) => response.json())
      .then((data) => {
        for (const [id, key] of Object.entries(contentElements)) {
          const element = document.getElementById(id);
          if (element) {
            element.textContent = data[key];
          }
        }
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

// languageButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const lang = button.getAttribute("data-lang");
//     fetch(`./assets/json/${lang}.json`)
//       .then((response) => response.json())
//       .then((data) => {
//         content.home.textContent = data.home;
//         content.about.textContent = data.about;
//         content.projects.textContent = data.projects;
//         content.contact.textContent = data.contact;
//       })
//       .catch((error) => console.error("Error loading language file:", error));
//   });
// });
