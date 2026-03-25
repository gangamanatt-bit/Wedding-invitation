import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Template1 from "../components/Template1";
import Template2 from "../components/Template2";
import Template3 from "../components/Template3";
import Template4 from "../components/Template4";
import Template5 from "../components/Template5";
import Template6 from "../components/Template6";

function HistoryPage() {

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const deleteInvitation = (id) => {
    axios.delete(`https://invitation-server-b26b.onrender.com/invitations/${id}`)
      .then(() => {
        setData(data.filter(item => item.id !== id));
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axios.get("https://invitation-server-b26b.onrender.com/invitations")
      .then(res => setData(res.data))   // ✅ IMPORTANT
      .catch(err => console.log(err));
  }, []);

 return (
  <div style={{ backgroundColor: "#ddd4d4",padding: "20px", minHeight: "100vh",
    width: "100%" }}>

    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Download History</h2>

    {data.length === 0 ? (
      <p>No invitations yet</p>
    ) : (

      // ✅ GRID CONTAINER
      <div  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    paddingTop: "10px",
    maxWidth: "800px",
    margin: "auto",
    alignItems: "start"   // ⭐ IMPORTANT FIX
  }}>

        {data.map((item) => {
          console.log("ITEM:", item);

          return (
            <div key={item.id} style={{
    position: "relative",   // ⭐ important
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0px"
  }}>

              {/* Delete Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteInvitation(item.id);
                }}
                  style={{
    position: "absolute",
    top: "0px",
    right: "0px",
    background: "#ff4d4f",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "12px",
    padding: "4px 4px",
fontSize: "11px"
  }}
              >
                Delete
              </button>

              <div onClick={() => navigate("/download", { state: item })}
                style={{
    transform: "scale(0.6)",
    transformOrigin: "top center",
    display: "flex",
    justifyContent: "center",
    background: "#fff",
    padding: "0px",
    borderRadius: "10px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)"
  }}>

                {item.templateId === 1 && <Template1 data={item} />}
                {item.templateId === 2 && <Template2 data={item} />}
                {item.templateId === 3 && <Template3 data={item} />}
                {item.templateId === 4 && <Template4 data={item} />}
                {item.templateId === 5 && <Template5 data={item} />}
                {item.templateId === 6 && <Template6 data={item} />}

              </div>

            </div>
          );
        })}

      </div>
    )}

  </div>
);
}

export default HistoryPage;