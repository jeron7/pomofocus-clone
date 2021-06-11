import optionsIcon from "../../assets/icons/options-vertical.svg";
import addIcon from "../../assets/icons/circle-add.svg";

import "./index.css";

const Tasks = () => {
  const showAddTaskButton = (e, show) => {
    e?.preventDefault();
    const addTaskButton = document.getElementById("addTaskButton");
    const addTask = document.getElementById("addTask");

    if (show) {
      changeElementDisplay(addTaskButton, "flex");
      changeElementDisplay(addTask, "none");
    } else {
      changeElementDisplay(addTaskButton, "none");
      changeElementDisplay(addTask, "flex");
    }
  };

  return (
    <div className="tasks">
      <header>
        <h3>Tasks</h3>
        <button>
          <img src={optionsIcon} alt="Options" />
        </button>
      </header>
      <a
        href="/#"
        id="addTaskButton"
        onClick={(e) => showAddTaskButton(e, false)}
      >
        <img src={addIcon} alt="Add task" />
        Add task
      </a>
      <form id="addTask">
        <div className="options">
          <input
            type="text"
            name=""
            id=""
            placeholder="What are you working on?"
          />
          <label htmlFor="">Est Pomodoros</label>
          <input type="number" name="" id="" min="0" />
          <a href="/#">+ Add Note</a>
        </div>
        <footer>
          <a href="/#" onClick={(e) => showAddTaskButton(e, true)}>
            Cancel
          </a>
          <button>Save</button>
        </footer>
      </form>
    </div>
  );
};

function changeElementDisplay(element, prop) {
  if (element) {
    element.style["display"] = prop;
  }
}

export default Tasks;
