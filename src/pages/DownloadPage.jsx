import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import Template1 from "../components/Template1";
import Template2 from "../components/Template2";
import Template3 from "../components/Template3";
import Template4 from "../components/Template4";
import Template5 from "../components/Template5";
import Template6 from "../components/Template6";

import "../styles/DownloadPage.css";

function DownloadPage() {


  const navigate = useNavigate();
  const location = useLocation();
  const cardRef = useRef();

  const [data, setData] = useState(location.state || {});
  const [editData, setEditData] = useState(data);
  const [showModal, setShowModal] = useState(false);
  const [showDownload, setShowDownload] = useState(false);

  useEffect(() => {
    const handleClick = () => setShowDownload(false);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const updateField = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = () => {
    setData(editData);
    setShowModal(false);
  };

  const downloadImage = async () => {

    setShowDownload(false);   // close menu immediately

    const canvas = await html2canvas(cardRef.current, { scale: 3 });

    const link = document.createElement("a");
    link.download = "invitation.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  const downloadPDF = async () => {

    setShowDownload(false);   // close menu immediately

    const canvas = await html2canvas(cardRef.current, { scale: 3 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(imgData, "PNG", 15, 40, 180, 120);
    pdf.save("invitation.pdf");
  };
  return (

    <div className="download-page">

      {/* TOP BAR */}

      <div className="top-bar">

        <button onClick={() => navigate(-1)}>← Back</button>

        <button onClick={() => navigate("/")}>Reload</button>

        <button
          onClick={() => {
            setEditData(data);
            setShowModal(true);
          }}
        >
          Edit
        </button>

        <div className="download-container">

          <button
            onClick={(e) => {
              e.stopPropagation();   // prevents closing
              setShowDownload(!showDownload);
            }}
          >
            Download
          </button>

          {showDownload && (

            <div className="download-menu">

              <button onClick={downloadImage}>
                Download Image
              </button>

              <button onClick={downloadPDF}>
                Download PDF
              </button>

            </div>

          )}

        </div>

      </div>


      {/* PREVIEW */}

      <div className="preview-wrapper">

        <div className="card-preview" ref={cardRef}>

          {data.templateId === 1 && <Template1 data={data} />}
          {data.templateId === 2 && <Template2 data={data} />}
          {data.templateId === 3 && <Template3 data={data} />}
          {data.templateId === 4 && <Template4 data={data} />}
          {data.templateId === 5 && <Template5 data={data} />}
          {data.templateId === 6 && <Template6 data={data} />}

        </div>

      </div>


      {/* EDIT MODAL */}

      {showModal && (

        <div className="modal-overlay">

          <div className="modal">

            <h2>Edit Invitation</h2>

            <input
              name="bride"
              value={editData.bride || ""}
              onChange={updateField}
              placeholder="Bride Name"
            />

            <input
              name="groom"
              value={editData.groom || ""}
              onChange={updateField}
              placeholder="Groom Name"
            />

            <input
              name="date"
              value={editData.date || ""}
              onChange={updateField}
              placeholder="Wedding Date"
            />

            <input
              name="time"
              value={editData.time || ""}
              onChange={updateField}
              placeholder="Wedding Time"
            />

            <input
              name="venue"
              value={editData.venue || ""}
              onChange={updateField}
              placeholder="Venue"
            />
            <input
              name="inviteLine"
              value={editData.inviteLine || ""}
              onChange={updateField}
              placeholder="Invitation Line"
            />

            <input
              name="requestLine"
              value={editData.requestLine || ""}
              onChange={updateField}
              placeholder="Request Line"
            />

            <div className="modal-buttons">

              <button onClick={() => setShowModal(false)}>
                Cancel
              </button>

              <button onClick={handleUpdate}>
                Update
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default DownloadPage;