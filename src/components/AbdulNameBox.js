import { useMemo } from "react";

const getStyleValue = (key, value) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};

const AbdulNameBox = ({
  rectangle30,
  nameAbdulrazakGurnah,
  age75,
  nationalityTanzanianBriti,
  famousWorkAfterLives,
  nameAbdulrazakGurnahContaGap,
  propPadding,
  propMinHeight,
}) => {
  const abdulNameBoxStyle = useMemo(() => {
    return {
      ...getStyleValue("gap", nameAbdulrazakGurnahContaGap),
    };
  }, [nameAbdulrazakGurnahContaGap]);

  const frameDiv8Style = useMemo(() => {
    return {
      ...getStyleValue("padding", propPadding),
      ...getStyleValue("minHeight", propMinHeight),
    };
  }, [propPadding, propMinHeight]);

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
        ...abdulNameBoxStyle,
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
        src={rectangle30}
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
          padding: "94px 20px",
          boxSizing: "border-box",
          minWidth: "486px",
          minHeight: "380px",
          maxWidth: "100%",
          ...frameDiv8Style,
        }}
      >
        <div
          style={{
            height: "380px",
            width: "748px",
            position: "relative",
            borderRadius: "40px",
            backgroundColor: "#fff",
            display: "none",
            maxWidth: "100%",
          }}
        />
        <div style={{ position: "relative", zIndex: "1" }}>
          <p style={{ margin: "0" }}>{nameAbdulrazakGurnah}</p>
          <p style={{ margin: "0" }}>{age75}</p>
          <p style={{ margin: "0" }}>{nationalityTanzanianBriti}</p>
          <p style={{ margin: "0" }}>{famousWorkAfterLives}</p>
        </div>
      </div>
    </div>
  );
};

export default AbdulNameBox;
