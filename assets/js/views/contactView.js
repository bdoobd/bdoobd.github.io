import BaseView from "./baseView.js";

class ContactView extends BaseView {
  _parentElement = document.querySelector(".contact");

  _generateMarkup() {
    return `
          <h3 class="heading-3 py-2">${this._data.name}</h3>
          <p class="phone">
            <img src="./assets/images/phone-light.png" alt="Phone number" />${this._data.phone}
          </p>
          <p class="email">
            <img src="./assets/images/email-light.png" alt="E-mail address" />
            ${this._data.email}
          </p>
          <p class="address">
            <img src="./assets/images/home-light.png" alt="Address" />
            ${this._data.address}
          </p>
          <p class="web">
            <img src="./assets/images/web-light.png" alt="Web site" />
            ${this._data.web}
          </p>`;
  }
}

export default new ContactView();
