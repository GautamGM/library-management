import { Box, Typography } from "@mui/material";
import boyImg from "../../../public/images/undraw.svg";
import { NavLink } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <Box className="grid grid-cols-1 md:grid-cols-2 h-[90vh] bg-gray-50">
        {/* Left Section: Image */}
        <Box className="p-5 flex justify-center items-center">
          <img
            src={boyImg}
            className="h-auto max-w-full "
            alt="Library Illustration"
          />
        </Box>

        {/* Right Section: Content */}
        <Box className="flex flex-col justify-center items-start px-10 space-y-6">
          {/* Title */}
          <Typography variant="h2" className="text-4xl font-bold text-gray-800">
            Welcome to Your Library Management System
          </Typography>

          {/* Description */}
          <Typography variant="body1" className="text-gray-600 text-lg">
            Manage your library with ease! This system allows you to maintain
            and organize a collection of books effortlessly. Whether you're
            adding new titles, updating existing details, or exploring the
            collection, everything is just a click away.
          </Typography>

          <Typography variant="body1" className="text-gray-600 text-lg">
            <strong>Features:</strong>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>All Books:</strong> Explore the entire library
                collection at a glance.
              </li>
              <li>
                <strong>Manage Books:</strong> Add, edit, or delete books to
                keep the collection up-to-date.
              </li>
            </ul>
          </Typography>

          {/* Buttons */}
          <Box className="space-x-4">
            <NavLink to="/books">
              <button className="px-6 py-2 h-[60px] bg-black text-white font-semibold rounded-[5px] hover:bg-gray-400 hover:text-black transition duration-300">
                View All Books
              </button>
            </NavLink>
           <NavLink to="/managebook">
           <button className="px-6 h-[60px] py-2 bg-blue-600 text-white font-semibold rounded-[5px] hover:bg-green-700 transition duration-300">
              Manage Books
            </button>
           </NavLink>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default HomePage;
