import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AHeartThatWorks = () => {
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
        padding: "73px 68px 78px 86px",
        gap: "54px",
        letterSpacing: "normal",
      }}
    >
      <div
        style={{
          width: "1183px",
          height: "726px",
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
          gap: "42.5px",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "50px",
          color: "#240a34",
          fontFamily: "Georgia",
        }}
      >
        <header
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
        </header>
        <b
          style={{
            width: "536px",
            position: "relative",
            display: "inline-block",
            whiteSpace: "nowrap",
            maxWidth: "100%",
            zIndex: "1",
          }}
        >
          A Heart That Works
        </b>
      </section>
      <section
        style={{
          width: "950px",
          position: "relative",
          fontSize: "40px",
          fontFamily: "Georgia",
          color: "#240a34",
          textAlign: "justify",
          display: "inline-block",
          maxWidth: "100%",
          zIndex: "1",
        }}
      >
        A Heart That Works is a memoir by Rob Delaney, an American actor,
        comedian, and writer. It was published in 2022 and is a Sunday Times
        bestseller. In the book, Delaney writes about the experience of losing
        his two-year-old son, Henry, to cancer. The book is a 196-page
        exploration of grief, the mysteries of death, and the question of
        purpose for those left behind. Delaney's writing is described as
        "intimate, unflinching, and fiercely funny".
      </section>
    </div>
  );
};

export default AHeartThatWorks;
