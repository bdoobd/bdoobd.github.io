import BaseView from "./baseView.js";

class LanguageView extends BaseView {
  _parentElement = document.querySelector(".languages");

  _generateName() {
    return `
            <h3 class="heading-3 py-2" data-1ng="languages">${this._data.name}</h3>
        `;
  }

  _generateItems(itemData) {
    return `
          <p class="languages-item">${itemData}</p>  
        `;
  }
}

export default new LanguageView();
