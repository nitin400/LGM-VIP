const taskContainer = document.querySelector(".task__container");
// console.log(taskContainer);

const addItem = () => {
  const itemList = {
    id : `${Date.now()}`,
    list__Item : document.getElementById("item__input").value
  };

  const outputList =
  `
  <div class="col p-3">
      <div class="mb-3 d-flex gap-3">
        <div>
          <h5>${itemList.list__Item}</h5>
        </div>
        <div>
          <button type="button" class="btn btn-danger shadow rounded-circle" id=${itemList.id} onclick="deleteButton.apply(this, arguments)"><i class="fas fa-trash-alt"  id=${itemList.id} onclick="deleteButton.apply(this, arguments)"></i></button>
        </div>
      </div>
  </div>
  `

  taskContainer.insertAdjacentHTML("beforeend", outputList);
};


const deleteButton = (event) => {
  event = window.event;
  const targetID = event.target.id;
  const tagname = event.target.tagname;

  if(tagname === "BUTTON")
    return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode);
  else
   return taskContainer.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
}
