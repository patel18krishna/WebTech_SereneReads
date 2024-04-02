import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LogInButton = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignUpTextClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  return (
    <form
      style={{
        margin: "0",
        width: "576px",
        borderRadius: "15px",
        backgroundColor: "#f4f5f3",
        border: "1px solid rgba(0, 0, 0, 0)",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "69px 54px 46px",
        gap: "88.4px",
        maxWidth: "100%",
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
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "62px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "0px 20px 0px 21px",
          }}
        >
          <h3
            style={{
              margin: "0",
              position: "relative",
              fontSize: "30px",
              fontWeight: "700",
              fontFamily: "Georgia",
              color: "#240a34",
              textAlign: "left",
              zIndex: "1",
            }}
          >
            Log in Page
          </h3>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "25px",
            maxWidth: "100%",
          }}
        >

        <input
          type="email"
          placeholder="E-mail"
          style={{
          height: "69px",
          width: "466px",
          position: "relative",
          borderRadius: "20px",
          backgroundColor: "#fff",
          display: "inline-block",
          maxWidth: "100%",
          fontSize: "20px",
          fontFamily: "Georgia",
          color: "#240a34",
          textAlign: "left",
          zIndex: "2",
          }}
  />
            <input
              type="password"
              placeholder="Password"
              style={{
                height: "69px",
                width: "466px",
                position: "relative",
                borderRadius: "20px",
                backgroundColor: "#fff",
                display: "inline-block",
                maxWidth: "100%",
                fontSize: "20px",
                fontFamily: "Georgia",
                color: "#240a34",
                textAlign: "left",
                zIndex: "2",
                }}
                />
          </div>
        </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 86px 0px 79px",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "44.599999999999994px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 14.199999999999932px 0px 20px",
            }}
          >
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "8.599999999999994px 20px 10.400000000000006px 21px",
                position: "relative",
                whiteSpace: "nowrap",
                cursor: "pointer",
                zIndex: "1",
              }}
              onClick={onGroupContainerClick}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  margin: "0",
                  top: "0.8px",
                  right: "0.08px",
                  bottom: "-0.1px",
                  left: "0.32px",
                  borderRadius: "100px",
                  backgroundColor: "#4f6f52",
                  transform: " rotate(0.16deg)",
                  transformOrigin: "0 0",
                }}
              />
              <div
                style={{
                  position: "relative",
                  fontSize: "20px",
                  fontFamily: "Georgia",
                  color: "#fff",
                  textAlign: "left",
                  display: "inline-block",
                  minWidth: "62px",
                  zIndex: "1",
                }}
              >
                Log in
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "19px",
            }}
          >
            <div
              style={{
                flex: "1",
                position: "relative",
                fontSize: "18px",
                fontFamily: "Georgia",
                color: "#240a34",
                textAlign: "left",
                display: "inline-block",
                minWidth: "135px",
                zIndex: "1",
              }}
            >
              Don`t have an account?
            </div>
            <div
              style={{
                position: "relative",
                fontSize: "18px",
                fontFamily: "Georgia",
                color: "#240a34",
                textAlign: "left",
                display: "inline-block",
                minWidth: "75px",
                cursor: "pointer",
                zIndex: "1",
              }}
              onClick={onSignUpTextClick}
            >
              Sign-Up
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LogInButton;
