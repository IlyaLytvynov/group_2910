import "./feed.scss";
import { Loader } from "../loader";
import { Form } from "./form";
import { Post } from "./post";

class Feed {
  constructor(mountPoint = document.querySelector("body")) {
    this.mountPoint = mountPoint;
    this.posts = [];
    this.init();
  }

  init() {
    this.render();
    this.fetchPosts();
  }

  render() {
    this.wrapper = document.createElement("div");
    this.content = document.createElement("div");
    this.content.classList.add("feed__contet");
    this.wrapper.classList.add("feed");
    new Form(this.wrapper, data => this.sendPost(data));

    this.loader = new Loader(this.content);
    this.wrapper.appendChild(this.content);
    this.mountPoint.appendChild(this.wrapper);
  }

  renderPosts() {
    this.content.innerHTML = "";
    this.posts.forEach(post => this.renderPost(post));
  }

  renderPost(post) {
    new Post(this.content, post);
  }

  fetchPosts() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/posts");
    console.log("Before");
    xhr.send();
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("LOADED");
        this.posts = JSON.parse(xhr.response);
        console.log(this.posts);
        this.renderPosts();
      }
    };
  }

  sendPost(data) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/posts");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        console.log("LOADED");
        console.log(xhr.response);
        const post = JSON.parse(xhr.response);
        this.renderPost(post);
      }
    };
  }
}

export { Feed };
