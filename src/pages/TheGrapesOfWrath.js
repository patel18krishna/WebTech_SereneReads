import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const TheGrapesOfWrath = () => {
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
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "59px 54px 73px 106px",
        gap: "108px",
        letterSpacing: "normal",
      }}
    >
      <div
        style={{
          width: "1183px",
          height: "724px",
          position: "relative",
          borderRadius: "40px",
          backgroundColor: "#fff",
          border: "1px solid #000",
          boxSizing: "border-box",
          display: "none",
          maxWidth: "100%",
        }}
      />
      <header
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "95.5px",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "50px",
          color: "#240a34",
          fontFamily: "Georgia",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            height: "17.5px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <img
            style={{
              height: "17.5px",
              width: "17.5px",
              position: "relative",
              cursor: "pointer",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/group-71.svg"
            onClick={onGroupIconClick}
          />
        </div>
        <b
          style={{
            width: "563px",
            position: "relative",
            display: "inline-block",
            whiteSpace: "nowrap",
            maxWidth: "100%",
            zIndex: "1",
          }}
        >
          The Grapes of Wrath
        </b>
      </header>
      <section
        style={{
          width: "950px",
          height: "315px",
          position: "relative",
          fontSize: "40px",
          fontFamily: "Georgia",
          color: "#240a34",
          textAlign: "justify",
          display: "inline-block",
          flexShrink: "0",
          maxWidth: "100%",
          zIndex: "1",
        }}
      >
        <p style={{ margin: "0" }}>
          The Grapes of Wrath is an American realist novel written by John
          Steinbeck and published in 1939. The book won the National Book Award
          and Pulitzer Prize for fiction, and it was cited prominently when
          Steinbeck was awarded the Nobel Prize in Literature in 1962.
        </p>
      </section>
    </div>
  );
};

export default TheGrapesOfWrath;
