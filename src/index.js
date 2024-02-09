function generatePoem(event) {
  event.preventDefault();

  var poem = document.getElementById("poem");

  var typewriter = new Typewriter(poem, {
    loop: false,
    delay: 75,
  });
  console.log(poem);
  typewriter
    .pauseFor(2500)
    .typeString("Generating poem ...")
    .pauseFor(300)
    .deleteChars(19)
    .typeString(
      "Sometimes, when the light strikes at odd angle <br/> and pulls you back into childhood <br/>and you are passing a crumbling mansion <br/>completely hidden behind old willows"
    )

    .pauseFor(1000)
    .start();
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
