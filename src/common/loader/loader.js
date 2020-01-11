import "./loader.scss";

export class Loader {
  constructor(mp) {
    this.mountPoint = mp;
    this.render();
  }

  render() {
    this.mountPoint.innerHTML = `
      <div class="loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>`;
  }
}
