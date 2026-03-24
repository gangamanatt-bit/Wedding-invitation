import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h2 className="logo" onClick={() => navigate("/")}>
        SacredVows
      </h2>

      <ul className="nav-links">
        <li onClick={() => navigate("/templates")}>Templates</li>
        <li onClick={() => navigate("/about")}>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;