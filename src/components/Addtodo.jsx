import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { FaDeleteLeft } from "react-icons/fa6";
import { MdEditSquare } from "react-icons/md";
import { toast } from "react-toastify";

const TodoApp = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]); // State for storing todos
  const [editingTodo, setEditingTodo] = useState(null); // State for editing a todo

  useEffect(() => {
   fetchTodos()
  }, [description]);




    
  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/product/products");
      const data = response.data;
      console.log("Products fetched successfully:", data);
      if (data.products && data.products.length > 0) {
        setTodos(data.products);
      } else {
        console.log("No products available");
        setTodos([]); // Handle empty product list
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  

const handleAddTodo = async () => {
  if (!title.trim() || !description.trim()) {
    toast.info("Please enter all fields");
    return;
  }

  try {
    const response = await axios.post("http://localhost:3000/api/product/addproduct", {
      title,
      description,
    });

    const data = response.data;
    console.log(data);

    setTodos([...todos, { id: data.id, name: title, description }]); 
    setTitle(""); 
    setDescription("");
  } catch (error) {
    console.error("Error:", error);
  }
};



  const handleUpdateTodo = useCallback(
  async (id) => {
    if (!editingTodo || !id) {
      console.error("No todo is being edited or invalid ID.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:3000/api/product/update/${id}`,
        {
          title: editingTodo.title,
          description: editingTodo.description,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const updatedProduct = response.data.updatedTodo;

        // Update the todos state with the updated product
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, ...updatedProduct } : todo
          )
        );
        setEditingTodo(null); // Clear editing state
        setTitle(""); // Reset title input
        setDescription(""); // Reset description input
        toast.success("Todo updated successfully!");
        
        console.log(todos);  // Debugging the updated todos state
      }
    } catch (error) {
      console.error(
        "Error updating todo:",
        error.response?.data?.message || error.message
      );
    }
  },
  [editingTodo, setTodos, setTitle, setDescription]// Add todos as dependency here
);





  //  Delete a todo
  const handleDeleteTodo = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/product/delete/${id}`
      );
      if (response.status === 200) {
        setTodos(todos.filter((todo) => todo._id !== id));
        toast.success("Todo deleted successfully");
      }
    } catch (error) {
      console.error(
        "Error deleting todo:",
        error.response?.data?.message || error.message
      );
    }
  };





  return (
    <div className="container mx-auto mt-20">
      <div className="grid grid-cols-12">
        <div className="col-span-10 col-start-2">
          <div className="bg-white shadow-md rounded-md">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                {/* Inputs for title and description */}
                <div>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 rounded-md"
                    placeholder="Title"
                    value={editingTodo ? editingTodo.title : title}
                    onChange={(e) =>
                      editingTodo
                        ? setEditingTodo({
                            ...editingTodo,
                            title: e.target.value,
                          })
                        : setTitle(e.target.value)
                    }
                  />
                  <textarea
                    className="border border-gray-300 p-2 rounded-md mt-2 w-full"
                    placeholder="Description"
                    value={editingTodo ? editingTodo.description : description}
                    onChange={(e) =>
                      editingTodo
                        ? setEditingTodo({
                            ...editingTodo,
                            description: e.target.value,
                          })
                        : setDescription(e.target.value)
                    }
                  />
                </div>
          

                   {editingTodo ? (
                  <button
                    className="btn btn-primary text-white bg-blue-500 hover:bg-blue-600 text-sm px-4 py-2 rounded mt-2 ml-2"
                    onClick={() => handleUpdateTodo(editingTodo._id)}
                  >
                    <i className="fa fa-save"></i> Update
                  </button>
                ) : (
                  <a
                  href="#"
                  className="btn btn-primary text-white bg-blue-500 hover:bg-blue-600 text-sm px-4 py-2 rounded mt-2"
                  onClick={handleAddTodo}
                >
                  <i className="fa fa-plus-circle"></i> Add New
                </a>
                )}

        
              </div>
            </div>
            <div className="p-4 overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2">#</th>
                    <th className="border border-gray-300 p-2">Title</th>
                    <th className="border border-gray-300 p-2">Description</th>
                    <th className="border border-gray-300 p-2 text-left">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {todos.map((todo, index) => (
                    <tr key={todo._id || index}>
                      {/* <td className="flex justify-center border border-gray-300 p-2 ">{todo._id}</td> */}
                      <td className="flex justify-center border border-gray-300 p-2 ">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {todo.title}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {todo.description}
                      </td>

                      <td className="border border-gray-300 p-2">
                        <div className="flex space-x-2">
                          <a
                            href="#"
                            className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white p-2 rounded"
                            onClick={() => setEditingTodo(todo)}
                          >
                            <MdEditSquare />
                          </a>

                          <a
                            href="#"
                            className="btn btn-danger bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                            onClick={() => handleDeleteTodo(todo._id)}
                          >
                            <FaDeleteLeft />
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t">
              <div className="flex justify-between items-center">
                <div className="text-gray-600">
                  Showing <b>{todos.length}</b> entries
                </div>
                <div>
                  {/* Pagination logic */}
                  <ul className="hidden sm:flex space-x-1">
                    <li>
                      <a
                        href="#"
                        className="px-3 py-1 border rounded hover:bg-gray-200"
                      >
                        «
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="px-3 py-1 border rounded bg-blue-500 text-white"
                      >
                        1
                      </a>
                    </li>
                    {/* Add more pagination links as necessary */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
