import BaseView from "./baseView.js";

class HeaderView extends BaseView {
  _parentElement = document.querySelector(".objective");

  _generateMarkup() {
    return `<h4 class="heading-4">
            ${this._data.objective}
          </h4>`;
  }

  addLanguageHandler(handler) {
    const langPreferences = document.querySelector(".lang-preference");
    langPreferences.addEventListener("click", (e) => {
      e.preventDefault();
      handler(e);
    });
  }
}

export default new HeaderView();
