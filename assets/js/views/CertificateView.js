import BaseView from "./baseView.js";

class CertificateView extends BaseView {
  _parentElement = document.querySelector(".certificate");

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
            <h4 class="text-normal">${itemData.name}</h4>
            <h4 class="text-normal">${itemData.valid}</h4>
          </div>
        </div>
      `;
  }
}

export default new CertificateView();
