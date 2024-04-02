import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BookNaruto = () => {
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
        padding: "76px 71px 92px",
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
          height: "5852px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          maxWidth: "100%",
        }}
      >
        <section
          style={{
            alignSelf: "stretch",
            width: "1120px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "87px 0px 0px",
            boxSizing: "border-box",
            gap: "23px",
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
              height: "5852px",
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
              padding: "0px 20px 56px",
            }}
          >
            <h3
              style={{
                margin: "0",
                position: "relative",
                fontSize: "inherit",
                fontWeight: "700",
                fontFamily: "inherit",
                zIndex: "1",
              }}
            >
              Naruto
            </h3>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              flex: "1",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 2px 13px 1px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                maxWidth: "100%",
              }}
            >
              <img
                style={{
                  alignSelf: "stretch",
                  height: "806px",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  flexShrink: "0",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                loading="lazy"
                alt=""
                src="/image-152@2x.png"
              />
              <img
                style={{
                  alignSelf: "stretch",
                  height: "724px",
                  position: "relative",
                  maxWidth: "100%",
                  overflow: "hidden",
                  flexShrink: "0",
                  objectFit: "cover",
                  zIndex: "1",
                }}
                loading="lazy"
                alt=""
                src="/image-161@2x.png"
              />
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: "563px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 0px 12px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <img
              style={{
                height: "551px",
                flex: "1",
                position: "relative",
                maxWidth: "100%",
                overflow: "hidden",
                objectFit: "cover",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/image-181@2x.png"
            />
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: "1017px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 0px 12px 3px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <img
              style={{
                height: "1005px",
                flex: "1",
                position: "relative",
                maxWidth: "100%",
                overflow: "hidden",
                objectFit: "cover",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/image-171@2x.png"
            />
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: "577px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 0px 0px 3px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <img
              style={{
                height: "577px",
                flex: "1",
                position: "relative",
                maxWidth: "100%",
                overflow: "hidden",
                objectFit: "cover",
                zIndex: "1",
              }}
              loading="lazy"
              alt=""
              src="/image-221@2x.png"
            />
          </div>
          <img
            style={{
              alignSelf: "stretch",
              height: "381px",
              position: "relative",
              maxWidth: "100%",
              overflow: "hidden",
              flexShrink: "0",
              objectFit: "cover",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/image-231@2x.png"
          />
          <img
            style={{
              alignSelf: "stretch",
              height: "541px",
              position: "relative",
              maxWidth: "100%",
              overflow: "hidden",
              flexShrink: "0",
              objectFit: "cover",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/image-241@2x.png"
          />
          <img
            style={{
              alignSelf: "stretch",
              height: "870px",
              position: "relative",
              maxWidth: "100%",
              overflow: "hidden",
              flexShrink: "0",
              objectFit: "cover",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/image-251@2x.png"
          />
        </section>
      </main>
    </div>
  );
};

export default BookNaruto;
