import BaseView from "./baseView.js";

class ProfileView extends BaseView {
  _parentElement = document.querySelector(".profile");

  _generateMarkup() {
    return `
    <h3 class="heading-3 py-2"">${this._data.name}</h3>
        <p>
          ${this._data.text}
        </p>`;
  }
}

export default new ProfileView();
