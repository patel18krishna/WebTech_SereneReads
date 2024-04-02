import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Poetry = () => {
  const navigate = useNavigate();

  const onSereneReadsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/book-scouting-for-boys");
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
        padding: "76px 71px 233px",
        boxSizing: "border-box",
        gap: "2912px",
        letterSpacing: "normal",
        textAlign: "left",
        fontSize: "30px",
        color: "#000",
        fontFamily: "Inter",
      }}
    >
      <section
        style={{
          width: "1210px",
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
          style={{
            width: "248px",
            position: "relative",
            display: "inline-block",
            cursor: "pointer",
          }}
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
              width: "1119px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "102px",
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
                padding: "0px 23px 0px 20px",
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
                  padding: "0px 0px 0px 58px",
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
                    height: "97px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "0px 0px 21px",
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    style={{
                      width: "76px",
                      height: "76px",
                      position: "relative",
                      objectFit: "cover",
                      zIndex: "1",
                    }}
                    loading="lazy"
                    alt=""
                    src="/image-145@2x.png"
                  />
                </div>
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "42px 37px 41px 45px",
                    backgroundColor: "#240a34",
                    width: "196px",
                    borderRadius: "0px 40px 40px 0px",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
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
                      flex: "1",
                      position: "relative",
                      fontSize: "30px",
                      fontFamily: "Georgia",
                      color: "#fff",
                      textAlign: "left",
                      zIndex: "2",
                    }}
                  >
                    Poetry
                  </div>
                </button>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                backgroundColor: "#fff",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 0px 3px",
                boxSizing: "border-box",
                gap: "38px",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  width: "1119px",
                  position: "relative",
                  backgroundColor: "#fff",
                  display: "none",
                  maxWidth: "100%",
                }}
              />
              <img
                style={{
                  height: "323px",
                  width: "200px",
                  position: "relative",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                loading="lazy"
                alt=""
                src="/image-26@2x.png"
              />
              <div
                style={{
                  width: "485px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "47px 0px 0px",
                  boxSizing: "border-box",
                  minWidth: "485px",
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
                    gap: "67px",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      height: "80px",
                      position: "relative",
                      display: "inline-block",
                      flexShrink: "0",
                      zIndex: "1",
                    }}
                  >
                    <p
                      style={{ margin: "0", fontSize: "50px" }}
                    >{`Scouting for Boys `}</p>
                    <p style={{ margin: "0" }}>by Dryden</p>
                    <p style={{ margin: "0" }}>&nbsp;</p>
                  </div>
                  <button
                    style={{
                      cursor: "pointer",
                      border: "none",
                      padding: "15px 57px 15px 58px",
                      backgroundColor: "#4f6f52",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      whiteSpace: "nowrap",
                      zIndex: "1",
                    }}
                    onClick={onGroupButtonClick}
                  >
                    <div
                      style={{
                        height: "51px",
                        width: "215px",
                        position: "relative",
                        backgroundColor: "#4f6f52",
                        display: "none",
                      }}
                    />
                    <b
                      style={{
                        position: "relative",
                        fontSize: "20px",
                        fontFamily: "Inter",
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

export default Poetry;
