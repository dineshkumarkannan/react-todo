import InputButton from "./components/InputButton.jsx";
import List from "./components/List.jsx";

import useLocalStorage from "./hooks/useLocalStorage.js";

const TODOS = [
  {
    id: 1735747347220,
    value: "test 1",
    completed: false,
  },
  {
    id: 1735747353458,
    value: "test 2",
    completed: true,
  },
  {
    id: 1735747354567,
    value: "test 3",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = useLocalStorage("items", TODOS);

  function handleToDoChange(id) {
    let localTodo = todos.map((val) => {
      if (val.id === id) {
        val.completed = !val.completed;
      }
      return val;
    });
    setTodos(localTodo);
  }

  function handleNewToDoItem(newItem) {
    let addItem = {
      id: Date.now(),
      value: newItem,
      completed: false,
    };
    let localTodo = [...todos, addItem];
    setTodos(localTodo);
  }

  function handleEditSave(item) {
    let localTodo = todos.map((val) => {
      if (val.id === item.id) {
        val.value = item.value;
      }
      return val;
    });
    setTodos(localTodo);
  }

  return (
    <div className="mx-auto my-4 border-2 border-stone-400 rounded-sm w-[100%] md:w-2/3 lg:w-2/4">
      <div className="py-4 bg-stone-200 flex flex-col items-center">
        <h1 className="text-xl my-6 font-bold">React To-Do</h1>
        <InputButton addNewToDoItem={handleNewToDoItem} />
      </div>
      <hr class="h-px border-stone-500 border-1" />
      <div className="py-4 bg-stone-50 h-full max-h-80 overflow-auto">
        <List
          todos={todos}
          toggleToDoComplete={handleToDoChange}
          onSaveEditedItem={handleEditSave}
        />
      </div>
    </div>
  );
}

export default App;
