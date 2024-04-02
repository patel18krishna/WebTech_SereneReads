import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const GroupComponent = ({
  rectangle17,
  nameMasashiKishimoto,
  age49,
  nationalityJapanese,
  famousWorkNaruto,
  propAlignSelf,
  propFlex,
  propFlexWrap,
  propPadding,
  propMinWidth,
  propMinHeight,
  onGroupContainer2Click,
}) => {
  const groupDiv3Style = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf),
      ...getStyleValue("flex", propFlex),
      ...getStyleValue("flexWrap", propFlexWrap),
    };
  }, [propAlignSelf, propFlex, propFlexWrap]);

  const frameDiv2Style = useMemo(() => {
    return {
      ...getStyleValue("padding", propPadding),
      ...getStyleValue("minWidth", propMinWidth),
      ...getStyleValue("minHeight", propMinHeight),
    };
  }, [propPadding, propMinWidth, propMinHeight]);

  return (
    <div
      onClick={onGroupContainer2Click}
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "63px",
        maxWidth: "100%",
        cursor: "pointer",
        textAlign: "left",
        fontSize: "30px",
        color: "#240a34",
        fontFamily: "Georgia",
        ...groupDiv3Style,
      }}
    >
      <img
        style={{
          height: "289px",
          width: "241px",
          position: "relative",
          borderRadius: "40px",
          objectFit: "cover",
        }}
        loading="lazy"
        alt=""
        src={rectangle17}
      />
      <div
        style={{
          flex: "1",
          borderRadius: "40px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "47px 72px",
          boxSizing: "border-box",
          minWidth: "359px",
          minHeight: "248px",
          maxWidth: "100%",
          ...frameDiv2Style,
        }}
      >
        <div
          style={{
            height: "248px",
            width: "728px",
            position: "relative",
            borderRadius: "40px",
            backgroundColor: "#fff",
            display: "none",
            maxWidth: "100%",
          }}
        />
        <div style={{ position: "relative", zIndex: "1" }}>
          <p style={{ margin: "0" }}>{nameMasashiKishimoto}</p>
          <p style={{ margin: "0" }}>{age49}</p>
          <p style={{ margin: "0" }}>{nationalityJapanese}</p>
          <p style={{ margin: "0" }}>{famousWorkNaruto}</p>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
