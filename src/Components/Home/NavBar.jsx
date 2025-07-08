import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import Logo from "../../assets/Humble.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "font-semibold underline text-roti-500"
      : "text-gray-700";

  return (
    <header className="w-full shadow-sm border-b bg-white py-2 relative z-50">
      {/* Desktop Navbar (md and up) */}
      <nav className="hidden md:flex items-center justify-between px-10 overflow-hidden">
        <div className="w-16 h-16">
          <img src={Logo} className="object-cover scale-150" />
        </div>
        <div className="flex gap-6 font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/prices" className={navLinkClass}>Prices</NavLink>
        </div>
        <div className="flex gap-2">
          <button className="bg-tarawera-900 hover:bg-opacity-90 text-white px-6 py-2 rounded-md">
            Call Now
          </button>
          <Link
            to="/login"
            className="border-2 border-tarawera-900 text-tarawera-900 hover:text-white hover:bg-tarawera-900 px-6 py-2 rounded-md flex items-center gap-1"
          >
            <VscAccount /> Login
          </Link>
        </div>
      </nav>

      {/* Small screen navbar (sm only) */}
      <nav className="hidden sm:flex md:hidden items-center justify-between px-6">
        <div className="h-16 w-16">
            <img src={Logo} className="object-cover scale-125" />
        </div>
        <div className="flex gap-4 items-center">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/prices" className={navLinkClass}>Prices</NavLink>
        </div>
      </nav>

      {/* Mobile Navbar (xs only) */}
      <nav className="flex sm:hidden items-center justify-between px-4">
        <div className="h-16 w-16">
            <img src={Logo} className="object-cover scale-125" />
        </div>
        <button
          className="text-3xl text-tarawera-900 relative w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {/* Animated Icon Swap */}
          <span
            className={`absolute top-0 left-0 transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
          >
            <HiOutlineMenuAlt3 />
          </span>
          <span
            className={`absolute top-0 left-0 transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
          >
            <HiX />
          </span>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white w-full px-6 py-4 shadow-md flex flex-col gap-4 text-gray-700 absolute top-[70px] left-0">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/prices" onClick={() => setMenuOpen(false)} className={navLinkClass}>
            Prices
          </NavLink>
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-1 border-t pt-3 mt-2"
          >
            <VscAccount /> Login
          </Link>
          <button className="w-full bg-tarawera-900 text-white py-2 rounded-md mt-2">
            Call Now
          </button>
        </div>
      )}
    </header>
  );
}
