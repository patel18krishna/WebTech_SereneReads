import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const HistoricalFictionContainer = ({
  bookGenreCode,
  bookCategoryCode,
  propGap,
  propAlignSelf,
  propHeight,
  propWidth,
  onGroupContainer1Click,
}) => {
  const groupDiv2Style = useMemo(() => {
    return {
      ...getStyleValue("gap", propGap),
    };
  }, [propGap]);

  const historicalFictionStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf),
      ...getStyleValue("height", propHeight),
      ...getStyleValue("width", propWidth),
    };
  }, [propAlignSelf, propHeight, propWidth]);

  return (
    <div
      onClick={onGroupContainer1Click}
      style={{
        height: "289px",
        width: "241px",
        borderRadius: "40px",
        backgroundColor: "#f4f5f3",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "33px 52px 37px",
        boxSizing: "border-box",
        gap: "35px",
        cursor: "pointer",
        zIndex: "1",
        textAlign: "left",
        fontSize: "30px",
        color: "#240a34",
        fontFamily: "Georgia",
        ...groupDiv2Style,
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
          padding: "0px 14px 0px 20px",
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
          src={bookGenreCode}
        />
      </div>
      <div
        style={{
          alignSelf: "stretch",
          height: "72px",
          position: "relative",
          display: "inline-block",
          flexShrink: "0",
          zIndex: "1",
          ...historicalFictionStyle,
        }}
      >
        {bookCategoryCode}
      </div>
    </div>
  );
};

export default HistoricalFictionContainer;
