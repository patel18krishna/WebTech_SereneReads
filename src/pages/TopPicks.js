import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const TopPicks = () => {
  const navigate = useNavigate();

  const onSereneReadsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/it-starts-with-us");
  }, [navigate]);

  const onGroupButton1Click = useCallback(() => {
    navigate("/book-it-starts-with-us-it-ends-with-us");
  }, [navigate]);

  const onGroupButton2Click = useCallback(() => {
    navigate("/the-god-of-small-things1");
  }, [navigate]);

  const onGroupButton3Click = useCallback(() => {
    navigate("/the-god-of-small-things");
  }, [navigate]);

  const onGroupButton4Click = useCallback(() => {
    navigate("/a-heart-that-works");
  }, [navigate]);

  const onGroupButton5Click = useCallback(() => {
    navigate("/book-a-heart-that-works");
  }, [navigate]);

  const onGroupButton6Click = useCallback(() => {
    navigate("/jujutsu-kaisen");
  }, [navigate]);

  const onGroupButton7Click = useCallback(() => {
    navigate("/book-jujutsu-kaisen");
  }, [navigate]);

  const onGroupButton8Click = useCallback(() => {
    navigate("/civil-war");
  }, [navigate]);

  const onGroupButton9Click = useCallback(() => {
    navigate("/book-civil-war");
  }, [navigate]);

  const onGroupButton10Click = useCallback(() => {
    navigate("/the-other-name");
  }, [navigate]);

  const onGroupButton11Click = useCallback(() => {
    navigate("/book-the-other-name");
  }, [navigate]);

  const onGroupButton12Click = useCallback(() => {
    navigate("/after-lives");
  }, [navigate]);

  const onGroupButton13Click = useCallback(() => {
    navigate("/book-after-lives");
  }, [navigate]);

  const onGroupButton14Click = useCallback(() => {
    navigate("/the-grapes-of-wrath");
  }, [navigate]);

  const onGroupButton15Click = useCallback(() => {
    navigate("/book-the-grapes-of-wrath");
  }, [navigate]);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "76px 71px 111px",
        boxSizing: "border-box",
        gap: "81px",
        letterSpacing: "normal",
        textAlign: "left",
        fontSize: "36px",
        color: "#000",
        fontFamily: "Georgia",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 5px",
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
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0px 0px 26px 19px",
          fontSize: "50px",
        }}
      >
        <h1
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
          TOP PICKS
        </h1>
      </div>
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0px 1px 0px 0px",
          boxSizing: "border-box",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "20px",
          color: "#240a34",
          fontFamily: "Georgia",
        }}
      >
        <div
          style={{
            width: "1119px",
            backgroundColor: "#f4f5f3",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 0px 3px",
            boxSizing: "border-box",
            gap: "85px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              width: "1119px",
              position: "relative",
              backgroundColor: "#f4f5f3",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <img
            style={{
              height: "364px",
              width: "239px",
              position: "relative",
              objectFit: "cover",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/rectangle-291@2x.png"
          />
          <div
            style={{
              width: "541px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "62px 0px 0px",
              boxSizing: "border-box",
              minWidth: "541px",
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
                gap: "66px",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  width: "405px",
                  height: "96px",
                  position: "relative",
                  display: "inline-block",
                  flexShrink: "0",
                  maxWidth: "100%",
                  zIndex: "1",
                }}
              >
                <p
                  style={{ margin: "0", fontSize: "50px" }}
                >{`It Starts With Us `}</p>
                <p style={{ margin: "0" }}>by Colleen Hoover</p>
                <p style={{ margin: "0" }}>&nbsp;</p>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "78px",
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "17px 20px 18px 28px",
                    backgroundColor: "#4f6f52",
                    flex: "1",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    minWidth: "151px",
                    zIndex: "1",
                  }}
                  onClick={onGroupButtonClick}
                >
                  <div
                    style={{
                      height: "58px",
                      width: "231px",
                      position: "relative",
                      backgroundColor: "#4f6f52",
                      display: "none",
                    }}
                  />
                  <b
                    style={{
                      width: "49px",
                      position: "relative",
                      fontSize: "20px",
                      display: "inline-block",
                      fontFamily: "Georgia",
                      color: "#fff",
                      textAlign: "left",
                      flexShrink: "0",
                      zIndex: "1",
                    }}
                  >
                    Info
                  </b>
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "17px 58px 18px 67px",
                    backgroundColor: "#4f6f52",
                    flex: "0.5815",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    boxSizing: "border-box",
                    minWidth: "151px",
                    whiteSpace: "nowrap",
                    zIndex: "1",
                  }}
                  onClick={onGroupButton1Click}
                >
                  <div
                    style={{
                      height: "58px",
                      width: "232px",
                      position: "relative",
                      backgroundColor: "#4f6f52",
                      display: "none",
                    }}
                  />
                  <b
                    style={{
                      position: "relative",
                      fontSize: "20px",
                      fontFamily: "Georgia",
                      color: "#fff",
                      textAlign: "left",
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
      </section>
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
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
            backgroundColor: "#f4f5f3",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "3px 0px 0px",
            boxSizing: "border-box",
            gap: "82px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              width: "1120px",
              position: "relative",
              backgroundColor: "#f4f5f3",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <img
            style={{
              height: "364px",
              width: "239px",
              position: "relative",
              objectFit: "cover",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/rectangle-29-11@2x.png"
          />
          <div
            style={{
              width: "647px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "57px 0px 0px",
              boxSizing: "border-box",
              minWidth: "647px",
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
                gap: "77px",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  height: "85px",
                  position: "relative",
                  display: "inline-block",
                  flexShrink: "0",
                  zIndex: "1",
                }}
              >
                <p
                  style={{ margin: "0", fontSize: "50px" }}
                >{`The God of Small Things `}</p>
                <p style={{ margin: "0" }}>by Arundhati Roy</p>
                <p style={{ margin: "0" }}>&nbsp;</p>
              </div>
              <div
                style={{
                  width: "548px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "80px",
                  maxWidth: "100%",
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "0",
                    backgroundColor: "transparent",
                    flex: "1",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    minWidth: "152px",
                    zIndex: "1",
                  }}
                  onClick={onGroupButton2Click}
                >
                  <div
                    style={{
                      flex: "1",
                      backgroundColor: "#4f6f52",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      padding: "17px 20px 18px 30px",
                    }}
                  >
                    <div
                      style={{
                        height: "58px",
                        width: "234px",
                        position: "relative",
                        backgroundColor: "#4f6f52",
                        display: "none",
                      }}
                    />
                    <b
                      style={{
                        width: "50px",
                        position: "relative",
                        fontSize: "20px",
                        display: "inline-block",
                        fontFamily: "Georgia",
                        color: "#fff",
                        textAlign: "left",
                        flexShrink: "0",
                        zIndex: "1",
                      }}
                    >
                      Info
                    </b>
                  </div>
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "17px 58px 18px 67px",
                    backgroundColor: "#4f6f52",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    whiteSpace: "nowrap",
                    zIndex: "1",
                  }}
                  onClick={onGroupButton3Click}
                >
                  <div
                    style={{
                      height: "58px",
                      width: "234px",
                      position: "relative",
                      backgroundColor: "#4f6f52",
                      display: "none",
                    }}
                  />
                  <b
                    style={{
                      position: "relative",
                      fontSize: "20px",
                      fontFamily: "Georgia",
                      color: "#fff",
                      textAlign: "left",
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
      </section>
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
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
            backgroundColor: "#f4f5f3",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "1px 0px 0px",
            boxSizing: "border-box",
            gap: "82px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              width: "1120px",
              position: "relative",
              backgroundColor: "#f4f5f3",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <img
            style={{
              height: "366px",
              width: "239px",
              position: "relative",
              objectFit: "cover",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/rectangle-251@2x.png"
          />
          <div
            style={{
              width: "548px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "57px 0px 0px",
              boxSizing: "border-box",
              minWidth: "548px",
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
                gap: "66px",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  height: "96px",
                  position: "relative",
                  display: "inline-block",
                  flexShrink: "0",
                  zIndex: "1",
                }}
              >
                <p
                  style={{ margin: "0", fontSize: "50px" }}
                >{`A Heart That Works `}</p>
                <p style={{ margin: "0" }}>by Rob Delaney</p>
                <p style={{ margin: "0" }}>&nbsp;</p>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "80px",
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "17px 20px 18px 30px",
                    backgroundColor: "#4f6f52",
                    flex: "1",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    minWidth: "152px",
                    zIndex: "1",
                  }}
                  onClick={onGroupButton4Click}
                >
                  <div
                    style={{
                      height: "58px",
                      width: "234px",
                      position: "relative",
                      backgroundColor: "#4f6f52",
                      display: "none",
                    }}
                  />
                  <b
                    style={{
                      width: "50px",
                      position: "relative",
                      fontSize: "20px",
                      display: "inline-block",
                      fontFamily: "Georgia",
                      color: "#fff",
                      textAlign: "left",
                      flexShrink: "0",
                      zIndex: "1",
                    }}
                  >
                    Info
                  </b>
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "17px 58px 18px 67px",
                    backgroundColor: "#4f6f52",
                    flex: "0.5924",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    boxSizing: "border-box",
                    minWidth: "152px",
                    whiteSpace: "nowrap",
                    zIndex: "1",
                  }}
                  onClick={onGroupButton5Click}
                >
                  <div
                    style={{
                      height: "58px",
                      width: "234px",
                      position: "relative",
                      backgroundColor: "#4f6f52",
                      display: "none",
                    }}
                  />
                  <b
                    style={{
                      position: "relative",
                      fontSize: "20px",
                      fontFamily: "Georgia",
                      color: "#fff",
                      textAlign: "left",
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
      </section>
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
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
            backgroundColor: "#f4f5f3",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "82px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              width: "1120px",
              position: "relative",
              backgroundColor: "#f4f5f3",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <img
            style={{
              height: "367px",
              width: "239px",
              position: "relative",
              objectFit: "cover",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/rectangle-29-21@2x.png"
          />
          <div
            style={{
              width: "548px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "58px 0px 0px",
              boxSizing: "border-box",
              minWidth: "548px",
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
                gap: "75px",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  width: "389px",
                  height: "87px",
                  position: "relative",
                  display: "inline-block",
                  flexShrink: "0",
                  maxWidth: "100%",
                  zIndex: "1",
                }}
              >
                <p
                  style={{ margin: "0", fontSize: "50px" }}
                >{`Jujutsu Kaisen `}</p>
                <p style={{ margin: "0" }}>by Gege Akutami</p>
                <p style={{ margin: "0" }}>&nbsp;</p>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "80px",
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "17px 20px 18px 31px",
                    backgroundColor: "#4f6f52",
                    flex: "1",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    minWidth: "152px",
                    zIndex: "1",
                  }}
                  onClick={onGroupButton6Click}
                >
                  <div
                    style={{
                      height: "58px",
                      width: "234px",
                      position: "relative",
                      backgroundColor: "#4f6f52",
                      display: "none",
                    }}
                  />
                  <b
                    style={{
                      width: "51px",
                      position: "relative",
                      fontSize: "20px",
                      display: "inline-block",
                      fontFamily: "Georgia",
                      color: "#fff",
                      textAlign: "left",
                      flexShrink: "0",
                      zIndex: "1",
                    }}
                  >
                    Info
                  </b>
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "17px 50px 18px 67px",
                    backgroundColor: "#4f6f52",
                    flex: "0.6393",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    boxSizing: "border-box",
                    minWidth: "152px",
                    whiteSpace: "nowrap",
                    zIndex: "1",
                  }}
                  onClick={onGroupButton7Click}
                >
                  <div
                    style={{
                      height: "58px",
                      width: "234px",
                      position: "relative",
                      backgroundColor: "#4f6f52",
                      display: "none",
                    }}
                  />
                  <b
                    style={{
                      width: "117px",
                      position: "relative",
                      fontSize: "20px",
                      display: "inline-block",
                      fontFamily: "Georgia",
                      color: "#fff",
                      textAlign: "left",
                      flexShrink: "0",
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
      </section>
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0px 1px 0px 0px",
          boxSizing: "border-box",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "20px",
          color: "#240a34",
          fontFamily: "Georgia",
        }}
      >
        <div
          style={{
            width: "1119px",
            backgroundColor: "#f4f5f3",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "83px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              width: "1119px",
              position: "relative",
              backgroundColor: "#f4f5f3",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <img
            style={{
              height: "367px",
              width: "238px",
              position: "relative",
              objectFit: "cover",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/image-144@2x.png"
          />
          <div
            style={{
              width: "548px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "58px 0px 0px",
              boxSizing: "border-box",
              minWidth: "548px",
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
                gap: "79px",
              }}
            >
              <div
                style={{
                  width: "263px",
                  height: "83px",
                  position: "relative",
                  display: "inline-block",
                  flexShrink: "0",
                  zIndex: "1",
                }}
              >
                <p style={{ margin: "0", fontSize: "50px" }}>{`Civil War `}</p>
                <p style={{ margin: "0" }}>by Stan Lee</p>
                <p style={{ margin: "0" }}>&nbsp;</p>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "80px",
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "17px 20px 18px 31px",
                    backgroundColor: "#4f6f52",
                    flex: "1",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    minWidth: "152px",
                    zIndex: "1",
                  }}
                  onClick={onGroupButton8Click}
                >
                  <div
                    style={{
                      height: "58px",
                      width: "234px",
                      position: "relative",
                      backgroundColor: "#4f6f52",
                      display: "none",
                    }}
                  />
                  <b
                    style={{
                      width: "51px",
                      position: "relative",
                      fontSize: "20px",
                      display: "inline-block",
                      fontFamily: "Georgia",
                      color: "#fff",
                      textAlign: "left",
                      flexShrink: "0",
                      zIndex: "1",
                    }}
                  >
                    Info
                  </b>
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "17px 50px 18px 67px",
                    backgroundColor: "#4f6f52",
                    flex: "0.6393",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    boxSizing: "border-box",
                    minWidth: "152px",
                    whiteSpace: "nowrap",
                    zIndex: "1",
                  }}
                  onClick={onGroupButton9Click}
                >
                  <div
                    style={{
                      height: "58px",
                      width: "234px",
                      position: "relative",
                      backgroundColor: "#4f6f52",
                      display: "none",
                    }}
                  />
                  <b
                    style={{
                      width: "117px",
                      position: "relative",
                      fontSize: "20px",
                      display: "inline-block",
                      fontFamily: "Georgia",
                      color: "#fff",
                      textAlign: "left",
                      flexShrink: "0",
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
      </section>
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0px 1px 0px 0px",
          boxSizing: "border-box",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "20px",
          color: "#240a34",
          fontFamily: "Georgia",
        }}
      >
        <div
          style={{
            width: "1119px",
            backgroundColor: "#f4f5f3",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 0px 3px",
            boxSizing: "border-box",
            gap: "83px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              width: "1119px",
              position: "relative",
              backgroundColor: "#f4f5f3",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <img
            style={{
              height: "364px",
              width: "238px",
              position: "relative",
              objectFit: "cover",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/rectangle-49@2x.png"
          />
          <div
            style={{
              width: "609px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "58px 0px 0px",
              boxSizing: "border-box",
              minWidth: "609px",
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
                gap: "33px",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  height: "129px",
                  position: "relative",
                  display: "inline-block",
                  flexShrink: "0",
                  zIndex: "1",
                }}
              >
                <p
                  style={{ margin: "0", fontSize: "50px" }}
                >{`The Other Name - Septology Part - I & II `}</p>
                <p style={{ margin: "0" }}>by Jon Fosse</p>
                <p style={{ margin: "0" }}>&nbsp;</p>
              </div>
              <div
                style={{
                  width: "548px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "80px",
                  maxWidth: "100%",
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "17px 20px 18px 27px",
                    backgroundColor: "#4f6f52",
                    flex: "1",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    minWidth: "152px",
                    zIndex: "1",
                  }}
                  onClick={onGroupButton10Click}
                >
                  <div
                    style={{
                      height: "58px",
                      width: "234px",
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
                      minWidth: "47px",
                      zIndex: "1",
                    }}
                  >
                    Info
                  </b>
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "17px 49px 18px 67px",
                    backgroundColor: "#4f6f52",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    whiteSpace: "nowrap",
                    zIndex: "1",
                  }}
                  onClick={onGroupButton11Click}
                >
                  <div
                    style={{
                      height: "58px",
                      width: "234px",
                      position: "relative",
                      backgroundColor: "#4f6f52",
                      display: "none",
                    }}
                  />
                  <b
                    style={{
                      width: "118px",
                      position: "relative",
                      fontSize: "20px",
                      display: "inline-block",
                      fontFamily: "Georgia",
                      color: "#fff",
                      textAlign: "left",
                      flexShrink: "0",
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
      </section>
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0px 1px 0px 0px",
          boxSizing: "border-box",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "20px",
          color: "#240a34",
          fontFamily: "Georgia",
        }}
      >
        <div
          style={{
            width: "1119px",
            backgroundColor: "#f4f5f3",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "83px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              width: "1119px",
              position: "relative",
              backgroundColor: "#f4f5f3",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <img
            style={{
              height: "367px",
              width: "238px",
              position: "relative",
              objectFit: "cover",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/rectangle-50@2x.png"
          />
          <div
            style={{
              width: "548px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              minWidth: "548px",
              minHeight: "278px",
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
                gap: "74px",
              }}
            >
              <div
                style={{
                  width: "265px",
                  height: "88px",
                  position: "relative",
                  display: "inline-block",
                  flexShrink: "0",
                  zIndex: "1",
                }}
              >
                <p
                  style={{ margin: "0", fontSize: "50px" }}
                >{`After Lives `}</p>
                <p style={{ margin: "0" }}>by Abdulrazak Gurnah</p>
                <p style={{ margin: "0" }}>&nbsp;</p>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "80px",
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "0",
                    backgroundColor: "transparent",
                    flex: "1",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    minWidth: "152px",
                    zIndex: "1",
                  }}
                  onClick={onGroupButton12Click}
                >
                  <div
                    style={{
                      flex: "1",
                      backgroundColor: "#4f6f52",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "center",
                      padding: "17px 20px 18px 31px",
                    }}
                  >
                    <div
                      style={{
                        height: "58px",
                        width: "234px",
                        position: "relative",
                        backgroundColor: "#4f6f52",
                        display: "none",
                      }}
                    />
                    <b
                      style={{
                        width: "51px",
                        position: "relative",
                        fontSize: "20px",
                        display: "inline-block",
                        fontFamily: "Georgia",
                        color: "#fff",
                        textAlign: "left",
                        flexShrink: "0",
                        zIndex: "1",
                      }}
                    >
                      Info
                    </b>
                  </div>
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "17px 54px 18px 67px",
                    backgroundColor: "#4f6f52",
                    flex: "0.4829",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-end",
                    boxSizing: "border-box",
                    minWidth: "152px",
                    whiteSpace: "nowrap",
                    zIndex: "1",
                  }}
                  onClick={onGroupButton13Click}
                >
                  <div
                    style={{
                      height: "58px",
                      width: "234px",
                      position: "relative",
                      backgroundColor: "#4f6f52",
                      display: "none",
                    }}
                  />
                  <b
                    style={{
                      position: "relative",
                      fontSize: "20px",
                      fontFamily: "Georgia",
                      color: "#fff",
                      textAlign: "left",
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
      </section>
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
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
            backgroundColor: "#f4f5f3",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            gap: "82px",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              width: "1120px",
              position: "relative",
              backgroundColor: "#f4f5f3",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <img
            style={{
              height: "367px",
              width: "239px",
              position: "relative",
              objectFit: "cover",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/rectangle-51@2x.png"
          />
          <div
            style={{
              width: "548px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              minWidth: "548px",
              minHeight: "293px",
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
                gap: "80px",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  height: "82px",
                  position: "relative",
                  display: "inline-block",
                  flexShrink: "0",
                  maxWidth: "100%",
                  zIndex: "1",
                }}
              >
                <p
                  style={{ margin: "0", fontSize: "50px" }}
                >{`The Grapes of Wrath `}</p>
                <p style={{ margin: "0" }}>{`by John Steinbeck `}</p>
                <p style={{ margin: "0" }}>&nbsp;</p>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "80px",
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "17px 20px 18px 40px",
                    backgroundColor: "#4f6f52",
                    flex: "1",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    boxSizing: "border-box",
                    minWidth: "152px",
                    zIndex: "1",
                  }}
                  onClick={onGroupButton14Click}
                >
                  <div
                    style={{
                      height: "58px",
                      width: "234px",
                      position: "relative",
                      backgroundColor: "#4f6f52",
                      display: "none",
                    }}
                  />
                  <b
                    style={{
                      width: "60px",
                      position: "relative",
                      fontSize: "20px",
                      display: "inline-block",
                      fontFamily: "Georgia",
                      color: "#fff",
                      textAlign: "left",
                      flexShrink: "0",
                      zIndex: "1",
                    }}
                  >
                    Info
                  </b>
                </button>
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "17px 61px 18px 67px",
                    backgroundColor: "#4f6f52",
                    flex: "0.6092",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    boxSizing: "border-box",
                    minWidth: "152px",
                    whiteSpace: "nowrap",
                    zIndex: "1",
                  }}
                  onClick={onGroupButton15Click}
                >
                  <div
                    style={{
                      height: "58px",
                      width: "234px",
                      position: "relative",
                      backgroundColor: "#4f6f52",
                      display: "none",
                    }}
                  />
                  <b
                    style={{
                      position: "relative",
                      fontSize: "20px",
                      fontFamily: "Georgia",
                      color: "#fff",
                      textAlign: "left",
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
      </section>
    </div>
  );
};

export default TopPicks;
