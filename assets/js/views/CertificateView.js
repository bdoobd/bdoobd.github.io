import BaseView from "./baseView.js";

class CertificateView extends BaseView {
  _parentElement = document.querySelector(".certificate");

  _generateMarkup() {
    return this._generateName().concat(this._createBlockMarkup());
  }

  _generateName() {
    return `
        <h3 class="certificate__title">${this._data.name}</h3>
      `;
  }

  _createBlockMarkup() {
    return this._data.items.map((item) => this._generateItems(item)).join("");
  }

  _generateItems(itemData) {
    return `
        <div class="certificate__card tab-right-1">
          <dl class="certificate__card__item">
            <dt class="certificate__card__name">${itemData.name}</dt>
            <dd class="certificate__card__valid">${itemData.valid}</dd>
          </dl>
        </div>
      `;
  }
}

export default new CertificateView();
