import Navbar from "../components/Navbar";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home ">
      <Navbar />

      <div className="hero">
        {/* LEFT TEXT */}
        <div className="hero-text">
          <h1>
            <span className="gradient">Creativity</span><br />
            <span className="green">never</span>{" "}
            <span className="gradient">ends</span>
          </h1>

          <p>
            Create stunning invitations and designs easily with our platform.
          </p>

          <button   onClick={() => navigate("/templates")} className="cta-btn">Create Invitation</button>
        </div>

        {/* RIGHT IMAGE */}
       <div className="hero-image">
  <img src="/templates/hero.png" alt="Invitation preview" />
</div>
      </div>
    </div>
  );
}

export default Home;