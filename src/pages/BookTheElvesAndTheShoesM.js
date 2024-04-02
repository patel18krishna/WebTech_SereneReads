import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BookTheElvesAndTheShoesM = () => {
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
        padding: "76px 71px 61px",
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
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "81px 20px 0px 21px",
            boxSizing: "border-box",
            gap: "57px",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "50px",
            color: "#240a34",
            fontFamily: "Georgia",
          }}
        >
          <div
            style={{
              width: "1120px",
              height: "2035px",
              position: "relative",
              backgroundColor: "#fff",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <div
            style={{
              width: "899px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0px 1px 0px 0px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <h3
              style={{
                margin: "0",
                height: "142px",
                width: "402px",
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
              The Elves and the Shoe Maker
            </h3>
          </div>
          <div
            style={{
              width: "899px",
              height: "1755px",
              position: "relative",
              fontSize: "40px",
              textAlign: "justify",
              display: "inline-block",
              flexShrink: "0",
              maxWidth: "100%",
              zIndex: "1",
            }}
          >
            <p style={{ margin: "0" }}>
              Once, there lived a kind, but exceedingly poor shoemaker.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              He was an honest, hard-working man, but he had fallen on hard
              times. So hard, in fact, that he could no longer make ends meet.
              All that remained in his workshop was enough leather to make a
              single pair of shoes.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              the shoemaker stands at a table in an orange top touching a large
              piece of leather stretched out in front of him
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              In the light of the setting sun, he carefully cut out his last
              piece of fine leather and neatly laid it on his workbench, ready
              to finish his work the following day.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              He closed the door of his workshop, let out a heavy sigh and
              returned home to be with his wife.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              “Take my hand, dear,” he said. “Let us make a wish for our
              fortunes to change and for our years of hard work to finally bring
              us the ample reward that we deserve.”
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              His wife stretched out her arms, laid her hands softly into his
              and they made their wish.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              the shoemaker sits on a yellow sofa holding hands with his wife
              who is dressed in a long purple dress
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              The shoemaker rose early the following morning. As usual he ate
              his breakfast, brushed his teeth, gave his wife a kiss on the
              cheek and made his way to the workshop.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>the shoemaker kisses his wifes cheek</p>
            <p style={{ margin: "0" }}></p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookTheElvesAndTheShoesM;
