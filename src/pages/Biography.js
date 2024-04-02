import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent7 from "../components/FrameComponent7";

const Biography = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/book-a-heart-that-works");
  }, [navigate]);

  const onSereneReadsTextClick = useCallback(() => {
    navigate("/");
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
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            maxWidth: "100%",
            fontSize: "30px",
            color: "#fff",
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
                  justifyContent: "flex-start",
                  padding: "0px 0px 0px 71px",
                  boxSizing: "border-box",
                  gap: "53px",
                  maxWidth: "100%",
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
                    src="/image-121@2x.png"
                  />
                </div>
                <div
                  style={{
                    flex: "1",
                    borderRadius: "0px 40px 40px 0px",
                    backgroundColor: "#240a34",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "42px 21px 41px",
                    boxSizing: "border-box",
                    minWidth: "127px",
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
                  <div style={{ flex: "1", position: "relative", zIndex: "2" }}>
                    Biography
                  </div>
                </div>
              </div>
            </div>
            <FrameComponent7
              rectangle59="/rectangle-712@2x.png"
              theFrogPrince="A Heart That Works "
              byUnknown="by Rob Delany"
              propWidth="1120px"
              propPadding="46px 0px 0px"
              propGap="50px"
              propHeight="96px"
              propPadding1="15px 37px 15px 38px"
              propWidth1="195px"
              propFlex="1"
              frameDivPadding="unset"
              onGroupContainerClick={onGroupContainerClick}
            />
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
            debugCommit: "612783b",
          }}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default Biography;
