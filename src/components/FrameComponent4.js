import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const FrameComponent4 = ({
  image4,
  nightStory,
  propWidth,
  propPadding,
  propPadding1,
  onGroupContainer3Click,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const groupDivStyle = useMemo(() => {
    return {
      ...getStyleValue("padding", propPadding),
    };
  }, [propPadding]);

  const frameDiv1Style = useMemo(() => {
    return {
      ...getStyleValue("padding", propPadding1),
    };
  }, [propPadding1]);

  return (
    <div
      style={{
        height: "289px",
        width: "265px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 24px 0px 0px",
        boxSizing: "border-box",
        textAlign: "left",
        fontSize: "30px",
        color: "#240a34",
        fontFamily: "Georgia",
        ...frameDivStyle,
      }}
    >
      <div
        onClick={onGroupContainer3Click}
        style={{
          alignSelf: "stretch",
          flex: "1",
          borderRadius: "40px",
          backgroundColor: "#f4f5f3",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "33px 41px 57px",
          gap: "51px",
          cursor: "pointer",
          zIndex: "1",
          ...groupDivStyle,
        }}
      >
        <div
          style={{
            width: "241px",
            height: "289px",
            position: "relative",
            borderRadius: "40px",
            backgroundColor: "#f4f5f3",
            display: "none",
          }}
        />
        <div
          style={{
            alignSelf: "stretch",
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 31px 0px 25px",
            ...frameDiv1Style,
          }}
        >
          <img
            style={{
              height: "112px",
              flex: "1",
              position: "relative",
              maxWidth: "100%",
              overflow: "hidden",
              objectFit: "cover",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src={image4}
          />
        </div>
        <div style={{ position: "relative", zIndex: "1" }}>{nightStory}</div>
      </div>
    </div>
  );
};

export default FrameComponent4;
