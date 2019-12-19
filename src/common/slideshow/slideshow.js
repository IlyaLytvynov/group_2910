import "./slideshow.scss";

const images = [
  {
    title: "Fantastic beasts and where to find them",
    description:
      "Fantastic Beasts and Where to Find Them is a 2016 fantasy film directed by David Yates. A joint British and American production, it is a spin-off and prequel to the Harry Potter film series, and is produced and written by J. K. Rowling in her screenwriting debut, inspired by her 2001 guide book of the same name. The film features an ensemble cast that includes Eddie Redmayne, Katherine Waterston, Dan Fogler, Alison Sudol, Ezra Miller, Samantha Morton, Jon Voight, Carmen Ejogo, and Colin Farrell. It is the first installment in the Fantastic Beasts film series, and ninth overall in the Wizarding World franchise, that began with the Harry Potter films.",
    rating: "4.7",
    preview: {
      high:
        "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199507/movies/bitmap_2x_qt5gqd.jpg",
      low:
        "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199506/movies/bitmap_wixqtd.jpg"
    },
    genre: "fantasy"
  },
  {
    title: "Justice League",
    description:
      "ustice League is a 2017 American superhero film based on the DC Comics superhero team of the same name, distributed by Warner Bros. Pictures. It is the follow-up to 2016's Batman v Superman: Dawn of Justice and the fifth installment in the DC Extended Universe (DCEU).[5][6][7] The film is directed by Zack Snyder, written by Chris Terrio and Joss Whedon, and features an ensemble cast that includes Ben Affleck, Henry Cavill, Gal Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Amy Adams, Jeremy Irons, Diane Lane, Connie Nielsen, and J. K. Simmons. In the film, Batman and Wonder Woman recruit The Flash, Aquaman, and Cyborg after Superman's death to save the world from the catastrophic threat of Steppenwolf and his army of Parademons.",
    rating: "2.4",
    preview: {
      low:
        "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199102/movies/bitmap_qm5atv.jpg",
      high:
        "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199121/movies/bitmap_2x_rczowy.jpg"
    },
    genre: "comics"
  },
  {
    title: "Beauty and the beast",
    description: "",
    rating: "3.1",
    preview: {
      low:
        "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574198944/movies/bitmap_ocrjt9.jpg",
      high:
        "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574198977/movies/bitmap_2x_n5bkmr.jpg"
    },
    genre: "fairytail"
  },
  {
    title: "Beauty and the beast",
    description: "",
    rating: "3.9",
    preview: {
      low:
        "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574198944/movies/bitmap_ocrjt9.jpg",
      high:
        "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574198977/movies/bitmap_2x_n5bkmr.jpg"
    },
    genre: "fairytail"
  },
  {
    title: "Justice League",
    description:
      "ustice League is a 2017 American superhero film based on the DC Comics superhero team of the same name, distributed by Warner Bros. Pictures. It is the follow-up to 2016's Batman v Superman: Dawn of Justice and the fifth installment in the DC Extended Universe (DCEU).[5][6][7] The film is directed by Zack Snyder, written by Chris Terrio and Joss Whedon, and features an ensemble cast that includes Ben Affleck, Henry Cavill, Gal Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Amy Adams, Jeremy Irons, Diane Lane, Connie Nielsen, and J. K. Simmons. In the film, Batman and Wonder Woman recruit The Flash, Aquaman, and Cyborg after Superman's death to save the world from the catastrophic threat of Steppenwolf and his army of Parademons.",
    rating: "3.3",
    preview: {
      low:
        "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199102/movies/bitmap_qm5atv.jpg",
      high:
        "https://res.cloudinary.com/dx4wkpab8/image/upload/v1574199121/movies/bitmap_2x_rczowy.jpg"
    },
    genre: "comics"
  }
];

const renderSlide = (item, i) => {
  let expand = false;
  const slide = document.createElement("div");
  const label = document.createElement("div");
  const description = document.createElement("p");
  label.textContent = item.rating;
  label.classList.add("slide__rating");

  description.innerHTML = showText();
  description.classList.add("slide__description");

  slide.classList.add("slide");
  slide.style.transform = `translateX(-${i * 100}%)`;

  const img = document.createElement("img");
  img.src = item.preview.high;
  img.classList.add("slide__image");

  slide.appendChild(img);
  slide.appendChild(label);
  slide.appendChild(description);

  function showText() {
    return `<b>${item.description.slice(0, 20)}</b>${
      expand ? item.description.slice(20) : "..."
    }`;
  }

  function toggleExpand() {
    expand = !expand;
    description.innerHTML = showText();
  }

  description.addEventListener("click", toggleExpand);

  return slide;
};

const renderSlides = mountPoint => {
  const slides = [];

  images.forEach((item, i) => {
    const slide = renderSlide(item, i);
    slides.push(slide);
    mountPoint.appendChild(slide);
  });

  return slides;
};

const renderControl = () => {
  const control = document.createElement("button");
  control.classList.add("control");

  return control;
};

const renderContainer = () => {
  const container = document.createElement("div");
  container.classList.add("slideshow");
  return container;
};

export const slideShow = mountPoint => {
  let activeSlideIndex = 0;

  const container = renderContainer();
  const slides = renderSlides(container);
  const next = renderControl();
  const prev = renderControl();
  let intervalId;
  window.next = next;
  window.prev = prev;
  setActive();

  function startInterval() {
    intervalId = setInterval(() => {
      nextSlide();
    }, 2000);
  }

  function setActive() {
    slides[activeSlideIndex].classList.add("active");
  }

  function toggleOff() {
    slides[activeSlideIndex].classList.remove("active");
  }

  function nextSlide() {
    toggleOff();
    if (activeSlideIndex + 1 < slides.length) {
      activeSlideIndex += 1;
    } else {
      activeSlideIndex = 0;
    }
    setActive();
  }

  function prevSlide() {
    toggleOff();
    if (activeSlideIndex - 1 >= 0) {
      activeSlideIndex -= 1;
    } else {
      activeSlideIndex = slides.length - 1;
    }

    setActive();
  }

  function handleEvents() {
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);

    container.addEventListener("mouseenter", () => {
      clearInterval(intervalId);
    });

    container.addEventListener("mouseleave", () => {
      startInterval();
    });
  }

  function render() {
    container.appendChild(prev);
    container.appendChild(next);
    mountPoint.appendChild(container);
  }

  function init() {
    handleEvents();
    render();
    startInterval();
  }

  init();
};
