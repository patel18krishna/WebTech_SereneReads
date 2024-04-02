import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent7 from "../components/FrameComponent7";

const Fiction = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/book-harry-potter");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/book-civil-war");
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
        <b
          style={{ position: "relative", cursor: "pointer" }}
          onClick={onSereneReadsTextClick}
        >
          SereneReads
        </b>
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
              gap: "88px",
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
                  padding: "0px 0px 0px 59px",
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
                    padding: "0px 0px 17.399999999999636px",
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
                    src="/image-12@2x.png"
                  />
                </div>
                <div
                  style={{
                    borderRadius: "0px 40px 40px 0px",
                    backgroundColor: "#240a34",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "42px 47px 41px 46px",
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
                  <div style={{ position: "relative", zIndex: "2" }}>
                    Fiction
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
                gap: "41px",
                maxWidth: "100%",
              }}
            >
              <FrameComponent7
                rectangle59="/rectangle-591@2x.png"
                theFrogPrince="Harry Potter "
                byUnknown="by Joanne Rowling"
                propWidth="1116px"
                propPadding="45px 0px 0px"
                propGap="54px"
                propHeight="89px"
                propPadding1="15px 37px 15px 38px"
                propWidth1="195px"
                propFlex="1"
                frameDivPadding="3px 0px 0px"
                onGroupContainerClick={onGroupContainerClick}
              />
              <FrameComponent7
                rectangle59="/image-141@2x.png"
                theFrogPrince="Civil War"
                byUnknown="by Mark Millar, Steve Mcniven, Dexter Vines, Morry Hollowell"
                propWidth="1120px"
                propPadding="54px 0px 0px"
                propGap="39px"
                propHeight="106px"
                propPadding1="15px 43px"
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
        <div
          style={{
            alignSelf: "stretch",
            width: "170px",
            position: "relative",
            display: "inline-block",
            flexShrink: "0",
            debugCommit: "612783b",
          }}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default Fiction;
