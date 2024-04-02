import { useCallback } from "react";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";

const Home = () => {
  const navigate = useNavigate();

  const onGENRESTextClick = useCallback(() => {
    navigate("/genres");
  }, [navigate]);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#f4f5f3",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "75px 0px 2px",
        boxSizing: "border-box",
        gap: "53px",
        letterSpacing: "normal",
      }}
    >
      <FrameComponent6 />
      <FrameComponent5 />
      <section
        style={{
          alignSelf: "stretch",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "44px 66px 109px 71px",
          boxSizing: "border-box",
          gap: "95px",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "50px",
          color: "#240a34",
          fontFamily: "Georgia",
        }}
      >
        <div
          style={{
            width: "1440px",
            height: "954px",
            position: "relative",
            backgroundColor: "#fff",
            display: "none",
            maxWidth: "100%",
          }}
        />
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "0px 6px 0px 0px",
          }}
        >
          <h2
            style={{
              margin: "0",
              height: "60px",
              width: "241px",
              position: "relative",
              fontSize: "inherit",
              textDecoration: "underline",
              fontWeight: "700",
              fontFamily: "inherit",
              display: "inline-block",
              flexShrink: "0",
              cursor: "pointer",
              zIndex: "1",
            }}
            onClick={onGENRESTextClick}
          >
            GENRES
          </h2>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "68px",
          }}
        >
          <FrameComponent3 />
          <FrameComponent2 />
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default Home;
