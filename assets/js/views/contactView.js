import BaseView from "./baseView.js";

class ContactView extends BaseView {
  _parentElement = document.querySelector(".contact");

  _generateMarkup() {
    return `
          <h3 class="contact__title">${this._data.name}</h3>
            <p class="contact__phone tab-right-1">
              <img src="./assets/images/phone.svg" alt="Phone number" />${this._data.phone}
            </p>
            <p class="contact__email tab-right-1">
              <img src="./assets/images/email.svg" alt="E-mail address" />
            ${this._data.email}
            </p>
            <p class="contact__address tab-right-1">
              <img src="./assets/images/home.svg" alt="Address" />
            ${this._data.address}
            </p>
            <p class="contact__web tab-right-1">
              <img src="./assets/images/web.svg" alt="Web site" />
            ${this._data.web}
            </p>`;
  }
}

export default new ContactView();
