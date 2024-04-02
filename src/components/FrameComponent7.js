import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const FrameComponent7 = ({
  rectangle59,
  theFrogPrince,
  byUnknown,
  propWidth,
  propPadding,
  propGap,
  propHeight,
  propPadding1,
  propWidth1,
  propFlex,
  frameDivPadding,
  onGroupContainerClick,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const frameDiv3Style = useMemo(() => {
    return {
      ...getStyleValue("padding", propPadding),
    };
  }, [propPadding]);

  const frameDiv4Style = useMemo(() => {
    return {
      ...getStyleValue("gap", propGap),
    };
  }, [propGap]);

  const theFrogPrinceContainerStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  const groupDiv4Style = useMemo(() => {
    return {
      ...getStyleValue("padding", propPadding1),
      ...getStyleValue("width", propWidth1),
    };
  }, [propPadding1, propWidth1]);

  const readNowStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex),
    };
  }, [propFlex]);

  const frameDiv5Style = useMemo(() => {
    return {
      ...getStyleValue("padding", frameDivPadding),
    };
  }, [frameDivPadding]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "3px 0px 0px",
        boxSizing: "border-box",
        gap: "40px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "20px",
        color: "#240a34",
        fontFamily: "Georgia",
        ...frameDiv5Style,
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
          ...rectangleDivStyle,
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
        src={rectangle59}
      />
      <div
        style={{
          width: "583px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "41px 0px 0px",
          boxSizing: "border-box",
          minWidth: "583px",
          maxWidth: "100%",
          ...frameDiv3Style,
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "67px",
            ...frameDiv4Style,
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              height: "77px",
              position: "relative",
              display: "inline-block",
              flexShrink: "0",
              zIndex: "1",
              ...theFrogPrinceContainerStyle,
            }}
          >
            <p style={{ margin: "0", fontSize: "50px" }}>{theFrogPrince}</p>
            <p style={{ margin: "0" }}>{byUnknown}</p>
            <p style={{ margin: "0" }}>&nbsp;</p>
          </div>
          <button
                    style={{
                      cursor: "pointer",
                      border: "none",
                      padding: "15px 57px 15px 58px",
                      backgroundColor: "#4f6f52",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      whiteSpace: "nowrap",
                      zIndex: "1",
                    }}
                    onClick={onGroupContainerClick}
                  >
                    <div
                      style={{
                        height: "51px",
                        width: "215px",
                        position: "relative",
                        backgroundColor: "#4f6f52",
                        display: "none",
                      }}
                    />
                    <b
                      style={{
                        position: "relative",
                        fontSize: "20px",
                        fontFamily: "Inter",
                        color: "#fff",
                        textAlign: "left",
                        zIndex: "1",
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

export default FrameComponent7;
