import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent17 from "../components/FrameComponent17";

const SelfHelp = () => {
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
        padding: "76px 71px 247px",
        boxSizing: "border-box",
        gap: "2926px",
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
          gap: "124px",
          flexShrink: "0",
          debugCommit: "612783b",
          textAlign: "left",
          fontSize: "36px",
          color: "#000",
          fontFamily: "Georgia",
        }}
      >
        <div
          style={{
            width: "847px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "91px",
            maxWidth: "100%",
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
              fontSize: "30px",
              color: "#fff",
            }}
          >
            <div
              style={{
                width: "396px",
                borderRadius: "40px",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "space-between",
                padding: "0px 0px 0px 70px",
                boxSizing: "border-box",
                maxWidth: "100%",
                gap: "20px",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  width: "396px",
                  position: "relative",
                  borderRadius: "40px",
                  backgroundColor: "#fff",
                  display: "none",
                  maxWidth: "100%",
                }}
              />
              <div
                style={{
                  height: "97px",
                  width: "69.9px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 21px",
                  boxSizing: "border-box",
                }}
              >
                <img
                  style={{
                    alignSelf: "stretch",
                    flex: "1",
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    maxHeight: "100%",
                    objectFit: "cover",
                    zIndex: "1",
                  }}
                  loading="lazy"
                  alt=""
                  src="/image-142@2x.png"
                />
              </div>
              <div
                style={{
                  width: "196px",
                  borderRadius: "0px 40px 40px 0px",
                  backgroundColor: "#240a34",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "42px 32px 41px",
                  boxSizing: "border-box",
                  minWidth: "196px",
                  zIndex: "1",
                }}
              >
                <div
                  style={{
                    height: "119px",
                    width: "196px",
                    position: "relative",
                    borderRadius: "0px 40px 40px 0px",
                    backgroundColor: "#240a34",
                    display: "none",
                  }}
                />
                <div style={{ flex: "1", position: "relative", zIndex: "2" }}>
                  Self-help
                </div>
              </div>
            </div>
          </div>
        </div>
        <FrameComponent17 />
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
            debugCommit: "612783b",
          }}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default SelfHelp;
