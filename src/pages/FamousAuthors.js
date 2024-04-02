import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FamousAuthors = () => {
  const navigate = useNavigate();

  const onSereneReadsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/jk-rawling");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/masashi-kishimoto");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/stan-lee");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/abdulrazak-gurnah");
  }, [navigate]);

  const onGroupContainer22Click = useCallback(() => {
    navigate("/jon-fosse");
  }, [navigate]);

  return (
    <div
      style={{
        width: "100%",
        height: "2000px",
        position: "relative",
        backgroundColor: "#f4f5f3",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "76px 71px 132px",
        boxSizing: "border-box",
        gap: "1835px",
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
          gap: "90px",
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
            justifyContent: "center",
            padding: "0px 20px 19px 255px",
            boxSizing: "border-box",
            maxWidth: "100%",
            fontSize: "50px",
            color: "#240a34",
          }}
        >
          <h2
            style={{
              margin: "0",
              height: "60px",
              width: "536px",
              position: "relative",
              fontSize: "inherit",
              textDecoration: "underline",
              fontWeight: "700",
              fontFamily: "inherit",
              display: "inline-block",
              flexShrink: "0",
              maxWidth: "100%",
            }}
          >
            FAMOUS AUTHORS
          </h2>
        </div>
        <section
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              width: "1120px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "298px 0px 0px",
                  boxSizing: "border-box",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "flex-end",
                    justifyContent: "flex-start",
                    gap: "79px",
                    maxWidth: "100%",
                    cursor: "pointer",
                    zIndex: "2",
                  }}
                  onClick={onGroupContainerClick}
                >
                  <div
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "0px 0px 21px",
                      boxSizing: "border-box",
                      minWidth: "508px",
                      maxWidth: "100%",
                    }}
                  >
                    <textarea
                      style={{
                        border: "none",
                        backgroundColor: "#fff",
                        height: "256px",
                        width: "auto",
                        outline: "none",
                        alignSelf: "stretch",
                        borderRadius: "40px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "46px 71px",
                        boxSizing: "border-box",
                        fontFamily: "Georgia",
                        fontSize: "30px",
                        color: "#240a34",
                      }}
                      placeholder={`Name: Joanne Rowling
Age: 58
Nationality: British
Famous work: Harry Potter Series`}
                      rows={13}
                      cols={39}
                    />
                  </div>
                  <img
                    style={{
                      height: "299px",
                      width: "259px",
                      position: "relative",
                      borderRadius: "40px",
                      objectFit: "cover",
                    }}
                    loading="lazy"
                    alt=""
                    src="/rectangle-29@2x.png"
                  />
                </div>
              </div>
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  gap: "76.30000000000018px",
                  maxWidth: "100%",
                  cursor: "pointer",
                  marginLeft: "-1116.8px",
                }}
                onClick={onGroupContainer2Click}
              >
                <img
                  style={{
                    height: "298.4px",
                    width: "258.8px",
                    position: "relative",
                    borderRadius: "40px",
                    objectFit: "cover",
                  }}
                  loading="lazy"
                  alt=""
                  src="/rectangle-29-1@2x.png"
                />
                <div
                  style={{
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "0px 0px 20.59999999999991px",
                    boxSizing: "border-box",
                    minWidth: "508px",
                    maxWidth: "100%",
                  }}
                >
                  <textarea
                    style={{
                      border: "none",
                      backgroundColor: "#fff",
                      height: "256.1px",
                      width: "auto",
                      outline: "none",
                      alignSelf: "stretch",
                      borderRadius: "40px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "53.700000000000045px 52.599999999999454px",
                      boxSizing: "border-box",
                      fontFamily: "Inter",
                      fontSize: "30px",
                      color: "#240a34",
                    }}
                    placeholder={`Name: Masashi Kishimoto
Age: 49
Nationality: Japanese
Famous work: Naruto`}
                    rows={13}
                    cols={39}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                gap: "77px",
                maxWidth: "100%",
                cursor: "pointer",
              }}
              onClick={onGroupContainer3Click}
            >
              <img
                style={{
                  height: "298px",
                  width: "258px",
                  position: "relative",
                  borderRadius: "40px",
                  objectFit: "cover",
                }}
                loading="lazy"
                alt=""
                src="/rectangle-29-2@2x.png"
              />
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 20px",
                  boxSizing: "border-box",
                  minWidth: "508px",
                  maxWidth: "100%",
                }}
              >
                <textarea
                  style={{
                    border: "none",
                    backgroundColor: "#fff",
                    height: "257px",
                    width: "auto",
                    outline: "none",
                    alignSelf: "stretch",
                    borderRadius: "40px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "54px 61px",
                    boxSizing: "border-box",
                    fontFamily: "Georgia",
                    fontSize: "30px",
                    color: "#240a34",
                  }}
                  placeholder={`Name: 	Stanley Martin Lieber
Age: died at 95 (2018)
Nationality: American
Famous work: Marvel Comics`}
                  rows={13}
                  cols={39}
                />
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                gap: "77px",
                maxWidth: "100%",
                cursor: "pointer",
              }}
              onClick={onGroupContainer1Click}
            >
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 21px",
                  boxSizing: "border-box",
                  minWidth: "508px",
                  maxWidth: "100%",
                }}
              >
                <textarea
                  style={{
                    border: "none",
                    backgroundColor: "#fff",
                    height: "256px",
                    width: "auto",
                    outline: "none",
                    alignSelf: "stretch",
                    borderRadius: "40px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "54px 61px",
                    boxSizing: "border-box",
                    fontFamily: "Georgia",
                    fontSize: "30px",
                    color: "#240a34",
                  }}
                  placeholder={`Name: 	Abdulrazak Gurnah
Age: 75
Nationality: Tanzanian-British
Famous work: After Lives`}
                  rows={13}
                  cols={39}
                />
              </div>
              <img
                style={{
                  height: "299px",
                  width: "259px",
                  position: "relative",
                  borderRadius: "40px",
                  objectFit: "cover",
                }}
                loading="lazy"
                alt=""
                src="/rectangle-781@2x.png"
              />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "79px",
                maxWidth: "100%",
                cursor: "pointer",
              }}
              onClick={onGroupContainer22Click}
            >
              <img
                style={{
                  height: "298px",
                  width: "259px",
                  position: "relative",
                  borderRadius: "40px",
                  objectFit: "cover",
                }}
                loading="lazy"
                alt=""
                src="/rectangle-32@2x.png"
              />
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "21px 0px 0px",
                  boxSizing: "border-box",
                  minWidth: "508px",
                  maxWidth: "100%",
                }}
              >
                <textarea
                  style={{
                    border: "none",
                    backgroundColor: "#fff",
                    height: "256px",
                    width: "auto",
                    outline: "none",
                    alignSelf: "stretch",
                    borderRadius: "40px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "54px 44px",
                    boxSizing: "border-box",
                    fontFamily: "Georgia",
                    fontSize: "30px",
                    color: "#240a34",
                  }}
                  placeholder={`Name: 	Jon Fosse
Age: 64
Nationality: Norwegian
Famous work: Septology`}
                  rows={13}
                  cols={39}
                />
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

export default FamousAuthors;
