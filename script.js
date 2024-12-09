{
  /* <div class="todoList">
        <div class="title">
          <div class="circle"></div>
          <h2>To do</h2>
          <p class="count">5</p>
        </div>
        <div class="list">
          <div class="listItem">
            <p>[loan-managament] - Add card component</p>
            <select name="" id="">
              <option value="">In progress</option>
              <option value="">Done</option>
            </select>
            <img src="./trash.svg" alt="" />
          </div>
          <div class="listItem">
            <p>[loan-managament] - Add card component</p>
            <select name="" id="">
              <option value="">In progress</option>
              <option value="">Done</option>
            </select>
            <img src="./trash.svg" alt="" />
          </div>
        </div>
      </div> */
}

const containerItems = [
  {
    title: "To do",
    count: 5,
    color: "white",
    paragraph: "[loan-managament] - Add card component",
  },
  {
    title: "In progress",
    count: 5,
    color: "white",
    paragraph: "[loan-managament] - Add card component",
  },
  {
    title: "Done",
    count: 5,
    color: "green",
    paragraph: "[loan-managament] - Add card component",
  },
  {
    title: "Blocked",
    count: 5,
    color: "red",
    paragraph: "[loan-managament] - Add card component",
  },
];

function addTaskList(title, color, count, paragraph) {
  const taskContainer2 = document.querySelector("#taskContainer");
  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");
  todoList.appendChild(titleDiv);
  const h2 = document.createElement("h2");
  h2.innerText = title;
  const p = document.createElement("p");
  p.setAttribute("class", "count");
  p.innerText = count;
  const cirlce = document.createElement("div");
  cirlce.setAttribute("class", "circle");

  cirlce.style.backgroundColor = color;
  titleDiv.appendChild(cirlce);
  titleDiv.appendChild(h2);
  titleDiv.appendChild(p);
  taskContainer2.appendChild(todoList);
  const listDiv = document.createElement("div");
  listDiv.setAttribute("class", "list");
  const listItem = document.createElement("div");
  listItem.setAttribute("class", "listItem");
  todoList.appendChild(listDiv);
  listDiv.appendChild(listItem);

  const pDiv = document.createElement("p");
  listItem.appendChild(pDiv);
  pDiv.innerText = paragraph;
}

addTaskList(
  containerItems[0].title,
  containerItems[0].color,
  containerItems[0].count,
  containerItems[0].paragraph
);
containerItems.map(() => {});
