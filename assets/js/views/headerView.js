import BaseView from "./baseView.js";

class HeaderView extends BaseView {
  _parentElement = document.querySelector(".header_title__objective");

  _generateMarkup() {
    return `${this._data.objective}`;
  }

  addLanguageHandler(handler) {
    const langPreferences = document.querySelector(".header__title__lang");
    langPreferences.addEventListener("click", (e) => {
      e.preventDefault();
      handler(e);
    });
  }
}

export default new HeaderView();
