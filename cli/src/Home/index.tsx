// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const LandingPage = () => {
//   const navigate = useNavigate();

//   return (
//  <>

//     <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col text-white">
     
//       <section className="flex flex-col items-center justify-center flex-grow text-center px-6 py-20">
//         <motion.h1
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
//         >
//           Organize Your Day <br /> with <span className="text-yellow-300">Ease</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 text-gray-100"
//         >
//           Stay productive, plan your tasks, and never miss a goal again — your smart
//           To-Do manager for everyday life.
//         </motion.p>

//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 1, type: "spring", stiffness: 120 }}
//           className="flex gap-4"
//         >
//           <button
//             onClick={() => navigate("/todo/create")}
//             className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
//           >
//             ✨ Create New Task
//           </button>
//           <button
//             onClick={() => navigate("/todo/list")}
//             className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition font-semibold"
//           >
//             📋 View My Tasks
//           </button>
//         </motion.div>
//       </section>


//       <section className="bg-white text-gray-800 py-16 rounded-t-[3rem] shadow-2xl">
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <div className="text-4xl mb-4">⚡</div>
//             <h3 className="text-2xl font-semibold mb-2">Fast & Easy</h3>
//             <p className="text-gray-600">
//               Add, edit, and delete your tasks effortlessly — stay focused, not busy.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="text-4xl mb-4">🧠</div>
//             <h3 className="text-2xl font-semibold mb-2">Smart Organization</h3>
//             <p className="text-gray-600">
//               Categorize your tasks, set priorities, and track progress in style.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             <div className="text-4xl mb-4">💫</div>
//             <h3 className="text-2xl font-semibold mb-2">Beautiful UI</h3>
//             <p className="text-gray-600">
//               Experience a clean, modern interface that makes managing tasks feel good.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-center text-gray-400 py-6">
//         <p>
//           Made with ❤️ by <span className="text-white font-semibold">Neha</span> — To-Do App ©{" "}
//           {new Date().getFullYear()}
//         </p>
//       </footer>
//     </div></>
//   );
// };

// export default LandingPage;


import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-grow text-center px-6 py-20">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg"
        >
          Organize Your Day <br /> with <span className="text-yellow-300">Ease</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 text-gray-100"
        >
          Stay productive, plan your tasks, and never miss a goal again — your smart
          To-Do manager for everyday life.
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 120 }}
          className="flex gap-4"
        >
          <button
            onClick={() => navigate("/todo/create")}
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            ✨ Create New Task
          </button>
          <button
            onClick={() => navigate("/todo/list")}
            className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition font-semibold"
          >
            📋 View My Tasks
          </button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-white text-gray-800 py-16 rounded-t-[3rem] shadow-2xl">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-semibold mb-2">Fast & Easy</h3>
            <p className="text-gray-600">
              Add, edit, and delete your tasks effortlessly — stay focused, not busy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-semibold mb-2">Smart Organization</h3>
            <p className="text-gray-600">
              Categorize your tasks, set priorities, and track progress in style.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-4xl mb-4">💫</div>
            <h3 className="text-2xl font-semibold mb-2">Beautiful UI</h3>
            <p className="text-gray-600">
              Experience a clean, modern interface that makes managing tasks feel good.
            </p>
          </motion.div>
        </div>
      </section>

      {/* More Info Section */}
      <section className="py-16 px-6 bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-6"
          >
            Why Choose Our To-Do App?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-100 mb-12"
          >
            Whether you are a student, professional, or freelancer, our app helps you
            manage your tasks efficiently. Focus on what matters most and reduce
            daily stress with a simple, intuitive interface.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/20 backdrop-blur-md rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-100">
                See what you’ve completed and what’s pending, giving you clear insight
                into your productivity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/20 backdrop-blur-md rounded-xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-2">Custom Reminders</h3>
              <p className="text-gray-100">
                Never forget a task again. Set custom reminders and deadlines for all
                your important tasks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center text-gray-400 py-6">
        <p>
          Made with ❤️ by <span className="text-white font-semibold">Neha</span> — To-Do App ©{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
