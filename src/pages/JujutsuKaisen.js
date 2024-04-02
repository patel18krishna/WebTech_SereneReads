import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const JujutsuKaisen = () => {
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
        padding: "67px 60px 36px 96px",
        gap: "47.5px",
        letterSpacing: "normal",
        textAlign: "left",
        fontSize: "50px",
        color: "#240a34",
        fontFamily: "Georgia",
      }}
    >
      <div
        style={{
          width: "1183px",
          height: "594px",
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
      <div
        style={{
          width: "427px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 10px 7.5px",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <b
          style={{
            flex: "1",
            position: "relative",
            display: "inline-block",
            maxWidth: "100%",
            zIndex: "1",
          }}
        >
          Jujutsu Kaisen
        </b>
      </div>
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
        Jujutsu Kaisen is a Japanese manga series written and illustrated by
        Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine
        Weekly Shōnen Jump since March 2018, with its chapters collected and
        published in 25 tankōbon volumes as of January 2024.
      </section>
    </div>
  );
};

export default JujutsuKaisen;
