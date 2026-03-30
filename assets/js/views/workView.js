import BaseView from "./baseView.js";

class WorkView extends BaseView {
  _parentElement = document.querySelector(".work");

  _generateMarkup() {
    return this._generateName().concat(this._createBlockMarkup());
  }

  _generateName() {
    return `
        <h3 class="work__title">${this._data.name}</h3>
      `;
  }

  _createBlockMarkup() {
    return this._data.items.map((item) => this._generateItems(item)).join("");
  }

  _generateItems(itemData) {
    return `
        <div class="work__card tab-right-1">
          <div class="work__card__header">
            <h4 class="work__card__company">${itemData.companyName}</h4>
            <h5 class="work__card__date">${itemData.workingYears}</h5>
          </div>
          <h5 class="work__card__position">${itemData.position}</h5>
          <ul class="work__card__list">
            ${this._generateList(itemData.specs)}
          </ul>
        </div>
      `;
  }

  _generateList(listData) {
    return listData
      .map((item) => `<li class="work__card__item">${item}</li>`)
      .join("");
  }
}

export default new WorkView();
