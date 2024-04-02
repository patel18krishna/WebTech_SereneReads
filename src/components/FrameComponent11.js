import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const FrameComponent11 = ({
  image5,
  poetry,
  propPadding,
  propGap,
  propAlignSelf,
  onGroupContainerClick,
}) => {
  const groupDiv5Style = useMemo(() => {
    return {
      ...getStyleValue("padding", propPadding),
      ...getStyleValue("gap", propGap),
    };
  }, [propPadding, propGap]);

  const poetryStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf),
    };
  }, [propAlignSelf]);

  return (
    <div
      style={{
        height: "289px",
        width: "252px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 11px 0px 0px",
        boxSizing: "border-box",
        textAlign: "left",
        fontSize: "30px",
        color: "#240a34",
        fontFamily: "Georgia",
      }}
    >
      <div
        onClick={onGroupContainerClick}
        style={{
          alignSelf: "stretch",
          flex: "1",
          borderRadius: "40px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "43px 69px 47px",
          gap: "52px",
          cursor: "pointer",
          ...groupDiv5Style,
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
            alignSelf: "stretch",
            height: "111px",
            position: "relative",
            maxWidth: "100%",
            overflow: "hidden",
            flexShrink: "0",
            objectFit: "cover",
            zIndex: "1",
          }}
          loading="lazy"
          alt=""
          src={image5}
        />
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            zIndex: "1",
            ...poetryStyle,
          }}
        >
          {poetry}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent11;
