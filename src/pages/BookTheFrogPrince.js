import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BookTheFrogPrince = () => {
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
        padding: "76px 71px 105px",
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
            padding: "117px 20px 84px",
            boxSizing: "border-box",
            gap: "107px",
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
              height: "1776px",
              position: "relative",
              backgroundColor: "#fff",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <div
            style={{
              width: "900px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0px 0px 0px 28px",
              boxSizing: "border-box",
              maxWidth: "100%",
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
              The Frog Prince
            </h3>
          </div>
          <div
            style={{
              width: "900px",
              height: "1412px",
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
              Once upon a time there was a castle in a faraway land. And in the
              castle lived a very spoilt Princess.
            </p>
            <p style={{ margin: "0" }}>
              The Princess got absolutely everything she ever wanted. A
              golden-maned pony. A candy cane bicycle. And even a diamond
              covered dress, which she never even wore.
            </p>
            <p style={{ margin: "0" }}>
              One morning, the Princess woke up with a greedy look in her eye.
            </p>
            <p style={{ margin: "0" }}>
              “I want a golden ball, Daddy,” she said.
            </p>
            <p style={{ margin: "0" }}>
              “Of course, sugarlump,” said the King, “anything for you!”
            </p>
            <p style={{ margin: "0" }}>
              The King called his head goldsman and said, “Melt down our finest
              golden statue to make this ball immediately!”
            </p>
            <p style={{ margin: "0" }}>
              “Yes, your Kingship,” said the head goldsman.
            </p>
            <p style={{ margin: "0" }}>
              Soon he came back with a magnificent, shining golden ball for the
              Princess.
            </p>
            <p style={{ margin: "0" }}>
              The Princess snatched the golden ball and rushed outside to the
              garden. But she tripped over! The golden ball flew out of her
              hands, high up into the air.
            </p>
            <p style={{ margin: "0" }}>
              Then it came down and landed with a big splosh right in the middle
              of the garden pond. And sank straight to the bottom.
            </p>
            <p style={{ margin: "0" }}>
              “Oh, fiddlesticks,” muttered the Princess.
            </p>
            <p style={{ margin: "0" }}>Then the strangest thing happened.</p>
            <p style={{ margin: "0" }}>“Needeep, I can help,” said a voice.</p>
            <p style={{ margin: "0" }}>
              The Princess looked around but no one was there.
            </p>
            <p style={{ margin: "0" }}>
              “I said I can help,” said the voice again.
            </p>
            <p style={{ margin: "0" }}>
              The Princess looked down to see a little green frog smiling and
              waving up at her.
            </p>
            <p style={{ margin: "0" }}>&nbsp;</p>
            <p style={{ margin: "0" }}>The End</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookTheFrogPrince;
