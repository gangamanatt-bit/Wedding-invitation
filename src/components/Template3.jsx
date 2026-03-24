import "../styles/Templates.css";

function Template3({ data }) {

  return (

    <div
      className="invitation-card"
      style={{
        backgroundImage: `url(/templates/t3.jpg)`
      }}
    >

       <div className="invitation-text">

        <p className="invite-line">
          Together with their families
        </p>

        <h1>
          {data?.bride || "Bride"} <span>&</span> {data?.groom || "Groom"}
        </h1>

        <p className="invite-line">
          request the pleasure of your company
          at their wedding celebration
        </p>

        <p className="invite-date">
          {data?.date || "Wedding Date"}
        </p>

        <p>
          {data?.time || "Wedding Time"}
        </p>

        <p className="invite-venue">
          {data?.venue || "Wedding Venue"}
        </p>

        <p className="invite-footer">
          We would be honoured by your presence
        </p>

      </div>

    </div>

  );
}

export default Template3;