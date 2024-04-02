import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const FrameComponent16 = ({
  image15,
  civilWar,
  byMarkMillarSteveMcnivenD,
  propPadding,
  propGap,
  propHeight,
  propPadding1,
  propMarginTop,
  propMinWidth,
  onGroupButtonClick,
}) => {
  const frameDiv10Style = useMemo(() => {
    return {
      ...getStyleValue("padding", propPadding),
    };
  }, [propPadding]);

  const civilWarBookStyle = useMemo(() => {
    return {
      ...getStyleValue("gap", propGap),
    };
  }, [propGap]);

  const civilWarByContainerStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  const groupButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("padding", propPadding1),
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propPadding1, propMarginTop]);

  const readNow1Style = useMemo(() => {
    return {
      ...getStyleValue("minWidth", propMinWidth),
    };
  }, [propMinWidth]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "40px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "20px",
        color: "#240a34",
        fontFamily: "Georgia",
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
        src={image15}
      />
      <div
        style={{
          width: "583px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "31px 0px 0px",
          boxSizing: "border-box",
          minWidth: "583px",
          maxWidth: "100%",
          ...frameDiv10Style,
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "36px",
            ...civilWarBookStyle,
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              height: "96px",
              position: "relative",
              display: "inline-block",
              flexShrink: "0",
              zIndex: "1",
              ...civilWarByContainerStyle,
            }}
          >
            <p style={{ margin: "0", fontSize: "50px" }}>{civilWar}</p>
            <p style={{ margin: "0" }}>{byMarkMillarSteveMcnivenD}</p>
            <p style={{ margin: "0" }}>&nbsp;</p>
          </div>
          <button
            onClick={onGroupButtonClick}
            style={{
              cursor: "pointer",
              border: "none",
              padding: "13px 34px 17px",
              backgroundColor: "#4f6f52",
              width: "195px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              boxSizing: "border-box",
              whiteSpace: "nowrap",
              zIndex: "1",
              ...groupButtonStyle,
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
            <b
              style={{
                position: "relative",
                fontSize: "20px",
                display: "inline-block",
                fontFamily: "Georgia",
                color: "#fff",
                textAlign: "left",
                minWidth: "113px",
                zIndex: "1",
                ...readNow1Style,
              }}
            >
              Read Now
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent16;
