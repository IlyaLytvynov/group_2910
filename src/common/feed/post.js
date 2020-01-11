import "./post.scss";

export class Post {
  constructor(mp, data) {
    this.mountPoint = mp;
    this.data = data;
    this.render();
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("post");

    this.img = document.createElement("img");
    this.img.src = this.data.img;
    this.likes = document.createElement("div");
    this.likes.classList.add("post__likes");
    this.likes.textContent = this.data.likes;

    this.h2 = document.createElement("h2");
    this.h2.textContent = this.data.title;
    this.wrapper.appendChild(this.img);
    this.wrapper.appendChild(this.h2);
    this.wrapper.appendChild(this.likes);
    this.mountPoint.appendChild(this.wrapper);
  }
}
