import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BookTheOtherName = () => {
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
        padding: "76px 71px 129px",
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
          padding: "0px 3px 0px 0px",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <section
          style={{
            width: "1117px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "115px 20px 208px 23px",
            boxSizing: "border-box",
            gap: "109px",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "50px",
            color: "#240a34",
            fontFamily: "Georgia",
          }}
        >
          <div
            style={{
              width: "1117px",
              height: "3774px",
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
              padding: "0px 0px 0px 19px",
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
              The Other Name
            </h3>
          </div>
          <div
            style={{
              width: "900px",
              height: "3286px",
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
              A biting November wind tore at the weathered shingles of Asle's
              cabin, a mournful symphony echoing the hollowness within. The once
              vibrant hues on his easel had morphed into a storm of grays and
              blues, mirroring the turbulent sea visible through the window.
              Asle, a widower with a head that felt heavy with memories and a
              heart laden with grief, found solace only in the rhythmic dance of
              his brush against the canvas.
            </p>
            <p style={{ margin: "0" }}>
              One day, a crisp white envelope arrived, a stark contrast to the
              leaden sky. It was from Beyer, his art dealer friend who lived
              further south. Asle tore it open with a practiced ease, the
              familiar scent of paper and ink a comfort. But the words that
              danced before his eyes shattered his quiet solitude. Beyer spoke
              of another Asle, a painter residing in the nearby town of
              Bjørgvin.
            </p>
            <p style={{ margin: "0" }}>
              The revelation struck Asle like a rogue wave. Could this be a
              long-lost relative, a forgotten chapter in the tapestry of his
              life? A knot of curiosity tightened in his gut, the embers of a
              long-dormant yearning flickering awake. He pictured childhood
              faces, searching for a resemblance, a connection.
            </p>
            <p style={{ margin: "0" }}>
              The journey to Bjørgvin was shrouded in a mist that mirrored the
              turmoil within Asle. The landscape, once familiar, now held an
              unsettling air of déjà vu, as if echoing a life he never lived.
              The cobbled streets of Bjørgvin glistened with rain, the air thick
              with the scent of fish and woodsmoke. Finally, he found the
              address scrawled on Beyer's note - a small, unassuming building
              tucked away in a forgotten corner.
            </p>
            <p style={{ margin: "0" }}>
              He climbed the creaking stairs, each step echoing the thrumming of
              his heart. A man emerged, his face etched with the same lines as
              Asle's own, yet etched deeper, with a weariness that spoke of
              battles fought and lost. This was the other Asle, a man burdened
              by the weight of a life unlived.
            </p>
            <p style={{ margin: "0" }}>
              Their initial meeting was a dance of awkward silences and hesitant
              smiles. Each word felt laden with unspoken questions, each glance
              a reflection staring back. Asle, the narrator, saw in the other a
              chilling reminder of the paths not taken, the roads less traveled.
              The other Asle, his eyes filled with a flicker of recognition,
              glimpsed a life of fulfillment that had slipped through his grasp.
            </p>
            <p style={{ margin: "0" }}>
              Days turned into weeks as they hesitantly delved into the past. As
              children, they had shared the same village, their laughter echoing
              across the meadows. Both harbored a love for art, their youthful
              imaginations fueled by stolen moments with paint and brushes. Yet,
              a pivotal decision, a twist of fate, had set their lives on
              divergent courses.
            </p>
            <p style={{ margin: "0" }}>
              Asle, the narrator, had followed the path of artistic pursuit, his
              heart leading him to his childhood sweetheart. Together, they had
              built a life by the sea, filled with shared dreams and the quiet
              contentment of a life well-lived. The other Asle, haunted by a
              childhood accident, had retreated from the world, seeking solace
              in the bottom of a bottle. His dreams remained unfulfilled, his
              canvas untouched.
            </p>
            <p style={{ margin: "0" }}>
              Their conversations were filled with long pauses, pregnant with
              unspoken emotions. Asle, the narrator, wrestled with the choices
              that had shaped his life, the joys and regrets that colored his
              tapestry. The other Asle, for the first time in years, felt a
              flicker of hope, a glimpse of a life that could have been.
            </p>
            <p style={{ margin: "0" }}>
              As winter tightened its grip on Norway, so did the mystery
              surrounding the two Asles. Their chance encounter had become a
              catalyst for introspection. They were no longer just two men with
              the same name; they were reflections, doppelgangers, reminders of
              the power of choices and the weight of the unlived life.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookTheOtherName;
