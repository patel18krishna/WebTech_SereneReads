import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const CivilWar = () => {
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
        padding: "58px 76px 58px 78px",
        gap: "51px",
        letterSpacing: "normal",
      }}
    >
      <div
        style={{
          width: "1183px",
          height: "489px",
          position: "relative",
          borderRadius: "40px",
          backgroundColor: "#fff",
          border: "1px solid #000",
          boxSizing: "border-box",
          display: "none",
          maxWidth: "100%",
        }}
      />
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "20.5px",
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
        <h2
          style={{
            margin: "0",
            width: "263px",
            position: "relative",
            fontSize: "inherit",
            fontWeight: "700",
            fontFamily: "inherit",
            display: "inline-block",
            zIndex: "1",
          }}
        >
          Civil War
        </h2>
      </section>
      <section
        style={{
          width: "950px",
          height: "228px",
          position: "relative",
          fontSize: "30px",
          fontFamily: "Georgia",
          color: "#240a34",
          textAlign: "justify",
          display: "inline-block",
          flexShrink: "0",
          maxWidth: "100%",
          zIndex: "1",
        }}
      >
        "Civil War" is a 2006–07 Marvel Comics crossover event. The storyline
        consists of an eponymous seven-issue limited series, written by Mark
        Millar and penciled by Steve McNiven, and various tie-in books. The
        storyline builds upon previous Marvel storylines, particularly "Avengers
        Disassembled", "House of M", and "Decimation". The series' tagline is
        "Whose Side Are You On?"
      </section>
    </div>
  );
};

export default CivilWar;
