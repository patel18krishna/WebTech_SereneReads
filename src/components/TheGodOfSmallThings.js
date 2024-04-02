import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const TheGodOfSmallThings = () => {
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
        padding: "59px 60px 0px",
        gap: "95.5px",
        letterSpacing: "normal",
      }}
    >
      <header
        style={{
          width: "1183px",
          height: "597px",
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
          padding: "0px 45px",
          boxSizing: "border-box",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "20px",
          color: "#240a34",
          fontFamily: "Georgia",
        }}
      >
        <div
          style={{
            width: "950px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 0px 369px",
            boxSizing: "border-box",
            gap: "63px",
            maxWidth: "100%",
          }}
        >
          <b
            style={{
              width: "645px",
              position: "relative",
              display: "inline-block",
              flexShrink: "0",
              debugCommit: "f6aba90",
              zIndex: "1",
            }}
          >
            <p
              style={{ margin: "0", fontSize: "50px" }}
            >{`The God of Small Things `}</p>
            <p style={{ margin: "0" }}>&nbsp;</p>
            <p style={{ margin: "0" }}>&nbsp;</p>
          </b>
          <div
            style={{
              alignSelf: "stretch",
              height: "315px",
              position: "relative",
              fontSize: "40px",
              textAlign: "justify",
              display: "inline-block",
              flexShrink: "0",
              debugCommit: "f6aba90",
              zIndex: "1",
            }}
          >
            The God of Small Things is a family drama novel written by Indian
            writer Arundhati Roy. It is a story about the childhood experiences
            of fraternal twins whose lives are destroyed by the "Love Laws"
            prevalent in 1960s Kerala, India.
          </div>
        </div>
      </section>
    </div>
  );
};

export default TheGodOfSmallThings;
