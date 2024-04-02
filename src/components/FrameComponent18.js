import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent18 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/book-after-lives");
  }, [navigate]);

  return (
    <section
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0px 0px 0px 4px",
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
          width: "1122px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 3px",
          boxSizing: "border-box",
          gap: "37px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            width: "1122px",
            position: "relative",
            backgroundColor: "#fff",
            display: "none",
            maxWidth: "100%",
          }}
        />
        <img
          style={{
            height: "323px",
            width: "203px",
            position: "relative",
            objectFit: "cover",
            zIndex: "1",
          }}
          loading="lazy"
          alt=""
          src="/rectangle-715@2x.png"
        />
        <div
          style={{
            width: "599px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "38px 0px 0px",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: "133px",
                position: "relative",
                display: "inline-block",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              <p style={{ margin: "0", fontSize: "50px" }}>After Lives</p>
              <p style={{ margin: "0" }}>by Abdulrazak Gurnah</p>
              <p style={{ margin: "0" }}>&nbsp;</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                cursor: "pointer",
                zIndex: "1",
                color: "#fff",
              }}
              onClick={onGroupContainerClick}
            >
              <div
                style={{
                  backgroundColor: "#4f6f52",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "15px 43px",
                  whiteSpace: "nowrap",
                }}
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
    </section>
  );
};

export default FrameComponent18;
