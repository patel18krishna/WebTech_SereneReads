import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const FrameComponent161 = ({
  image14,
  satire,
  rectangleDivPadding,
  rectangleDivGap,
  rectangleDivWidth,
  propPadding,
  propMinWidth,
}) => {
  const frameDiv9Style = useMemo(() => {
    return {
      ...getStyleValue("padding", rectangleDivPadding),
      ...getStyleValue("gap", rectangleDivGap),
      ...getStyleValue("width", rectangleDivWidth),
    };
  }, [rectangleDivPadding, rectangleDivGap, rectangleDivWidth]);

  const frameButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("padding", propPadding),
    };
  }, [propPadding]);

  const satireStyle = useMemo(() => {
    return {
      ...getStyleValue("minWidth", propMinWidth),
    };
  }, [propMinWidth]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0px 20px",
        boxSizing: "border-box",
        maxWidth: "100%",
      }}
    >
      <div
        style={{
          width: "396",
          borderRadius: "40px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          padding: "0px 0px 0px 58px",
          boxSizing: "border-box",
          maxWidth: "100%",
          gap: "20px",
          ...frameDiv9Style,
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            width: "396px",
            position: "relative",
            borderRadius: "40px",
            backgroundColor: "#fff",
            display: "none",
            maxWidth: "100%",
          }}
        />
        <div
          style={{
            height: "97px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 0px 17px",
            boxSizing: "border-box",
          }}
        >
          <img
            style={{
              width: "76px",
                      height: "76px",
                      position: "relative",
                      objectFit: "cover",
                      zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src={image14}
          />
        </div>
        <button
          style={{
            cursor: "pointer",
            border: "none",
            padding: "42px 37px 41px 45px",
            backgroundColor: "#240a34",
            borderRadius: "0px 40px 40px 0px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            boxSizing: "border-box",
            minWidth: "196px",
            zIndex: "1",
            ...frameButtonStyle,
          }}
        >
          <div
            style={{
              height: "119px",
              width: "196px",
              position: "relative",
              borderRadius: "0px 40px 40px 0px",
              backgroundColor: "#240a34",
              display: "none",
            }}
          />
          <div
            style={{
              flex: "1",
              position: "relative",
              fontSize: "30px",
              fontFamily: "Georgia",
              color: "#fff",
              textAlign: "left",
              zIndex: "2",
              ...satireStyle,
            }}
          >
            {satire}
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent161;
