import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  const onSereneReadsTextClick = useCallback(() => {
    navigate("/");
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
        padding: "76px 71px 182px",
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
        style={{ position: "relative", flexShrink: "0", cursor: "pointer" }}
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
          justifyContent: "flex-start",
          padding: "0px 58px 2762px 57px",
          boxSizing: "border-box",
          maxWidth: "100%",
          flexShrink: "0",
        }}
      >
        <section
          style={{
            flex: "1",
            borderRadius: "40px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "47px 20px 88px",
            boxSizing: "border-box",
            gap: "53px",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "65px",
            color: "#240a34",
            fontFamily: "Georgia",
          }}
        >
          <div
            style={{
              width: "1183px",
              height: "626px",
              position: "relative",
              borderRadius: "40px",
              backgroundColor: "#fff",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <div
            style={{
              width: "1011px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0px 0px 0px 1px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <h1
              style={{
                margin: "0",
                height: "78px",
                position: "relative",
                fontSize: "inherit",
                textDecoration: "underline",
                fontWeight: "700",
                fontFamily: "inherit",
                display: "inline-block",
                zIndex: "1",
              }}
            >
              About Us
            </h1>
          </div>
          <div
            style={{
              width: "1011px",
              position: "relative",
              fontSize: "40px",
              textAlign: "justify",
              display: "inline-block",
              maxWidth: "100%",
              zIndex: "1",
            }}
          >
            Welcome to SereneReads, your online sanctuary for stories and
            knowledge! We're more than just a digital library; we're a community
            of avid readers dedicated to making literary exploration accessible
            and enjoyable. Dive into our carefully curated collection, join
            engaging discussions, and let the magic of reading unfold. Discover,
            connect, and embark on a shared journey with us at SereneReads.
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
        <div
          style={{
            alignSelf: "stretch",
            width: "170px",
            position: "relative",
            display: "inline-block",
            flexShrink: "0",
          }}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
