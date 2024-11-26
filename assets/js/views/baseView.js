export default class BaseView {
  _data;

  render(data, render = true) {
    if (!data) {
      throw new Error("No language data found");
    }
    this._data = data;

    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderBlock(data) {
    if (!data) {
      throw new Error("Missing language data");
    }

    this._data = data;

    const nameMarkup = this._generateName();
    const itemsMarkup = this._data.items
      .map((item) => this._generateItems(item))
      .join("");

    this._parentElement.insertAdjacentHTML(
      "afterbegin",
      `${nameMarkup}${itemsMarkup}`
    );
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
