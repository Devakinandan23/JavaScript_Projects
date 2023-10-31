const projects = [
  {
    title: "Guess the Number Game",
    description:
      "Guess the Number Game is a web-based project where players try to guess a random number.",
    link: "./Guess the number game/index.html",
    image:
      "https://codingartistweb.com/wp-content/uploads/2023/05/Number-Guessing-Game-01.png",
  },
  {
    title: "Model_Boxs",
    description:
      "Model_Boxs is a web project focused on modeling boxes in a 3D space.",
    link: "./Model_Boxs/index.html",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.udemy.com%2Fcourse%2Fjavascript-course-for-beginner-to-expert-data-visualization%2F&psig=AOvVaw0gNu2uCTp2qDVNVqIKoCZW&ust=1698856737636000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPi23NTcoIIDFQAAAAAdAAAAABAE.png",
  },
  {
    title: "Pig-Game",
    description:
      "Pig-Game is a web-based game where players roll dice to score points and avoid rolling a '1'.",
    link: "./Pig-Game/index.html",
    image:
      "https://user-images.githubusercontent.com/85943633/261966753-14ee9bbd-716e-49a8-bb85-b52b82dd685e.png",
  },
  {
    title: "Weather Application",
    description:
      "Weather Application is a web app that provides users with real-time weather information for a specified location.",
    link: "./Weather Application/index.html",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcodingartistweb.com%2F2022%2F07%2Fweather-app-with-javascript%2F&psig=AOvVaw2gRx7pktSfmDqUzeJsLJoE&ust=1698856804099000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJius_TcoIIDFQAAAAAdAAAAABAE.png",
  },
  {
    title: "BMI Calculation",
    description:
      "BMI Calculation is another web-based project that helps users calculate their Body Mass Index.",
    link: "./BMI Calculation/index.html",
    image:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcodingartistweb.com%2Fwp-content%2Fuploads%2F2021%2F02%2Fbmi-calc-01.png&tbnid=OKMFsHT2D2FHhM&vet=12ahUKEwiu8bea3aCCAxVUzaACHQ3sDcsQMygCegQIARBS..i&imgrefurl=https%3A%2F%2Fcodingartistweb.com%2F2021%2F02%2Fbmi-calculator-javascript-step-by-step-javascript-project%2F&docid=UOy5Nrp246mxBM&w=1280&h=720&q=BMI%20javascript%20images&client=firefox-b-d&ved=2ahUKEwiu8bea3aCCAxVUzaACHQ3sDcsQMygCegQIARBS.png",
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
