/*{
  <div class="card">
        <h2>Naruto</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          dignissimos?
        </p>
        <img src="https://cdn.staticneo.com/w/naruto/Nprofile2.jpg" alt="" />
      </div> 
}*/

const appDiv = document.querySelector(".app");
let cards = [
  {
    title: "Naruto",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,dignissimos?",
    imgUrl: "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg",
  },
  {
    title: "Sasuke",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,dignissimos?",
    imgUrl:
      "https://image.tensorartassets.com/cdn-cgi/image/anim=false,plain=false,w=500,q=85/model_showcase/671003870501078399/1b5b8f17-ad27-4194-8cb6-cdb6910379e0.png",
  },
  {
    title: "Uchiha",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,dignissimos?",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrmc88PffAo0Dkm8ESzfQZDOlvOpD2NtzKow&s",
  },
];
function generateCard(title, description, imgUrl) {
  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");
  const header = document.createElement("h2");
  header.innerText = title;
  cardDiv.appendChild(header);
  const pTag = document.createElement("div");
  pTag.innerText = description;
  cardDiv.appendChild(pTag);
  const image = document.createElement("img");
  image.setAttribute("src", imgUrl);
  cardDiv.appendChild(image);

  appDiv.appendChild(cardDiv);
}

cards.map((item) => {
  generateCard(item.title, item.description, item.imgUrl);
});
// generateCard(
//   "Naruto",
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,dignissimos?",
//   "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg"
// );
