import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent13 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/book-the-other-name");
  }, [navigate]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        gap: "107px",
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
        src="/rectangle-711@2x.png"
      />
      <div
        style={{
          width: "411px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          minWidth: "411px",
          minHeight: "248px",
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
            gap: "61px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 0px 0px 3px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <h1
              style={{
                margin: "0",
                height: "60px",
                flex: "1",
                position: "relative",
                fontSize: "inherit",
                fontWeight: "400",
                fontFamily: "inherit",
                display: "inline-block",
                maxWidth: "100%",
                zIndex: "1",
              }}
            >
              The Other Name
            </h1>
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

export default FrameComponent13;
