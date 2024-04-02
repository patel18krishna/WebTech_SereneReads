import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BookHarryPotter = () => {
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
        padding: "76px 71px 179px",
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
          justifyContent: "flex-start",
          padding: "0px 58px 0px 57px",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <section
          style={{
            flex: "1",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "104px 108px 47px 125px",
            boxSizing: "border-box",
            gap: "120px",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "50px",
            color: "#240a34",
            fontFamily: "Georgia",
          }}
        >
          <div
            style={{
              width: "1183px",
              height: "3613px",
              position: "relative",
              backgroundColor: "#fff",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <div
            style={{
              width: "934px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
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
                background: "linear-gradient(#240a34, #240a34), #240a34",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                zIndex: "1",
              }}
            >
              <p style={{ margin: "0" }}>Harry Potter</p>
            </h3>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: "3286px",
              position: "relative",
              fontSize: "40px",
              textAlign: "justify",
              display: "inline-block",
              flexShrink: "0",
              zIndex: "1",
            }}
          >
            <p style={{ margin: "0" }}>
              Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to
              say that they were perfectly normal, thank you very much. They
              were the last people you’d expect to be involved in anything
              strange or mysterious, because they just didn’t hold with such
              nonsense.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              Mr. Dursley was the director of a ﬁrm called Grunnings, which made
              drills. He was a big, beefy man with hardly any neck, although he
              did have a very large mustache. Mrs. Dursley was thin and blonde
              and had nearly twice the usual amount of neck, which came in very
              useful as she spent so much of her time craning over garden
              fences, spying on the neighbors. The Dursleys had a small son
              called Dudley and in their opinion there was no ﬁner boy anywhere.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              The Dursleys had everything they wanted, but they also had a
              secret, and their greatest fear was that somebody would discover
              it. They didn’t think they could bear it if anyone found out about
              the Potters. Mrs. Potter was Mrs. Dursley’s sister, but they
              hadn’t met for several years; in fact, Mrs. Dursley pretended she
              didn’t have a sister, because her sister and her good-for-nothing
              husband were as unDursleyish as it was possible to be. The
              Dursleys shuddered to think what the neighbors would say if the
              Potters arrived in the street. The Dursleys knew that the Potters
              had a small son, too, but they had never even seen him. This boy
              was another good reason for keeping the Potters away; they didn’t
              want Dudley mixing with a child like that.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              When Mr. and Mrs. Dursley woke up on the dull, gray Tuesday our
              story starts, there was nothing about the cloudy sky outside to
              suggest that strange and mysterious things would soon be happening
              all over the country. Mr. Dursley hummed as he picked out his most
              boring tie for work, and Mrs. Dursley gossiped away happily as she
              wrestled a screaming Dudley into his high chair.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              None of them noticed a large, tawny owl ﬂutter past the window.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              At half past eight, Mr. Dursley picked up his briefcase, pecked
              Mrs. Dursley on the cheek, and tried to kiss Dudley good-bye but
              missed, because Dudley was now having a tantrum and throwing his
              cereal at the walls. “Little tyke,” chortled Mr. Dursley as he
              left the house. He got into his car and backed out of number
              four’s drive.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              It was on the corner of the street that he noticed the ﬁrst sign
              of something peculiar — a cat reading a map. For a second, Mr.
              Dursley didn’t realize what he had seen — then he jerked his head
              around to look again. There was a tabby cat standing on the corner
              of Privet Drive, but there wasn’t a map in sight. What could he
              have been thinking of? It must have been a trick of the light. Mr.
              Dursley blinked and stared at the cat. It stared back. As Mr.
              Dursley drove around the corner and up the road, he watched the
              cat in his mirror. It was now reading the sign that said Privet
              Drive — no, looking at the sign; cats couldn’t read maps or signs.
              Mr. Dursley gave himself a little shake and put the cat out of his
              mind. As he drove toward town he thought of nothing except a large
              order of drills he was hoping to get that day.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookHarryPotter;
