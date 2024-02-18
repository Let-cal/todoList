// eslint-disable-next-line react/prop-types
function Input({ inputValue,handleOnchange,handleEnter }) {
  return (
    <input
      value={inputValue}
      onChange={(e) => handleOnchange(e)}
      onKeyDown={(e) => handleEnter(e)}
      id="inputHTML"
      type="text"
      className=" w-full border-2 border-rose-600 rounded-md h-10 p-3"
      placeholder="Type here..."
    />
  );
}

export default Input;
