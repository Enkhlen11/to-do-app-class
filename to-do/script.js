// {
//   /* <div class="todoList">
//         <div class="title">
//           <div class="circle"></div>
//           <h2>To do</h2>
//           <p class="count">5</p>
//         </div>
//         <div class="list">
//           <div class="listItem">
//             <p>[loan-managament] - Add card component</p>
//             <select name="" id="">
//               <option value="">In progress</option>
//               <option value="">Done</option>
//             </select>
//             <img src="./trash.svg" alt="" />
//           </div>
//           <div class="listem">
//             <p>[loan-managament] - Add card component</p>
//             <select name="" id="">
//               <option value="">In progress</option>
//               <option value="">Done</option>
//             </select>
//             <img src="./trash.svg" alt="" />
//           </div>
//         </div>
//       </div> */
// }
{
  /* <div class="addTask">
  <button>Add Task</button>
</div>; */
}
const addButton = document.getElementById("add");
const addInput = document.getElementById("input");

const containerItems = [
  {
    id: "to-do",
    title: "To do",
    count: 5,
    color: "white",
    paragraph: "[loan-managament] - Add card component",
  },
  {
    id: "in-progress",
    title: "In progress",
    count: 5,
    color: "yellow",
    paragraph: "[loan-managament] - Add card component",
  },
  {
    id: "done",
    title: "Done",
    count: 5,
    color: "green",
    paragraph: "[loan-managament] - Add card component",
  },
  {
    id: "blocked",
    title: "Blocked",
    count: 5,
    color: "red",
    paragraph: "[loan-managament] - Add card component",
  },
];
const todos = [
  {
    title: "geree tseverleh",
    date: "12-09",
    state: "to-do",
  },
  {
    title: "geree tseverlehgui",
    date: "12-20",
    state: "done",
  },
  {
    title: "done",
    date: "11-14",
    state: "in-progress",
  },
  {
    title: "hi",
    date: "10-21",
    state: "done",
  },
];
//<div class="" id=""> innerText </div>
function addTaskList(title, color, count, paragraph, id) {
  const taskContainer2 = document.querySelector("#taskContainer");
  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");
  todoList.setAttribute("id", id);

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

  // const listDiv = document.createElement("div");
  // listDiv.setAttribute("class", "list");
  // const listItem = document.createElement("div");
  // listItem.setAttribute("class", "listItem");
  // todoList.appendChild(listDiv);
  // listDiv.appendChild(listItem);
  // const pDiv = document.createElement("p");
  // listItem.appendChild(pDiv);
  // pDiv.innerText = paragraph;
  // const selectDiv = document.createElement("select");
  // listItem.appendChild(selectDiv);
  // const optionDiv1 = document.createElement("option");
  // const optionDiv2 = document.createElement("option");
  // selectDiv.appendChild(optionDiv1);
  // selectDiv.appendChild(optionDiv2);
  // optionDiv1.innerText = "In progress";
  // optionDiv2.innerText = "done";
  // const image = document.createElement("img");
  // image.setAttribute("src", "./trash.svg");
  // listItem.appendChild(image);
}

containerItems.map((item) => {
  addTaskList(item.title, item.color, item.count, item.paragraph, item.id);
});

const renderTodo = (title, date, state) => {
  const todoDiv = document.querySelector(`#${state}`);
  const objectDiv = document.createElement("div");
  objectDiv.setAttribute("class", "objectDiv");
  todoDiv.appendChild(objectDiv);

  const titleDiv = document.createElement("div");
  todoDiv.appendChild(titleDiv);
  titleDiv.innerText = title;
  objectDiv.appendChild(titleDiv);

  const sumDiv = document.createElement("div");
  sumDiv.setAttribute("class", "sumDiv");
  todoDiv.appendChild(sumDiv);

  const stateDiv = document.createElement("div");
  stateDiv.innerText = date;
  todoDiv.appendChild(stateDiv);
  objectDiv.appendChild(stateDiv);

  const selectDiv = document.createElement("select");
  todoDiv.appendChild(selectDiv);

  containerItems.map((item) => {
    option = document.createElement("option");
    option.innerText = item.id;
    selectDiv.appendChild(option);
    sumDiv.appendChild(objectDiv);
    sumDiv.appendChild(selectDiv);
  });

  // const optionDiv1 = document.createElement("option");
  // const optionDiv2 = document.createElement("option");
  // selectDiv.appendChild(optionDiv1);
  // optionDiv1.innerText = "In progress";
  // selectDiv.appendChild(optionDiv2);
  // optionDiv2.innerText = "done";
  // objectDiv.appendChild(selectDiv);

  const image = document.createElement("img");
  image.setAttribute("src", "./trash.svg");
  sumDiv.appendChild(image);
};
todos.map((item) => {
  renderTodo(item.title, item.date, item.state);
});
