import BaseView from "./baseView.js";

class HeaderView extends BaseView {
  _parentElement = document.querySelector(".objective");

  _generateMarkup() {
    return `<h4 class="heading-4">
            ${this._data.objective}
          </h4>`;
  }
}

export default new HeaderView();
