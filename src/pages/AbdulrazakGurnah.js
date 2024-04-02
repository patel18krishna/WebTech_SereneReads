import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AbdulNameBox from "../components/AbdulNameBox";
import FrameComponent12 from "../components/FrameComponent12";

const AbdulrazakGurnah = () => {
  const navigate = useNavigate();

  const onSereneReadsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      style={{
        width: "100%",
        height: "1294px",
        position: "relative",
        backgroundColor: "#f4f5f3",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "76px 71px 248px",
        boxSizing: "border-box",
        gap: "135px",
        letterSpacing: "normal",
        textAlign: "left",
        fontSize: "36px",
        color: "#000",
        fontFamily: "Georgia",
      }}
    >
      <h2
        style={{
          margin: "0",
          position: "relative",
          fontSize: "inherit",
          fontWeight: "700",
          fontFamily: "inherit",
          flexShrink: "0",
          cursor: "pointer",
        }}
        onClick={onSereneReadsTextClick}
      >
        SereneReads
      </h2>
      <main
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0px 0px 2522px 2px",
          boxSizing: "border-box",
          maxWidth: "100%",
          flexShrink: "0",
        }}
      >
        <section
          style={{
            width: "1082px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "88px",
            maxWidth: "100%",
          }}
        >
          <AbdulNameBox
            rectangle30="/rectangle-30@2x.png"
            nameAbdulrazakGurnah="Name: 	Abdulrazak Gurnah
"
            age75="Age: 75"
            nationalityTanzanianBriti="Nationality: Tanzanian-British
"
            famousWorkAfterLives="Famous work: After Lives"
          />
          <FrameComponent12 />
        </section>
      </main>
      <div
        style={{
          width: "504px",
          height: "36px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          maxWidth: "100%",
          fontSize: "30px",
          fontFamily: "Inter",
        }}
      >
        <h3
          style={{
            margin: "0",
            alignSelf: "stretch",
            width: "170px",
            position: "relative",
            fontSize: "inherit",
            fontWeight: "400",
            fontFamily: "inherit",
            display: "inline-block",
            flexShrink: "0",
          }}
        >
          Contact Us
        </h3>
      </div>
    </div>
  );
};

export default AbdulrazakGurnah;
