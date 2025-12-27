import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`w-full border-b transition-colors duration-300 
      ${
        props.mode === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* LEFT SIDE */}
          <div className="flex items-center space-x-6">
            <span className="text-lg font-semibold">
              {props.title}
            </span>

            <Link to="/" className="text-sm font-medium hover:underline">
              Home
            </Link>

            <Link to="/about" className="text-sm font-medium hover:underline">
              About
            </Link>
          </div>

          {/* SEARCH */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <button className="border border-gray-400 px-3 py-1 rounded text-sm hover:bg-gray-100">
              Search
            </button>
          </div>

          {/* DARK MODE TOGGLE */}
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={props.mode === "dark"}
              onChange={props.toggleMode}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-800"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
          </label>
        </div>
      </div>
    </nav>
  );
}
