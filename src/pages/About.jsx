import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../styles/About.css";


function About() {
   const navigate = useNavigate();
  return (
    <div>
      <Navbar />
     <div className="about-page">

      {/* TOP BAR */}

      <div className="about-top">
        <button onClick={()=>navigate("/")}>← Back</button>
      </div>

      {/* CONTENT */}

      <div className="about-container">

        <h1>About Invitation Maker</h1>

        <p className="about-desc">
          Invitation Maker is a simple web application that allows users to
          design beautiful wedding invitations quickly and easily.  
          You can choose from multiple templates, enter wedding details,
          preview your invitation instantly, edit it anytime, and download it
          as an image or PDF.
        </p>

        <div className="features">

          <div className="feature-card">
            <h3>🎨 Multiple Templates</h3>
            <p>
              Choose from a variety of elegant wedding invitation templates
              designed for different styles and preferences.
            </p>
          </div>

          <div className="feature-card">
            <h3>✏️ Easy Editing</h3>
            <p>
              Update names, date, time, and venue easily using our edit modal
              without leaving the preview page.
            </p>
          </div>

          <div className="feature-card">
            <h3>⬇️ Instant Download</h3>
            <p>
              Download your invitation instantly as an image or PDF and share
              it with your friends and family.
            </p>
          </div>

        </div>

      </div>

    </div>
    </div>
  );
}

export default About;