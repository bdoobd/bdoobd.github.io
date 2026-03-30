import BaseView from "./baseView.js";

class ProfileView extends BaseView {
  _parentElement = document.querySelector(".profile");

  _generateMarkup() {
    return `
    <h3 class="profile__title">${this._data.name}</h3>
        <p class="tab-right-1">
          ${this._data.text}
        </p>`;
  }
}

export default new ProfileView();
