import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent10 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  const onLogInTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div
      style={{
        width: "576px",
        borderRadius: "15px",
        backgroundColor: "#f4f5f3",
        border: "1px solid rgba(0, 0, 0, 0)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "57px 59px 43px 60px",
        gap: "38.5px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "20px",
        color: "#240a34",
        fontFamily: "Georgia",
      }}
    >
      <div
        style={{
          width: "576px",
          height: "571px",
          position: "relative",
          borderRadius: "15px",
          backgroundColor: "#f4f5f3",
          border: "1px solid rgba(0, 0, 0, 0)",
          boxSizing: "border-box",
          display: "none",
          maxWidth: "100%",
        }}
      />
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0px 1px 5.5px 0px",
          fontSize: "30px",
        }}
      >
        <h2
          style={{
            margin: "0",
            position: "relative",
            fontSize: "inherit",
            fontWeight: "700",
            fontFamily: "inherit",
            zIndex: "1",
          }}
        >
          <p style={{ margin: "0" }}>Sign up Page</p>
        </h2>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 16px",
          boxSizing: "border-box",
          gap: "29.5px",
          maxWidth: "100%",
        }}
      >
        <input
    type="email"
    placeholder="E-mail"
    style={{
      height: "59px",
      width: "455px",
      position: "relative",
      borderRadius: "20px",
      backgroundColor: "#fff",
      display: "inline-block",
      maxWidth: "100%",
      fontSize: "20px", 
      color: "#000", 
      fontFamily: "Georgia", 
      zIndex: "2",
    }}
  />
        <input
    type="password"
    placeholder="Password"
    style={{
      height: "59px",
      width: "455px",
      position: "relative",
      borderRadius: "20px",
      backgroundColor: "#fff",
      display: "inline-block",
      maxWidth: "100%",
      fontSize: "20px", 
      color: "#000", 
      fontFamily: "Georgia", 
      zIndex: "2",
    }}
  />
        <input
    type="password"
    placeholder="Confirm Password"
    style={{
      height: "60px",
      width: "455px",
      position: "relative",
      borderRadius: "20px",
      backgroundColor: "#fff",
      display: "inline-block",
      maxWidth: "100%",
      fontSize: "20px", // Add font size if needed
      color: "#000", // Add font color if needed
      fontFamily: "Georgia", // Add font family if needed
      zIndex: "2",
    }}
  />
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0px 2px 0px 0px",
          color: "#fff",
        }}
      >
        <div style={{ height: "42px", width: "266.6px", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0.12px",
              borderRadius: "100px",
              backgroundColor: "#4f6f52",
              width: "100%",
              height: "100%",
              transform: " rotate(0.16deg)",
              transformOrigin: "0 0",
              cursor: "pointer",
              zIndex: "1",
            }}
            onClick={onRectangleClick}
          />
          <div
            style={{
              position: "absolute",
              top: "8.5px",
              left: "87.8px",
              display: "inline-block",
              width: "92px",
              height: "23px",
              zIndex: "2",
            }}
          >
            Continue
          </div>
        </div>
      </div>
      <div
        style={{
          width: "390px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 41px",
          boxSizing: "border-box",
          maxWidth: "100%",
          fontSize: "18px",
          color: "#405f9c",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "24px",
          }}
        >
          <div
            style={{
              flex: "1",
              position: "relative",
              whiteSpace: "nowrap",
              zIndex: "1",
            }}
          >
            Already have an account?
          </div>
          <div
            style={{
              width: "61px",
              position: "relative",
              display: "inline-block",
              flexShrink: "0",
              whiteSpace: "nowrap",
              cursor: "pointer",
              zIndex: "1",
            }}
            onClick={onLogInTextClick}
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent10;
