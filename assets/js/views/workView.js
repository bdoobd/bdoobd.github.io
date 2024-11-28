import BaseView from "./baseView.js";

class WorkView extends BaseView {
  _parentElement = document.querySelector(".work");

  _generateMarkup() {
    return this._generateName().concat(this._createBlockMarkup());
  }

  _generateName() {
    return `
        <h3 class="heading-3 pe-2">${this._data.name}</h3>
      `;
  }

  _createBlockMarkup() {
    return this._data.items.map((item) => this._generateItems(item)).join("");
  }

  _generateItems(itemData) {
    return `
        <div class="work-card">
          <div class="work-card-header">
            <h4 class="heading-4">${itemData.companyName}</h4>
            <h5 class="heading-5">${itemData.workingYears}</h5>
          </div>
          <h5 class="heading-5">${itemData.position}</h5>
          <ul>
            ${this._generateList(itemData.specs)}
          </ul>
        </div>
      `;
  }

  _generateList(listData) {
    return listData.map((item) => `<li>${item}</li>`).join("");
  }
}

export default new WorkView();
