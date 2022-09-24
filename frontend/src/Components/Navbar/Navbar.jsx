import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import "./Navbar.css";
import { useRef } from "react";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const Navbar = () => {
  const location = useLocation();
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };
  useEffect(() => {
    hideNavbar();
  }, [location]);
  return (
    <header>
      <span className="app-logo">
        <Link className="app-logo-link" to="/">
          <PersonSearchIcon fontSize="large" />
          <span>Digital Identifier</span>
        </Link>
      </span>

      <nav ref={navRef}>
        <div className="navLink">
          <Link to="/">Home</Link>
          <Link to="/upload">Upload</Link>
        </div>
        <button className="nav-btn nav-close-btn" onClick={hideNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
