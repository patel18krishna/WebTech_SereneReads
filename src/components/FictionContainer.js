import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const FictionContainer = ({
  bookGenreCode,
  bookCategoryCode,
  propWidth,
  propAlignSelf,
  propOverflow,
  propWidth1,
  onGroupContainer1Click,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
    };
  }, [propWidth]);

  const image9IconStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf),
      ...getStyleValue("overflow", propOverflow),
      ...getStyleValue("width", propWidth1),
    };
  }, [propAlignSelf, propOverflow, propWidth1]);

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
        padding: "33px 69px 57px",
        boxSizing: "border-box",
        gap: "51px",
        cursor: "pointer",
        zIndex: "1",
        textAlign: "left",
        fontSize: "30px",
        color: "#240a34",
        fontFamily: "Georgia",
        ...groupDiv1Style,
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
      <img
        loading="lazy"
        alt=""
        src={bookGenreCode}
        style={{
          alignSelf: "stretch",
          height: "112px",
          position: "relative",
          maxWidth: "100%",
          overflow: "hidden",
          flexShrink: "0",
          objectFit: "cover",
          zIndex: "1",
          ...image9IconStyle,
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 3px 0px 4px",
        }}
      >
        <div style={{ position: "relative", zIndex: "1" }}>
          {bookCategoryCode}
        </div>
      </div>
    </div>
  );
};

export default FictionContainer;
