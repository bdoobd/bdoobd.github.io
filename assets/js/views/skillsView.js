import BaseView from "./baseView.js";

class SkillsView extends BaseView {
  _parentElement = document.querySelector(".skills");

  _generateName() {
    return `
      <h3 class="heading-3 py-2" data-1ng="skills">${this._data.name}</h3>
    `;
  }

  _generateItems(itemData) {
    return `
            <p class="skills-item">${itemData}</p>`;
  }
}

export default new SkillsView();
