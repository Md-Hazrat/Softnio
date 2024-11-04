import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navabe = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-red-500">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Left Side: Logo and Links */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/462649317_907275164701048_5688379746998494746_n.png"
            alt="Restaurant Logo"
            className="h-10 w-10 rounded-full"
          />
          <h2 className="text-lg font-bold text-white">Restaurant</h2>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 ml-6">
            {["Home", "About", "Portfolio", "Clients", "Blog", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="cursor-pointer hover:text-gray-300 text-white"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Right Side: Book a Table */}
        <div className="hidden md:flex items-center cursor-pointer hover:text-gray-300 text-white">
          Book a table
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center text-white">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-500 text-white p-4">
          <ul className="space-y-4 text-center">
            {["Home", "About", "Portfolio", "Clients", "Blog", "Contact"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="block hover:text-gray-300"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
            <li>
              <a href="/booking" className="block hover:text-gray-300">
                Book a table
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navabe;
