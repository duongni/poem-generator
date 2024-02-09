function displayPoem(response) {
  if (response.data && response.data.answer) {
    var poem = document.getElementById("poem");

    var typewriter = new Typewriter(poem, {
      loop: false,
      delay: 75,
    });

    typewriter
      .pauseFor(100)
      .typeString("Generating poem ...")
      .pauseFor(300)
      .deleteChars(19)
      .typeString(`${response.data.answer}`)

      .pauseFor(1000)
      .start();
  } else {
    console.log("Failed to generate poem: Invalid response format");
  }
}

function generatePoem(event) {
  event.preventDefault();

  let prompt = document.querySelector("#prompt");
  let context =
    "You are a Vietnamese romantic poet expert, create a 4-6 lines short and beautiful poem in Vietnamese, each line should be on a separate line.";
  let apiKey = "a0a06a4d0t0a9fff1oce244a979b7153";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poem = document.querySelector("#poem");
  poem.classList.remove("hidden");

  axios
    .get(apiUrl)
    .then(displayPoem)
    //check response has any data

    .catch((error) => {
      console.error("Failed to generate poem:", error.message);
    });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
