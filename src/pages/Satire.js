import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent15 from "../components/FrameComponent15";

const Satire = () => {
  const navigate = useNavigate();

  const onSereneReadsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      style={{
        width: "100%",
        height: "1024px",
        position: "relative",
        backgroundColor: "#f4f5f3",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "76px 71px 313px",
        boxSizing: "border-box",
        gap: "2992px",
        letterSpacing: "normal",
        textAlign: "left",
        fontSize: "30px",
        color: "#000",
        fontFamily: "Inter",
      }}
    >
      <section
        style={{
          width: "1209px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "69px",
          flexShrink: "0",
          debugCommit: "f6aba90",
          textAlign: "left",
          fontSize: "36px",
          color: "#000",
          fontFamily: "Georgia",
        }}
      >
        <b
          style={{ position: "relative", cursor: "pointer" }}
          onClick={onSereneReadsTextClick}
        >
          SereneReads
        </b>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            maxWidth: "100%",
          }}
        >
          <FrameComponent15 />
        </div>
      </section>
      <div
        style={{
          width: "504px",
          height: "36px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            width: "170px",
            position: "relative",
            display: "inline-block",
            flexShrink: "0",
            debugCommit: "f6aba90",
          }}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default Satire;
