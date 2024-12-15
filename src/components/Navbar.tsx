const Navbar = () => {
  return (
    <nav className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-lg rounded-full px-6 py-2 shadow-sm z-50">
      <ul className="flex space-x-8 text-gray-800 font-medium">
        {["Home", "Projects", "About", "Contact"].map((item) => (
          <li
            key={item}
            className="relative cursor-pointer hover:text-gray-500 transition-all duration-300"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 hover:w-full"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
