import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent14 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/book-harry-potter");
  }, [navigate]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 0px 3px",
        boxSizing: "border-box",
        gap: "110px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "50px",
        color: "#240a34",
        fontFamily: "Georgia",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          width: "1080px",
          position: "relative",
          backgroundColor: "#fff",
          display: "none",
          maxWidth: "100%",
        }}
      />
      <img
        style={{
          height: "323px",
          width: "200px",
          position: "relative",
          objectFit: "cover",
          zIndex: "1",
        }}
        loading="lazy"
        alt=""
        src="/rectangle-591@2x.png"
      />
      <div
        style={{
          width: "324px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "63px 0px 0px",
          boxSizing: "border-box",
          minWidth: "324px",
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
            gap: "34px",
          }}
        >
          <div
            style={{ alignSelf: "stretch", position: "relative", zIndex: "1" }}
          >
            <p style={{ margin: "0" }}>Harry Potter</p>
            <p style={{ margin: "0", fontSize: "20px" }}>&nbsp;</p>
          </div>
          <div
            style={{
              backgroundColor: "#4f6f52",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              padding: "15px 30px 11px 48px",
              whiteSpace: "nowrap",
              cursor: "pointer",
              zIndex: "1",
              fontSize: "20px",
              color: "#fff",
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
            <b
              style={{
                width: "117px",
                position: "relative",
                display: "inline-block",
                flexShrink: "0",
                zIndex: "1",
              }}
            >
              Read Now
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent14;
