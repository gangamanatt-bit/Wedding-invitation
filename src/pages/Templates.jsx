import { useNavigate } from "react-router-dom";
import "../styles/Templates.css";
import BackButton from "../components/BackButton";

function Templates() {

  const navigate = useNavigate();

  const templates = [
    { id: 1, img: "/templates/t1.jpg" },
    { id: 2, img: "/templates/t2.jpg" },
    { id: 3, img: "/templates/t3.jpg" },
    { id: 4, img: "/templates/t4.jpg" },
    { id: 5, img: "/templates/t5.jpg" },
    { id: 6, img: "/templates/t6.jpg" }
  ];

  return (

    <div className="templates-page">

      {/* HEADER */}
      <div className="templates-header">
        <BackButton />
        <h1 className="templates-title">
          Choose Your Invitation Template
        </h1>
      </div>

      {/* TEMPLATE GRID */}
      <div className="templates-grid">

        {templates.map((t) => (

          <div
            key={t.id}
            className="template-card"
            onClick={() => navigate(`/form/${t.id}`)}
          >

            <img src={t.img} alt={`template-${t.id}`} />

            <div className="template-overlay">
              <button>Select Template</button>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Templates;