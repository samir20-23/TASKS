let input = document.getElementById("searchBar");
let container = document.getElementById("container");

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searching();
  }
});

function searching() {
  if (input.value !== "") {
    container.innerHTML = "";
    fetch(`https://images-api.nasa.gov/search?q=${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        for (let i = 0; i < 10; i++) {
          let title = data.collection.items[i].data[0].title;
          let image = data.collection.items[i].links[0].href;
          let description = data.collection.items[i].data[0].description;

          let box = document.createElement("div");
          box.classList.add("box");
          container.appendChild(box);

          let img = document.createElement("img");
          img.src = image;
          box.appendChild(img);

          let titleElement = document.createElement("h3");
          titleElement.textContent = title;
          box.appendChild(titleElement);

          let descriptionElement = document.createElement("p");
          descriptionElement.textContent = description;
          box.appendChild(descriptionElement);
        }
      });
  }
}