import BaseView from "./baseView.js";

class SkillsView extends BaseView {
  _parentElement = document.querySelector(".skills");

  _generateMarkup() {
    return this._generateName().concat(this._createBlockMarkup());
  }

  _generateName() {
    return `
      <h3 class="heading-3 py-2" data-1ng="skills">${this._data.name}</h3>
    `;
  }

  _createBlockMarkup() {
    return this._data.items.map((item) => this._generateItems(item)).join("");
  }

  _generateItems(itemData) {
    return `
      <p class="skills-item">${itemData}</p>`;
  }
}

export default new SkillsView();
