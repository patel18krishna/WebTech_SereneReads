import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent12 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/book-after-lives");
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
          height: "326px",
          width: "200px",
          position: "relative",
          objectFit: "cover",
          zIndex: "1",
        }}
        loading="lazy"
        alt=""
        src="/rectangle-71@2x.png"
      />
      <div
        style={{
          width: "277px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "65px 0px 0px",
          boxSizing: "border-box",
          minWidth: "277px",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "42px",
          }}
        >
          <h1
            style={{
              margin: "0",
              alignSelf: "stretch",
              height: "81px",
              position: "relative",
              fontSize: "inherit",
              fontWeight: "400",
              fontFamily: "inherit",
              display: "inline-block",
              flexShrink: "0",
              zIndex: "1",
            }}
          >
            After Lives
          </h1>
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

export default FrameComponent12;
