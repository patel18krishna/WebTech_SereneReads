import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const TheOtherName = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/top-picks");
  }, [navigate]);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        borderRadius: "40px",
        backgroundColor: "#fff",
        border: "1px solid #000",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "77px 82px 84px 83px",
        gap: "79.5px",
        letterSpacing: "normal",
      }}
    >
      <div
        style={{
          width: "1183px",
          height: "827px",
          position: "relative",
          borderRadius: "40px",
          backgroundColor: "#fff",
          border: "1px solid #000",
          boxSizing: "border-box",
          display: "none",
          maxWidth: "100%",
        }}
      />
      <img
        style={{
          width: "17.5px",
          height: "17.5px",
          position: "relative",
          cursor: "pointer",
          zIndex: "1",
        }}
        loading="lazy"
        alt=""
        src="/group-71.svg"
        onClick={onGroupIconClick}
      />
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 32.5px 0px 33px",
          boxSizing: "border-box",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "50px",
          color: "#240a34",
          fontFamily: "Georgia",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "43px",
            maxWidth: "100%",
          }}
        >
          <b
            style={{
              alignSelf: "stretch",
              height: "121px",
              position: "relative",
              display: "inline-block",
              flexShrink: "0",
              zIndex: "1",
            }}
          >{`The Other Name - Septology Part - I & II`}</b>
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              fontSize: "40px",
              textAlign: "justify",
              zIndex: "1",
            }}
          >
            <p style={{ margin: "0" }}>
              The Other Name: Septology I-II is a book by Norwegian author Jon
              Fosse. It is the first part of a septet, a dark and ecstatic story
              about art and God. The book follows the lives of two men living
              close to each other on the west coast of Norway. One of the
              characters is Asle, an aging painter and widower who lives alone.
              His only friends are his neighbor, Åsleik, a traditional
              fisherman-farmer, and Beyer, a gallerist who lives in the city.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheOtherName;
