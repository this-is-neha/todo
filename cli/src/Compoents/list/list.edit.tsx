
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const ListEdit = () => {
  const [list, setList] = useState<any>({});
  const [success, setSuccess] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/list/${id}`);
        const data = response.data.result || response.data;
        setList(data);
      } catch (exception) {
        console.error("Error fetching list:", exception);
      }
    };
    fetchList();
  }, [id]);

  const handleChange = (e: any) => {
    setList({ ...list, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      const updatedData = { title: list.title, description: list.description };

      await axios.put(`http://localhost:3001/list/${id}`, updatedData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        navigate("/todo/list");
      }, 2000);
    } catch (exception) {
      console.error("Error updating list:", exception);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-300 via-pink-200 to-indigo-200">
  
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-pink-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-indigo-300 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 z-10"
      >
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          ✏️ Edit To-Do Item
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={list.title || ""}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter title"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={list.description || ""}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Enter description"
              rows={4}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-200"
          >
            Update To-Do
          </button>
        </form>

        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-lg shadow-md"
            >
              ✅ Todo Updated Successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ListEdit;
