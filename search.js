const AccessKey = "d85oLvsy6pXCTr0If5fI5ReA4yttNPZigSPm8EcVl08";

const main_div = document.querySelector("#main");
const form = document.querySelector("form");
const search_input = document.querySelector("#search-input");
const search_btn = document.querySelector("#search-btn");
const Showmore = document.querySelector("#show_more");

let inputData = "";
let page = 1;

async function imageSearch() {
  inputData = search_input.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${AccessKey}`;
  let response = await fetch(url);
  let data = await response.json();
  let result = data.results;

  if (page == 1) {
    main_div.innerHTML = "";
  }

  result.map((eve) => {
    const div = document.createElement("div");
    div.classList.add("card");
    const img = document.createElement("img");
    img.src = eve.urls.small;
    img.alt = eve.alt_description;
    const link = document.createElement("a");
    link.href = eve.links.html;
    link.target = "_blank";
    link.textContent = eve.alt_description;

    div.appendChild(img);
    div.appendChild(link);
    main_div.appendChild(div);
  });
  page++;

  if (page > 1) {
    Showmore.style.display = "block";
  }
}

form.addEventListener("submit", function (eve) {
  eve.preventDefault();
  page = 1;
  imageSearch();
});

Showmore.addEventListener("click", function () {
  imageSearch();
});
