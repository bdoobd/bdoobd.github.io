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
    let lang_stings = [];
    for (const [key, value] of Object.entries(this._data.items)) {
      lang_stings.push(this._generateItems(value, key));
    }

    return lang_stings.join("");
  }

  _generateItems(key, value) {
    return `
          <p class="languages-item">${value}</p> 
          <progress value='${key}' max='1'></progress> 
        `;
  }
}

export default new LanguageView();
