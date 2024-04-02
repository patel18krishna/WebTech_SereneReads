import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const HorrorContainer = ({
  dimensionCode,
  genreCode,
  propWidth,
  propAlignSelf,
  propFlex,
  onGroupContainer4Click,
}) => {
  const groupDiv7Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const frameDiv7Style = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf),
    };
  }, [propAlignSelf]);

  const horrorStyle = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex),
    };
  }, [propFlex]);

  return (
    <div
      onClick={onGroupContainer4Click}
      style={{
        height: "289px",
        borderRadius: "40px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "48px 65px 57px 70px",
        boxSizing: "border-box",
        gap: "36px",
        cursor: "pointer",
        textAlign: "left",
        fontSize: "30px",
        color: "#240a34",
        fontFamily: "Georgia",
        ...groupDiv7Style,
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
      <img
        style={{
          width: "103px",
          height: "112px",
          position: "relative",
          objectFit: "cover",
          zIndex: "1",
        }}
        loading="lazy"
        alt=""
        src={dimensionCode}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 0px 11px",
          ...frameDiv7Style,
        }}
      >
        <div style={{ position: "relative", zIndex: "1", ...horrorStyle }}>
          {genreCode}
        </div>
      </div>
    </div>
  );
};

export default HorrorContainer;
