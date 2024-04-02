import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const BiographyContainer = ({
  dimensionsCode,
  genreType,
  propPadding,
  propGap,
  propAlignSelf,
  propHeight,
  onGroupContainer3Click,
}) => {
  const groupDiv6Style = useMemo(() => {
    return {
      ...getStyleValue("padding", propPadding),
      ...getStyleValue("gap", propGap),
    };
  }, [propPadding, propGap]);

  const nightStoryStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf),
      ...getStyleValue("height", propHeight),
    };
  }, [propAlignSelf, propHeight]);

  return (
    <div
      onClick={onGroupContainer3Click}
      style={{
        height: "289px",
        width: "241px",
        borderRadius: "40px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "42px 41px 47px",
        boxSizing: "border-box",
        gap: "52px",
        cursor: "pointer",
        textAlign: "left",
        fontSize: "30px",
        color: "#240a34",
        fontFamily: "Georgia",
        ...groupDiv6Style,
      }}
    >
      <div
        style={{
          width: "241px",
          height: "289px",
          position: "relative",
          borderRadius: "40px",
          backgroundColor: "#fff",
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
          padding: "0px 27px 0px 29px",
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
          src={dimensionsCode}
        />
      </div>
      <div style={{ position: "relative", zIndex: "1", ...nightStoryStyle }}>
        {genreType}
      </div>
    </div>
  );
};

export default BiographyContainer;
