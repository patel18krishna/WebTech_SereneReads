import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BookJujutsuKaisen = () => {
  const navigate = useNavigate();

  const onSereneReadsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#f4f5f3",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "76px 71px 81px",
        boxSizing: "border-box",
        gap: "99px",
        letterSpacing: "normal",
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
      <main
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          maxWidth: "100%",
        }}
      >
        <section
          style={{
            width: "1120px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "94px 0px 49px",
            boxSizing: "border-box",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "50px",
            color: "#240a34",
            fontFamily: "Georgia",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              height: "5603px",
              position: "relative",
              backgroundColor: "#fff",
              display: "none",
            }}
          />
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0px 20px 72px 56px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <h3
              style={{
                margin: "0",
                width: "406px",
                position: "relative",
                fontSize: "inherit",
                fontWeight: "700",
                fontFamily: "inherit",
                display: "inline-block",
                flexShrink: "0",
                maxWidth: "100%",
                zIndex: "1",
              }}
            >
              Jujutsu Kaisen
            </h3>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: "627px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 2px 0px 1px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <img
              style={{
                height: "627px",
                flex: "1",
                position: "relative",
                maxWidth: "100%",
                overflow: "hidden",
                objectFit: "cover",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/image-153@2x.png"
            />
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: "652px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 2px 25px 1px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <img
              style={{
                height: "627px",
                flex: "1",
                position: "relative",
                maxWidth: "100%",
                overflow: "hidden",
                objectFit: "cover",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/image-162@2x.png"
            />
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: "364px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 0px 25px 3px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <img
              style={{
                height: "339px",
                flex: "1",
                position: "relative",
                maxWidth: "100%",
                overflow: "hidden",
                objectFit: "cover",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/image-172@2x.png"
            />
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: "589px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 0px 25px 3px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <img
              style={{
                height: "564px",
                flex: "1",
                position: "relative",
                maxWidth: "100%",
                overflow: "hidden",
                objectFit: "cover",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/image-182@2x.png"
            />
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: "708px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 0px 22px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <img
              style={{
                height: "686px",
                flex: "1",
                position: "relative",
                maxWidth: "100%",
                overflow: "hidden",
                objectFit: "cover",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/image-191@2x.png"
            />
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: "700px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 0px 11px 3px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <img
              style={{
                height: "689px",
                flex: "1",
                position: "relative",
                maxWidth: "100%",
                overflow: "hidden",
                objectFit: "cover",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/image-211@2x.png"
            />
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: "572px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 0px 36px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <img
              style={{
                height: "536px",
                flex: "1",
                position: "relative",
                maxWidth: "100%",
                overflow: "hidden",
                objectFit: "cover",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/image-232@2x.png"
            />
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: "619px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 0px 36px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <img
              style={{
                height: "583px",
                flex: "1",
                position: "relative",
                maxWidth: "100%",
                overflow: "hidden",
                objectFit: "cover",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/image-242@2x.png"
            />
          </div>
          <img
            style={{
              alignSelf: "stretch",
              height: "501px",
              position: "relative",
              maxWidth: "100%",
              overflow: "hidden",
              flexShrink: "0",
              objectFit: "cover",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/image-252@2x.png"
          />
        </section>
      </main>
    </div>
  );
};

export default BookJujutsuKaisen;
