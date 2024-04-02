import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    navigate("/book-it-starts-with-us-it-ends-with-us");
  }, [navigate]);

  const onTOPPICKSTextClick = useCallback(() => {
    navigate("/top-picks");
  }, [navigate]);

  const onRectangleImage1Click = useCallback(() => {
    navigate("/the-god-of-small-things");
  }, [navigate]);

  const onRectangleImage2Click = useCallback(() => {
    navigate("/book-a-heart-that-works");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onHelpTextClick = useCallback(() => {
    navigate("/help");
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onRectangleImage3Click = useCallback(() => {
    navigate("/book-jujutsu-kaisen");
  }, [navigate]);

  return (
    <section
      style={{
        alignSelf: "stretch",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "90px 70px 66px",
        boxSizing: "border-box",
        maxWidth: "100%",
        gap: "20px",
        textAlign: "left",
        fontSize: "50px",
        color: "#240a34",
        fontFamily: "Georgia",
      }}
    >
      <div
        style={{
          height: "963px",
          width: "1440px",
          position: "relative",
          backgroundColor: "#fff",
          display: "none",
          maxWidth: "100%",
        }}
      />
      <div
        style={{
          height: "490px",
          width: "241px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "126px 0px 0px",
          boxSizing: "border-box",
        }}
      >
        <img
          style={{
            alignSelf: "stretch",
            flex: "1",
            position: "relative",
            borderRadius: "40px",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
            objectFit: "cover",
            cursor: "pointer",
            zIndex: "1",
          }}
          loading="lazy"
          alt=""
          src="/rectangle-23@2x.png"
          onClick={onRectangleImageClick}
        />
      </div>
      <div
        style={{
          width: "604px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 8px 0px 0px",
          boxSizing: "border-box",
          gap: "164px",
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
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0px 20px 0px 125px",
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
                cursor: "pointer",
                zIndex: "1",
              }}
              onClick={onTOPPICKSTextClick}
            >
              TOP PICKS
            </h2>
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
            <img
              style={{
                height: "364px",
                width: "241px",
                position: "relative",
                borderRadius: "40px",
                objectFit: "cover",
                minHeight: "364px",
                cursor: "pointer",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/rectangle-24@2x.png"
              onClick={onRectangleImage1Click}
            />
            <img
              style={{
                height: "364px",
                width: "241px",
                position: "relative",
                borderRadius: "40px",
                objectFit: "cover",
                minHeight: "364px",
                cursor: "pointer",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/rectangle-25@2x.png"
              onClick={onRectangleImage2Click}
            />
          </div>
        </div>
        <div
          style={{
            width: "540px",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 65px",
            boxSizing: "border-box",
            maxWidth: "100%",
            fontSize: "30px",
            fontFamily: "Inter",
          }}
        >
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "35px",
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
                padding: "0px 32px 0px 0px",
                boxSizing: "border-box",
                minWidth: "131px",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  cursor: "pointer",
                  zIndex: "1",
                }}
                onClick={onContactUsTextClick}
              >
                Contact Us
              </div>
            </div>
            <div
              style={{
                height: "153px",
                width: "1px",
                position: "relative",
                borderRight: "1px solid #405f9c",
                boxSizing: "border-box",
                zIndex: "1",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "41px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 2px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    minWidth: "67px",
                    cursor: "pointer",
                    zIndex: "1",
                  }}
                  onClick={onHelpTextClick}
                >
                  Help
                </div>
              </div>
              <div
                style={{ position: "relative", cursor: "pointer", zIndex: "1" }}
                onClick={onAboutUsTextClick}
              >
                About Us
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "490px",
          width: "241px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "126px 0px 0px",
          boxSizing: "border-box",
        }}
      >
        <img
          style={{
            alignSelf: "stretch",
            flex: "1",
            position: "relative",
            borderRadius: "40px",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
            objectFit: "cover",
            cursor: "pointer",
            zIndex: "1",
          }}
          loading="lazy"
          alt=""
          src="/rectangle-26@2x.png"
          onClick={onRectangleImage3Click}
        />
      </div>
    </section>
  );
};

export default FrameComponent;
