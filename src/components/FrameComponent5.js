import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent5 = () => {
  const navigate = useNavigate();

  const onMasashiKishimotoInfoClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <section
      style={{
        width: "1391px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 0px 68px 20px",
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "70px",
        color: "#240a34",
        fontFamily: "Georgia",
      }}
    >
      <div
        style={{
          width: "1321px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 20px 0px 0px",
          boxSizing: "border-box",
          gap: "66px",
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
            gap: "54px",
            minWidth: "413px",
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
                padding: "0px 0px 0px 2px",
                boxSizing: "border-box",
                maxWidth: "100%",
              }}
            >
              <h1
                style={{
                  margin: "0",
                  height: "150px",
                  flex: "1",
                  position: "relative",
                  fontSize: "inherit",
                  fontWeight: "700",
                  fontFamily: "inherit",
                  display: "inline-block",
                  maxWidth: "100%",
                }}
              >
                Reading chills up your mind
              </h1>
            </div>
            <div
              style={{
                width: "609px",
                position: "relative",
                fontSize: "30px",
                textAlign: "justify",
                display: "inline-block",
                maxWidth: "100%",
              }}
            >
              Welcome to SereneReads. We provide thousands of books,
              magazines and much more to our readers.
            </div>
          </div>
          <div
            style={{
              width: "50px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "41px",
              maxWidth: "100%",
              fontSize: "20px",
              color: "#fff",
              fontFamily: "Inter",
            }}
          >
            <div
              style={{
                height: "47px",
                flex: "1",
                position: "relative",
                minWidth: "130px",
                whiteSpace: "nowrap",
              }}
            >
              
            </div>
            <div
              style={{
                borderRadius: "20px",
                backgroundColor: "#4f6f52",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "11px 71px 9.699999999999989px 66px",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
              onClick={onGroupContainerClick}
            >
              <div
                style={{
                  height: "46.7px",
                  width: "200px",
                  position: "absolute",
                  borderRadius: "20px",
                  backgroundColor: "#4f6f52",
                  display: "none",
                }}
              />
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  minWidth: "10px",
                  zIndex: "1",
                }}
              >
                Log in
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "599px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "34px 0px 0px",
            boxSizing: "border-box",
            minWidth: "599px",
            maxWidth: "10%",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              height: "426px",
              position: "relative",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "3px",
                left: "0px",
                width: "241px",
                height: "364px",
                objectFit: "cover",
              }}
              alt=""
              src="/contact-us-button@2x.png"
            />
            <img
              style={{
                position: "absolute",
                top: "0px",
                left: "358px",
                width: "241px",
                height: "367px",
                objectFit: "cover",
              }}
              loading="lazy"
              alt=""
              src="/image-14@2x.png"
            />
            <img
              style={{
                position: "absolute",
                top: "62px",
                left: "158px",
                width: "241px",
                height: "364px",
                objectFit: "cover",
                zIndex: "1",
              }}
              alt=""
              src="/contact-us-button1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
