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
    let skills_string = [];
    for (const [key, value] of Object.entries(this._data.items)) {
      skills_string.push(this._generateItems(key, value));
    }

    return skills_string.join("");
  }

  _generateItems(key, value) {
    return `
      <p class="skills-item">${key}</p>
      ${value != 0 ? `<progress value="${value}" max="1"></progress>` : ""}`;
  }
}

export default new SkillsView();
