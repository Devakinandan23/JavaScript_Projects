const projects = [
  {
    title: "Guess the Number Game",
    description:
      "Guess the Number Game is a web-based project where players try to guess a random number.",
    link: "./Guess the number game/index.html",
    image: "./images/Number-Guessing-Game-01.png",
  },
  {
    title: "Model_Boxs",
    description:
      "Model_Boxs is a web project focused on modeling boxes in a 3D space.",
    link: "./Model_Boxs/index.html",
    image: "./images/2459100_87b1_6.png",
  },
  {
    title: "Pig-Game",
    description:
      "Pig-Game is a web-based game where players roll dice to score points and avoid rolling a '1'.",
    link: "./Pig-Game/index.html",
    image: "./images/261966753-14ee9bbd-716e-49a8-bb85-b52b82dd685e.png",
  },
  {
    title: "Weather Application",
    description:
      "Weather Application is a web app that provides users with real-time weather information for a specified location.",
    link: "./Weather Application/index.html",
    image: "./images/maxresdefault.png",
  },
  {
    title: "BMI Calculation",
    description:
      "BMI Calculation is another web-based project that helps users calculate their Body Mass Index.",
    link: "./BMI calculation/index.html",
    image: "./images/bmi-calc-01.png",
  },
  {
    title: "Password Generator",
    description: ,
    link: "https://devakinandan23.github.io/JavaScript_Projects/Password%20Generator%20Project/index.html",
    image: "data:image/png;base64,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.png"
  },
];

// You can access the projects array to display the project details on your website.
const cards = document.getElementsByClassName("cards");

function createCard(title, discription, link, image) {
  const li = document.createElement("li");
  li.classList.add("cards__item");
  const div1 = document.createElement("div");
  div1.classList.add("card");

  img = document.createElement("img");
  img.classList.add("card__image");
  img.src = image;

  const div0 = document.createElement("div");
  div0.classList.add("card__content");

  const div = document.createElement("div");
  div.classList.add("card__title");
  div.innerHTML = title;
  div0.appendChild(div);

  const p = document.createElement("p");
  p.classList.add("card__text");
  p.innerHTML = discription;
  div0.appendChild(p);

  const a = document.createElement("a");
  a.classList.add("card__btn");
  a.classList.add("btn--block");
  a.classList.add("btn");
  a.href = link;
  a.target = "_blank";
  a.innerHTML = "DEMO";
  div0.appendChild(a);

  div1.appendChild(img);
  div1.appendChild(div0);
  li.appendChild(div1);
  cards[0].appendChild(li);
}
projects.map((e) => {
  createCard(e.title, e.discription, e.link, e.image);
});
