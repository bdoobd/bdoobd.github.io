import BaseView from "./baseView.js";

class EducationView extends BaseView {
  _parentElement = document.querySelector(".education");

  // render(data) {
  //   this._data = data;

  //   const blockTitle = this._generateName();

  //   const itemMarkup = this._data.schools
  //     .map((item) => this._generateItems(item))
  //     .join("");

  //   const educationBlock = `${blockTitle}${itemMarkup}`;

  //   this._clear();
  //   this._parentElement.insertAdjacentHTML("afterbegin", educationBlock);
  // }

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
