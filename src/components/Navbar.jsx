import "./sass_components/Navbar.scss";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav id="navbar">
      <h2>
        <Link to="/"><BiCameraMovie/>BestMovies</Link>
      </h2>
      <form>
        <input type="text" placeholder="Busque por um filme" />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
