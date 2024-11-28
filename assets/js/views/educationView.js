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
      <div class="education-item">
        <p class="print-bold">${itemData.years}</p>
        <h5 class="heading-5">${itemData.nameOfCourse}</h5>
        <p class="heading-6">${itemData.specs}</p>
        <p>${itemData.nameOfSchool}</p>
      </div>
    `;
  }

  _generateName() {
    return `
    <h3 class="heading-3 py-2">${this._data.name}</h3>
    `;
  }
}

export default new EducationView();
