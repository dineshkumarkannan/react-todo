import React, { useState } from "react";
import Card from "./Card.jsx";

import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

const List = ({ todos, toggleToDoComplete, onSaveEditedItem }) => {
  const [editItem, setEditItem] = useState({});
  if (todos & (todos.length === 0)) return <div>No Todos Yet...</div>;

  function handleEdit(item) {
    setEditItem(item);
  }

  function editInputChannge(e) {
    setEditItem({
      ...editItem,
      value: e.target.value,
    });
  }

  function handleSave() {
    let newVal = editItem.value.split(" ").join("");
    if (newVal.length === 0) {
      alert(`input value should be valid!`);
      return;
    }
    if (newVal.length > 32) {
      alert(`too many characters ${newVal.length}`);
      return;
    }

    onSaveEditedItem(editItem);
    setEditItem(null);
  }

  return (
    <>
      {todos
        ? todos.map((todo) => {
            return (
              <Card key={todo.id}>
                <div className="flex justify-around items-center h-6">
                  <div className="basis-1/4 text-center">
                    <input
                      type="checkbox"
                      name="todos"
                      id={todo.id}
                      checked={todo?.completed}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      value={todo?.completed}
                      onChange={() => toggleToDoComplete(todo.id)}
                    />
                  </div>
                  <div className="basis-1/2">
                    {editItem?.id === todo.id ? (
                      <input
                        className="w-full p-2"
                        value={editItem.value}
                        onChange={editInputChannge}
                      />
                    ) : (
                      <div
                        className={`${
                          todo.completed ? "line-through text-stone-400" : null
                        }`}
                      >
                        {todo.value}
                      </div>
                    )}
                  </div>
                  <div className="basis-1/4 text-center">
                    {editItem?.id === todo.id ? (
                      <button
                        className="mx-1 p-2 border-2 hover:bg-stone-300"
                        onClick={() => handleSave()}
                      >
                        <CheckIcon className="size-4" />
                      </button>
                    ) : (
                      <button
                        className="mx-1 p-2 border-2 hover:bg-stone-300"
                        onClick={() => handleEdit(todo)}
                      >
                        <PencilIcon className="size-4" />
                      </button>
                    )}
                    {/* <button>Delete</button> */}
                    <button className="mx-1 p-2 border-2 hover:bg-stone-300">
                      <TrashIcon className="size-4" />
                    </button>
                  </div>
                </div>
              </Card>
            );
          })
        : null}
    </>
  );
};

export default List;
