
const AccessKey = "d85oLvsy6pXCTr0If5fI5ReA4yttNPZigSPm8EcVl08";

let form = document.querySelector("form");
let search_btn = document.getElementById("search-btn");
let search_input = document.getElementById("search-input");
let main_div = document.getElementById("main");
let Showmore = document.getElementById("show_more");

let inputData = "";
let page = 1;

async function search_img() {
  inputData = search_input.value;

  if (page == 1) {
   main_div.innerHTML = "";
 }

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${AccessKey}`;
  let response = await fetch(url);
  let data = await response.json();
  let result = data.results;
  // console.log(result);


  result.map((eve) => {
    let div = document.createElement("div");
    div.classList.add("card");
    let image = document.createElement("img");
    image.src = eve.urls.small;
    image.alt = eve.alt_description;
    let link = document.createElement("a");
    link.href = eve.links.html;
    link.target = "_blank";
    link.textContent = eve.alt_description;

    div.appendChild(image);
    div.appendChild(link);
    main_div.appendChild(div);
  });
  page++;

  if (page > 1) {
   Showmore.style.display = "block";
 }
}


form.addEventListener("submit", (eve) => {
  eve.preventDefault();
  search_img();
});


Showmore.addEventListener("click",()=>{
 search_img()
})