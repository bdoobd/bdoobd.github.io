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

  _clear() {
    this._parentElement.innerHTML = "";
  }
}
