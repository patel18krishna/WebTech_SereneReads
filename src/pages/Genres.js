import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent11 from "../components/FrameComponent11";
import BiographyContainer from "../components/BiographyContainer";
import HorrorContainer from "../components/HorrorContainer";

const Genres = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/poetry");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/night-stories");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/biography");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/fiction");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/horror");
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
    navigate("/historical-fiction");
  }, [navigate]);

  const onGroupContainer5Click = useCallback(() => {
    navigate("/manga");
  }, [navigate]);

  const onSereneReadsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    navigate("/satire");
  }, [navigate]);

  const onGroupContainer13Click = useCallback(() => {
    navigate("/self-help");
  }, [navigate]);

  return (
    <div
      style={{
        width: "100%",
        height: "1555px",
        position: "relative",
        backgroundColor: "#f4f5f3",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "76px 71px 158px",
        boxSizing: "border-box",
        gap: "2306px",
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
          gap: "84px",
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
            fontSize: "50px",
            color: "#240a34",
            fontFamily: "Georgia",
          }}
        >
          <div
            style={{
              width: "1126px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "103px",
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
                padding: "0px 20px 0px 48px",
              }}
            >
              <h2
                style={{
                  margin: "0",
                  height: "60px",
                  position: "relative",
                  fontSize: "inherit",
                  textDecoration: "underline",
                  fontWeight: "700",
                  fontFamily: "inherit",
                  display: "inline-block",
                }}
              >
                GENRES
              </h2>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                gap: "83px",
                fontSize: "30px",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <FrameComponent11
                  image5="/image-5@2x.png"
                  poetry="Poetry"
                  onGroupContainerClick={onGroupContainerClick}
                />
                <BiographyContainer
                  dimensionsCode="/image-4@2x.png"
                  genreType="Night story"
                  onGroupContainer3Click={onGroupContainer2Click}
                />
                <BiographyContainer
                  dimensionsCode="/image-7@2x.png"
                  genreType="Biography"
                  propPadding="42px 48px 47px"
                  propGap="52px"
                  propAlignSelf="unset"
                  propHeight="unset"
                  onGroupContainer3Click={onGroupContainer1Click}
                />
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <FrameComponent11
                  image5="/image-11@2x.png"
                  poetry="Fiction"
                  propPadding="48px 69px 57px"
                  propGap="36px"
                  propAlignSelf="unset"
                  onGroupContainerClick={onGroupContainer3Click}
                />
                <HorrorContainer
                  dimensionCode="/image-3@2x.png"
                  genreCode="Horror"
                  onGroupContainer4Click={onGroupContainer4Click}
                />
                <BiographyContainer
                  dimensionsCode="/image-11@2x.png"
                  genreType="Historical fiction"
                  propPadding="48px 48px 32px 58px"
                  propGap="25px"
                  propAlignSelf="stretch"
                  propHeight="72px"
                  onGroupContainer3Click={onGroupContainer12Click}
                />
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    height: "289px",
                    width: "246px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "0px 5px 0px 0px",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      flex: "1",
                      borderRadius: "40px",
                      backgroundColor: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "48px 69px 57px",
                      gap: "36px",
                      cursor: "pointer",
                    }}
                    onClick={onGroupContainer6Click}
                  >
                    <div
                      style={{
                        width: "241px",
                        height: "289px",
                        position: "relative",
                        borderRadius: "40px",
                        backgroundColor: "#fff",
                        display: "none",
                      }}
                    />
                    <img
                      style={{
                        alignSelf: "stretch",
                        height: "112px",
                        position: "relative",
                        maxWidth: "100%",
                        overflow: "hidden",
                        flexShrink: "0",
                        objectFit: "cover",
                        zIndex: "1",
                      }}
                      loading="lazy"
                      alt=""
                      src="/image-11@2x.png"
                    />
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0px 7px 0px 8px",
                      }}
                    >
                      <div
                        style={{ flex: "1", position: "relative", zIndex: "1" }}
                      >
                        Satire
                      </div>
                    </div>
                  </div>
                </div>
                <HorrorContainer
                  dimensionCode="/image-10@2x.png"
                  genreCode="Manga"
                  propWidth="241px"
                  propAlignSelf="stretch"
                  propFlex="1"
                  onGroupContainer4Click={onGroupContainer5Click}
                />
                <div
                  style={{
                    height: "289px",
                    width: "241px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    cursor: "pointer",
                  }}
                  onClick={onGroupContainer13Click}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      flex: "1",
                      borderRadius: "40px",
                      backgroundColor: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "48px 48px 57px 59px",
                      gap: "36px",
                    }}
                  >
                    <div
                      style={{
                        width: "241px",
                        height: "289px",
                        position: "relative",
                        borderRadius: "40px",
                        backgroundColor: "#fff",
                        display: "none",
                      }}
                    />
                    <div
                      style={{
                        width: "123px",
                        flex: "1",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0px 10px",
                        boxSizing: "border-box",
                      }}
                    >
                      <img
                        style={{
                          height: "112px",
                          flex: "1",
                          position: "relative",
                          maxWidth: "100%",
                          overflow: "hidden",
                          objectFit: "cover",
                          zIndex: "1",
                        }}
                        loading="lazy"
                        alt=""
                        src="/image-131@2x.png"
                      />
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        position: "relative",
                        zIndex: "1",
                      }}
                    >
                      Self-help
                    </div>
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

export default Genres;
