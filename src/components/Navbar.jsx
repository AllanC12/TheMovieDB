import "./sass_components/Navbar.scss";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch('')
    console.log(search);
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie />
          BestMovies
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque por um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search || ''}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
