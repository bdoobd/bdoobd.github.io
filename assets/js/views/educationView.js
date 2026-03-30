import BaseView from "./baseView.js";

class EducationView extends BaseView {
  _parentElement = document.querySelector(".education");

  _generateMarkup() {
    return this._generateName().concat(this._createBlockMarkup());
  }

  _createBlockMarkup() {
    return this._data.items.map((item) => this._generateItems(item)).join("");
  }

  _generateItems(itemData) {
    return `
      <div class="education__item tab-right-1">
        <p class="education__year">${itemData.years}</p>
        <h5 class="education__course">${itemData.nameOfCourse}</h5>
        <p class="education__specs">${itemData.specs}</p>
        <p class="education__school">${itemData.nameOfSchool}</p>
      </div>
    `;
  }

  _generateName() {
    return `
    <h3 class="education__title">${this._data.name}</h3>
    `;
  }
}

export default new EducationView();
