import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ title, mode, toggleMode }) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`w-full border-b transition-colors duration-300 ${
        mode === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP BAR */}
        <div className="flex items-center justify-between h-14">
          <span className="text-lg font-semibold">{title}</span>

          {/* DESKTOP LINKS */}
          <div className="hidden sm:flex items-center gap-6">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>

            {/* YOUR DARK MODE TOGGLE */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={mode === "dark"}
                onChange={toggleMode}
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-800"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
            </label>
          </div>

          {/* HAMBURGER (mobile) */}
          <button
            className="sm:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="sm:hidden flex flex-col gap-4 pb-4">
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>

            {/* SAME DARK MODE TOGGLE (mobile) */}
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={mode === "dark"}
                onChange={toggleMode}
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-800"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
            </label>
          </div>
        )}
      </div>
    </nav>
  );
}
