import BaseView from "./baseView.js";

class LanguageView extends BaseView {
  _parentElement = document.querySelector(".languages");

  _generateMarkup() {
    return this._generateName().concat(this._createBlockMarkup());
  }

  _generateName() {
    return `
            <h3 class="heading-3 py-2" data-1ng="languages">${this._data.name}</h3>
        `;
  }

  _createBlockMarkup() {
    return this._data.items.map((item) => this._generateItems(item)).join("");
  }

  _generateItems(itemData) {
    return `
          <p class="languages-item">${itemData}</p>  
        `;
  }
}

export default new LanguageView();
