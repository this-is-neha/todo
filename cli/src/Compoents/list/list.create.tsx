// import { useState } from "react";
// import axios from "axios";
// import { motion, AnimatePresence } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// const ListCreate = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);
// const navigate = useNavigate();
//   const handleChange = (e: any) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post("http://localhost:3001/list/create", {
//         title: formData.title,
//         description: formData.description,
//       });

//       console.log("List created:", response.data);
//       setSuccess(true);
//       setFormData({ title: "", description: "" });

   
//       setTimeout(() => setSuccess(false), 2500);
//       navigate("/todo/list")
//     } catch (err: any) {
//       console.error("Error creating list:", err);
//       setError("Failed to create list. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200">
//       <div className="bg-white shadow-lg rounded-2xl p-8 w-[400px] relative">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
//           📝 Create Todo List
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Title
//             </label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//               placeholder="Enter todo title"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">
//               Description
//             </label>
//             <textarea
//               name="description"
//               value={formData.description}
//               onChange={handleChange}
//               className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
//               placeholder="Enter description"
//               rows={3}
//               required
//             ></textarea>
//           </div>

//           {error && (
//             <p className="text-red-500 text-center font-medium">{error}</p>
//           )}

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-200"
//           >
//             Create Todo
//           </button>
//         </form>

       
//         <AnimatePresence>
//           {success && (
//             <motion.div
//               initial={{ opacity: 0, y: -30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -30 }}
//               transition={{ duration: 0.4 }}
//               className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-lg shadow-md"
//             >
//               ✅ Todo Created Successfully!
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// };

// export default ListCreate;


import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ListCreate = () => {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/list/create", formData);
      console.log("List created:", response.data);
      setSuccess(true);
      setFormData({ title: "", description: "" });

      setTimeout(() => setSuccess(false), 2500);
      navigate("/todo/list");
    } catch (err: any) {
      console.error("Error creating list:", err);
      setError("Failed to create list. Please try again.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-200 via-pink-200 to-indigo-200">
      
      {/* Animated background circles */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-400 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-pink-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-300 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 z-10"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          📝 Create Todo List
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter todo title"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              rows={3}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-400 resize-none"
            />
          </div>

          {error && <p className="text-red-500 text-center font-medium">{error}</p>}

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Create Todo
          </button>
        </form>

        {/* ✅ Success popup */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg text-center font-medium"
            >
              ✅ Todo Created Successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ListCreate;
