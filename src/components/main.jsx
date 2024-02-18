import { useEffect, useState } from "react";
import Input from "./input";
import Tasks from "./tasks";

function Main() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todolist")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todoList));
  }, [todoList]);

  const handleOnchange = (e) => {
    setInputValue(e.target.value);
  };
  const handleAddTask = () => {
    if (inputValue === "") {
      alert("Please type somthing, do not type blank");
    } else {
      setTodoList([...todoList, inputValue]);
      setInputValue("");
    }
  };
  const handleEnter = (e) => {
    if (e.code === "Enter") {
      handleAddTask();
    }
  };

  const buttonDelete = (index) => {
    const newTodoList = todoList.filter((todo, id) => index !== id);
    setTodoList(newTodoList);
  };

  return (
    <>
      <div className="root bg-gradient-to-r from-amber-700 via-yellow-300 to-blue-300 w-full h-screen flex items-center justify-center">
        <div className="content bg-white p-3 w-2/4 h-auto flex items-center pt-10 flex-col gap-4 rounded-md relative">
          <h1 className="font-bold text-2xl">TODO APP</h1>
          {/* <input
            value={inputValue}
            onChange={(e) => handleOnchange(e)}
            onKeyDown={(e) => handleEnter(e)}
            id="inputHTML"
            type="text"
            className=" w-full border-2 border-rose-600 rounded-md h-10 p-3"
            placeholder="Type here..."
          /> */}
          <Input
            inputValue={inputValue}
            handleOnchange={(e) => handleOnchange(e)}
            handleEnter={(e) => handleEnter(e)}
          ></Input>
          <button
            onClick={handleAddTask}
            id="buttonHTML"
            className="bg-rose-600 w-full rounded-md font-bold text-white h-9"
          >
            Add task
          </button>
          <ul id="task__lists" className="main p-10 flex flex-col w-full gap-3">
            {todoList.map((todo, index) => (
              <Tasks
                key={index}
                index={index}
                todo={todo}
                buttonDelete={() => buttonDelete(index)}
              ></Tasks>
            ))}
          </ul>

          <div className="text-alarm absolute bottom-0 right-0 mb-3 mr-3">
            <h1>
              You have {todoList.length}
              {todoList.length < 2 ? "task" : "tasks"}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
