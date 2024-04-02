import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent161 from "../components/FrameComponent16";
import FrameComponent16 from "../components/FrameComponent161";

const Manga = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/book-jujutsu-kaisen");
  }, [navigate]);

  const onSereneReadsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
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
        padding: "76px 71px 214px",
        boxSizing: "border-box",
        gap: "2623px",
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
          gap: "80px",
          flexShrink: "0",
          debugCommit: "f6aba90",
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
            fontSize: "20px",
            color: "#240a34",
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
              gap: "84px",
              maxWidth: "100%",
            }}
          >
            <FrameComponent161
              image14="/image-122@2x.png"
              satire="Manga"
              rectangleDivPadding="0px 0px 0px 61px"
              rectangleDivGap="20px"
              rectangleDivWidth="396px"
              propPadding="42px 49px 41px"
              propMinWidth="98px"
            />
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "28px",
                maxWidth: "100%",
              }}
            >
              <FrameComponent16
                image15="/rectangle-713@2x.png"
                civilWar="Jujutsu Kaisen"
                byMarkMillarSteveMcnivenD="by Gege Akutami"
                propPadding="54px 0px 0px"
                propGap="unset"
                propHeight="157px"
                propPadding1="13px 38px 17px"
                propMarginTop="-26px"
                propMinWidth="109px"
                onGroupButtonClick={onGroupButtonClick}
              />
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "#fff",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "40px",
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
                    width: "224px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "46px 0px 0px",
                    boxSizing: "border-box",
                    minWidth: "224px",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "36px",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0px 0px 0px 1px",
                      }}
                    >
                      <div
                        style={{
                          height: "81px",
                          flex: "1",
                          position: "relative",
                          display: "inline-block",
                          zIndex: "1",
                        }}
                      >
                        <p style={{ margin: "0", fontSize: "50px" }}>Naruto</p>
                        <p style={{ margin: "0" }}>by Masashi Kishimoto</p>
                        <p style={{ margin: "0" }}>&nbsp;</p>
                      </div>
                    </div>
                    <button
                      style={{
                        cursor: "pointer",
                        border: "none",
                        padding: "13px 38px 17px",
                        backgroundColor: "#4f6f52",
                        width: "195px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-end",
                        boxSizing: "border-box",
                        whiteSpace: "nowrap",
                        zIndex: "1",
                      }}
                      onClick={onGroupButton2Click}
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
                    </button>
                  </div>
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
            debugCommit: "f6aba90",
          }}
        >
          Contact Us
        </h3>
      </div>
    </div>
  );
};

export default Manga;
