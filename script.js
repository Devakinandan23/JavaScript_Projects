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
    link: "./weather application/index.html",
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
    description: "password generator",
    link: "./Password Generator Project/index.html",
    image: "./images/password_generator.jpg",
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
