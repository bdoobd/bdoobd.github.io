"use strict";

const langFolder = "./assets/lang";

async function getJsonData(language) {
  try {
    const url = `${langFolder}/${language}.json`;
    const response = await fetch(url);
    if (response.status >= 200 && response.status < 400) {
      return await response.json();
    } else {
      console.error(`${response.statusText}: ${response.status} error`);
    }
  } catch (error) {
    console.error(error);
  }
}
function updateLanguage(langData) {
  document.querySelectorAll("[data-1ng]").forEach((element) => {
    const key = element.getAttribute("data-1ng");

    element.innerHTML = langData[key];
  });
}

function setLanguagePreference(language) {
  localStorage.setItem("language", language);
}

async function switchLanguage(language) {
  setLanguagePreference(language);

  const langData = await getJsonData(language);

  updateLanguage(langData);
}

window.addEventListener("DOMContentLoaded", async () => {
  const userPreference = localStorage.getItem("language") || "fi";
  const langData = await getJsonData(userPreference);

  updateLanguage(langData);
});

document.querySelector(".fi").addEventListener("click", (e) => {
  switchLanguage("fi");
});

document.querySelector(".en").addEventListener("click", (e) => {
  switchLanguage("en");
});
