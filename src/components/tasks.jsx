// eslint-disable-next-line react/prop-types
function Tasks({ index, todo, buttonDelete }) {
  return (
    <li className="main_content flex flex-row justify-between items-center">
      <div className="main_content--1 flex flex-row gap-3">
        <div className="number bg-rose-600 w-9 h-9 flex justify-center items-center rounded-md">
          {index + 1}
        </div>
        <div className="text">{todo}</div>
      </div>
      <button
        onClick={() => buttonDelete(index)}
        className="button text-rose-600"
      >
        DELETE
      </button>
    </li>
  );
}

export default Tasks;
