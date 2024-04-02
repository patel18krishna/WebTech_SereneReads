import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ItStartsWithUs = () => {
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
        padding: "36px 62px 78px 90px",
        gap: "71px",
        letterSpacing: "normal",
        textAlign: "left",
        fontSize: "20px",
        color: "#240a34",
        fontFamily: "Georgia",
      }}
    >
      <div
        style={{
          width: "1183px",
          height: "656px",
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
          height: "29px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "0px 0px 11.5px",
          boxSizing: "border-box",
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
          width: "455px",
          height: "56px",
          position: "relative",
          display: "inline-block",
          flexShrink: "0",
          maxWidth: "100%",
          zIndex: "1",
        }}
      >
        <p style={{ margin: "0", fontSize: "50px" }}>{`It Starts With Us `}</p>
        <p style={{ margin: "0" }}>&nbsp;</p>
        <p style={{ margin: "0" }}>&nbsp;</p>
      </b>
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
      >{`It Starts with Us is a romance novel by Colleen Hoover, published by Atria Books on October 18, 2022. It is the sequel to her 2016 best-selling novel It Ends with Us. The sequel was first announced in February 2022. It became Simon & Schuster's most pre-ordered book of all time. Hoover wrote the novel as a "thank you" to fans of the first novel.`}</section>
    </div>
  );
};

export default ItStartsWithUs;
