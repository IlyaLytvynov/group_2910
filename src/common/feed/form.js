export class Form {
  constructor(mp, onSubmit) {
    this._mountPoint = mp;
    this.onSubmit = onSubmit;
    this.render();
  }

  submitHandler() {
    const title = this.titleInput.value;
    const img = this.imgUrlInput.value;
    const content = this.contentInput.value;
    this.onSubmit({ title, img, content });
  }

  render() {
    this.form = document.createElement("form");
    this.titleInput = document.createElement("input");
    this.imgUrlInput = document.createElement("input");
    this.contentInput = document.createElement("textarea");
    this.btn = document.createElement("button");
    this.btn.textContent = "ADD";

    this.form.addEventListener("submit", e => {
      e.preventDefault();
      this.submitHandler();
    });

    this.form.appendChild(this.titleInput);
    this.form.appendChild(this.imgUrlInput);
    this.form.appendChild(this.contentInput);
    this.form.appendChild(this.btn);
    this._mountPoint.appendChild(this.form);
  }
}
