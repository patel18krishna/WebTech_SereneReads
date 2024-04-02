import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent161 from "../components/FrameComponent16";

const Horror = () => {
  const navigate = useNavigate();

  const onSereneReadsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/book-the-man-who-collected-poe");
  }, [navigate]);

  return (
    <div
      style={{
        width: "100%",
        height: "1024px",
        position: "relative",
        backgroundColor: "#f4f5f3",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "76px 71px 247px",
        boxSizing: "border-box",
        gap: "2926px",
        letterSpacing: "normal",
        textAlign: "left",
        fontSize: "30px",
        color: "#000",
        fontFamily: "Inter",
      }}
    >
      <section
        style={{
          width: "1209px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "127px",
          flexShrink: "0",
          debugCommit: "f6aba90",
          textAlign: "left",
          fontSize: "36px",
          color: "#000",
          fontFamily: "Georgia",
        }}
      >
        <b
          style={{ position: "relative", cursor: "pointer" }}
          onClick={onSereneReadsTextClick}
        >
          SereneReads
        </b>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            maxWidth: "100%",
            fontSize: "20px",
            color: "#240a34",
          }}
        >
          <div
            style={{
              width: "1120px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "88px",
              maxWidth: "100%",
            }}
          >
            <FrameComponent161
              image14="/image-143@2x.png"
              satire="Horror"
              rectangleDivPadding="0px 0px 0px 59px"
              rectangleDivGap="20px"
              rectangleDivWidth="396px"
              propPadding="42px 50px 41px"
              propMinWidth="96px"
            />
            <div
              style={{
                alignSelf: "stretch",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 0px 1px",
                boxSizing: "border-box",
                gap: "37px",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  width: "1120px",
                  position: "relative",
                  backgroundColor: "#fff",
                  display: "none",
                  maxWidth: "100%",
                }}
              />
              <img
                style={{
                  height: "325px",
                  width: "203px",
                  position: "relative",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                loading="lazy"
                alt=""
                src="/rectangle-75@2x.png"
              />
              <div
                style={{
                  width: "599px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "37px 0px 0px",
                  boxSizing: "border-box",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "41px",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: "133px",
                      position: "relative",
                      display: "inline-block",
                      flexShrink: "0",
                      zIndex: "1",
                    }}
                  >
                    <p style={{ margin: "0", fontSize: "50px" }}>
                      The Man Who Collected Poe
                    </p>
                    <p style={{ margin: "0" }}>by Robert Bloch</p>
                    <p style={{ margin: "0" }}>&nbsp;</p>
                  </div>
                  <button
                    style={{
                      cursor: "pointer",
                      border: "none",
                      padding: "0",
                      backgroundColor: "transparent",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      zIndex: "1",
                    }}
                    onClick={onGroupButtonClick}
                  >
                    <div
                      style={{
                        backgroundColor: "#4f6f52",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "15px 43px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <div
                        style={{
                          height: "51px",
                          width: "195px",
                          position: "relative",
                          backgroundColor: "#4f6f52",
                          display: "none",
                        }}
                      />
                      <b
                        style={{
                          position: "relative",
                          fontSize: "20px",
                          display: "inline-block",
                          fontFamily: "Georgia",
                          color: "#fff",
                          textAlign: "left",
                          minWidth: "109px",
                          zIndex: "1",
                        }}
                      >
                        Read Now
                      </b>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          width: "504px",
          height: "36px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            width: "170px",
            position: "relative",
            display: "inline-block",
            flexShrink: "0",
            debugCommit: "f6aba90",
          }}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default Horror;
