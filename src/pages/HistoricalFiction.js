import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent18 from "../components/FrameComponent18";

const HistoricalFiction = () => {
  const navigate = useNavigate();

  const onSereneReadsTextClick = useCallback(() => {
    navigate("/");
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
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "76px 71px 335px",
        boxSizing: "border-box",
        gap: "69px",
        letterSpacing: "normal",
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
          gap: "58px",
          maxWidth: "100%",
        }}
      >
        <h2
          style={{
            margin: "0",
            position: "relative",
            fontSize: "inherit",
            fontWeight: "700",
            fontFamily: "inherit",
            cursor: "pointer",
          }}
          onClick={onSereneReadsTextClick}
        >
          SereneReads
        </h2>
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
              padding: "0px 0px 0px 61px",
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
                height: "100px",
                width: "76px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 0px 17.399999999999636px",
                boxSizing: "border-box",
                minWidth: "76px",
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
                src="/image-12@2x.png"
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
                padding: "30px 25px 29px",
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
              <div
                style={{
                  height: "60px",
                  flex: "1",
                  position: "relative",
                  display: "inline-block",
                  zIndex: "2",
                }}
              >
                Historical Fiction
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent18 />
    </div>
  );
};

export default HistoricalFiction;
