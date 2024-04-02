import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent7 from "../components/FrameComponent7";

const NightStories = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/book-the-frog-prince");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/book-the-elves-and-the-shoes-maker");
  }, [navigate]);

  const onSereneReadsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      style={{
        width: "100%",
        height: "1294px",
        position: "relative",
        backgroundColor: "#f4f5f3",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "76px 71px 150px",
        boxSizing: "border-box",
        gap: "2559px",
        letterSpacing: "normal",
        textAlign: "left",
        fontSize: "30px",
        color: "#000",
        fontFamily: "Inter",
      }}
    >
      <main
        style={{
          width: "1209px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "127px",
          flexShrink: "0",
          debugCommit: "612783b",
          textAlign: "left",
          fontSize: "36px",
          color: "#000",
          fontFamily: "Georgia",
        }}
      >
        <h2
          style={{
            margin: "0",
            position: "relative",
            fontSize: "inherit",
            fontWeight: "700",
            fontFamily: "inherit",
            cursor: "pointer",
          }}
          onClick={onSereneReadsTextClick}
        >
          SereneReads
        </h2>
        <section
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "30px",
            color: "#fff",
            fontFamily: "Georgia",
          }}
        >
          <div
            style={{
              width: "1120px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "81px",
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
                padding: "0px 20px",
                boxSizing: "border-box",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  width: "396px",
                  borderRadius: "40px",
                  backgroundColor: "#fff",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  padding: "0px 0px 0px 65px",
                  boxSizing: "border-box",
                  maxWidth: "100%",
                  gap: "20px",
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
                    height: "100px",
                    width: "76px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "0px 0px 17.40000000000009px",
                    boxSizing: "border-box",
                    minWidth: "76px",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "stretch",
                      flex: "1",
                      position: "relative",
                      maxWidth: "100%",
                      overflow: "hidden",
                      maxHeight: "100%",
                      objectFit: "cover",
                      zIndex: "1",
                    }}
                    loading="lazy"
                    alt=""
                    src="/image-13@2x.png"
                  />
                </div>
                <div
                  style={{
                    width: "196px",
                    borderRadius: "0px 40px 40px 0px",
                    backgroundColor: "#240a34",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "24px 46px 23px 47px",
                    boxSizing: "border-box",
                    minWidth: "196px",
                    zIndex: "1",
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
                      height: "72px",
                      flex: "1",
                      position: "relative",
                      display: "inline-block",
                      zIndex: "2",
                    }}
                  >
                    Night Stories
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "48px",
                maxWidth: "100%",
              }}
            >
              <FrameComponent7
                rectangle59="/rectangle-59@2x.png"
                theFrogPrince="The Frog Prince "
                byUnknown="by Unknown"
                onGroupContainerClick={onGroupContainerClick}
              />
              <FrameComponent7
                rectangle59="/rectangle-73@2x.png"
                theFrogPrince="The Elves and The Shoe Maker "
                byUnknown="by Unknown"
                propWidth="1120px"
                propPadding="0px 0px 39px"
                propGap="19px"
                propHeight="unset"
                propPadding1="15px 42px 15px 43px"
                propWidth1="unset"
                propFlex="unset"
                frameDivPadding="3px 0px 0px"
                onGroupContainerClick={onGroupContainer2Click}
              />
            </div>
          </div>
        </section>
      </main>
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
        <h3
          style={{
            margin: "0",
            alignSelf: "stretch",
            width: "170px",
            position: "relative",
            fontSize: "inherit",
            fontWeight: "400",
            fontFamily: "inherit",
            display: "inline-block",
            flexShrink: "0",
            debugCommit: "612783b",
          }}
        >
          Contact Us
        </h3>
      </div>
    </div>
  );
};

export default NightStories;
