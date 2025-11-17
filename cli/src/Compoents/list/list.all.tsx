import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import HeaderComponent from "../../Home/header";
const baseURL =  "https://todo-o8z5.onrender.com";
const ListList: React.FC = () => {
  const [lists, setLists] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await axios.get(`${baseURL}/list/all`);
        console.log("Lists response:", response.data);

        const data = Array.isArray(response.data)
          ? response.data
          : response.data.result || [];

        setLists(data);
      } catch (exception) {
        console.error("Error fetching lists:", exception);
        setLists([]);
      }
    };

    fetchLists();
  }, []);

  const handleDelete = async (listId: string) => {
    try {
      const response = await axios.delete(`http://localhost:3001/list/${listId}`);
      console.log("Deleted successfully:", response);
      setLists(lists.filter((list) => list._id !== listId));
    } catch (exception) {
      console.error("Error deleting list:", exception);
    }
  };

  const handleEdit = (listId: string) => {
    navigate(`/list/${listId}/edit`);
  };

  return (
   <>
   <HeaderComponent/>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-200 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-700">📋 Your Todo Lists</h1>
          <button
            onClick={() => navigate("/todo/create")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-lg transition"
          >
            ➕ Create New
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-lg shadow">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium">Title</th>
                <th className="px-6 py-3 text-left text-sm font-medium">Description</th>
                <th className="px-6 py-3 text-center text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {lists.length === 0 ? (
                <tr>
                  <td
                    colSpan={3}
                    className="text-center text-gray-500 px-6 py-8 text-lg"
                  >
                    No Todo Lists available 😔
                  </td>
                </tr>
              ) : (
                lists.map((list, index) => (
                  <motion.tr
                    key={list._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-indigo-50 transition"
                  >
                    <td className="px-6 py-4 border-b text-gray-800 font-medium">
                      {list.title}
                    </td>
                    <td className="px-6 py-4 border-b text-gray-600">
                      {list.description}
                    </td>
                    <td className="px-6 py-4 border-b text-center space-x-3">
                      <button
                        onClick={() => handleEdit(list._id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(list._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-lg transition"
                      >
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div></>
  );
};

export default ListList;
