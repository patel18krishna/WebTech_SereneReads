import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const FrameComponent8 = ({
  rectangle34,
  nameMasashiKishimoto,
  age49,
  nationalityJapanese,
  famousWorkNaruto,
  nameMasashiKishimotoContaGap,
  propPadding,
  age49Width,
  propHeight,
  propWidth,
}) => {
  const frameDiv6Style = useMemo(() => {
    return {
      ...getStyleValue("gap", nameMasashiKishimotoContaGap),
    };
  }, [nameMasashiKishimotoContaGap]);

  const readNowButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("padding", propPadding),
    };
  }, [propPadding]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      ...getStyleValue("width", age49Width),
    };
  }, [age49Width]);

  const nameMasashiKishimotoContainerStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
      ...getStyleValue("width", propWidth),
    };
  }, [propHeight, propWidth]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "24px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "40px",
        color: "#240a34",
        fontFamily: "Georgia",
        ...frameDiv6Style,
      }}
    >
      <img
        style={{
          height: "380px",
          width: "310px",
          position: "relative",
          borderRadius: "40px",
          objectFit: "cover",
          minHeight: "380px",
        }}
        loading="lazy"
        alt=""
        src={rectangle34}
      />
      <div
        style={{
          flex: "1",
          borderRadius: "40px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "93px 20px 93px 50px",
          boxSizing: "border-box",
          minWidth: "485px",
          maxWidth: "100%",
          ...readNowButtonStyle,
        }}
      >
        <div
          style={{
            height: "380px",
            width: "746px",
            position: "relative",
            borderRadius: "40px",
            backgroundColor: "#fff",
            display: "none",
            maxWidth: "100%",
            ...rectangleDiv1Style,
          }}
        />
        <div
          style={{
            height: "194px",
            width: "564px",
            position: "relative",
            display: "inline-block",
            flexShrink: "0",
            maxWidth: "100%",
            zIndex: "1",
            ...nameMasashiKishimotoContainerStyle,
          }}
        >
          <p style={{ margin: "0" }}>{nameMasashiKishimoto}</p>
          <p style={{ margin: "0" }}>{age49}</p>
          <p style={{ margin: "0" }}>{nationalityJapanese}</p>
          <p style={{ margin: "0" }}>{famousWorkNaruto}</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
