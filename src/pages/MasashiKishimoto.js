import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent8 from "../components/FrameComponent8";

const MasashiKishimoto = () => {
  const navigate = useNavigate();

  const onSereneReadsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/book-naruto");
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
        padding: "76px 71px 248px",
        boxSizing: "border-box",
        gap: "135px",
        letterSpacing: "normal",
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
          flexShrink: "0",
          cursor: "pointer",
        }}
        onClick={onSereneReadsTextClick}
      >
        SereneReads
      </h2>
      <main
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0px 0px 2522px",
          boxSizing: "border-box",
          maxWidth: "100%",
          flexShrink: "0",
        }}
      >
        <section
          style={{
            width: "1080px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "88px",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "20px",
            color: "#240a34",
            fontFamily: "Georgia",
          }}
        >
          <FrameComponent8
            rectangle34="/rectangle-34@2x.png"
            nameMasashiKishimoto="Name: Masashi Kishimoto
"
            age49="Age: 49
"
            nationalityJapanese="Nationality: Japanese
"
            famousWorkNaruto="Famous work: Naruto"
          />
          <div
            style={{
              alignSelf: "stretch",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "110px",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                width: "1080px",
                position: "relative",
                backgroundColor: "#fff",
                display: "none",
                maxWidth: "100%",
              }}
            />
            <img
              style={{
                height: "326px",
                width: "200px",
                position: "relative",
                objectFit: "cover",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/rectangle-77@2x.png"
            />
            <div
              style={{
                width: "223px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "44px 0px 0px",
                boxSizing: "border-box",
                minWidth: "223px",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "38px",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: "81px",
                    position: "relative",
                    display: "inline-block",
                    flexShrink: "0",
                    zIndex: "1",
                  }}
                >
                  <p style={{ margin: "0", fontSize: "50px" }}>Naruto</p>
                  <p style={{ margin: "0" }}>&nbsp;</p>
                  <p style={{ margin: "0" }}>&nbsp;</p>
                </div>
                <div
                  style={{
                    backgroundColor: "#4f6f52",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    padding: "15px 30px 11px 48px",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    zIndex: "1",
                    color: "#fff",
                  }}
                  onClick={onGroupContainerClick}
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
                      width: "117px",
                      position: "relative",
                      display: "inline-block",
                      flexShrink: "0",
                      zIndex: "1",
                    }}
                  >
                    Read Now
                  </b>
                </div>
              </div>
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
          fontSize: "30px",
          fontFamily: "Inter",
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
          }}
        >
          Contact Us
        </h3>
      </div>
    </div>
  );
};

export default MasashiKishimoto;
