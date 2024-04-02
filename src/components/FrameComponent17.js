import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent17 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/book-rich-dad-poor-dad");
  }, [navigate]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "20px",
        color: "#fff",
        fontFamily: "Georgia",
      }}
    >
      <div
        style={{
          width: "1120px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "40px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            width: "1120px",
            position: "relative",
            backgroundColor: "#fff",
            display: "none",
            maxWidth: "100%",
          }}
        />
        <img
          style={{
            height: "326px",
            width: "200px",
            position: "relative",
            objectFit: "cover",
            zIndex: "1",
          }}
          loading="lazy"
          alt=""
          src="/rectangle-714@2x.png"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "46px 0px 0px",
            boxSizing: "border-box",
            minWidth: "428px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "35px",
            }}
          >
            <div
              style={{
                height: "96px",
                position: "relative",
                background: "linear-gradient(#240a34, #240a34), #006b0f",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <p style={{ margin: "0", fontSize: "50px" }}>Rich Dad Poor Dad</p>
              <p style={{ margin: "0" }}>by Robert Kiyosaki</p>
              <p style={{ margin: "0" }}>&nbsp;</p>
            </div>
            <div
              style={{
                backgroundColor: "#4f6f52",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "15px 42px",
                whiteSpace: "nowrap",
                cursor: "pointer",
                zIndex: "1",
              }}
              onClick={onGroupContainerClick}
            >
              <div
                style={{
                  height: "51px",
                  width: "195px",
                  position: "relative",
                  backgroundColor: "#4f6f52",
                  display: "none",
                }}
              />
              <b style={{ position: "relative", zIndex: "1" }}>Read Now</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent17;
