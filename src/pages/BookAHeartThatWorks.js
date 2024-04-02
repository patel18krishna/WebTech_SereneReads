import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BookAHeartThatWorks = () => {
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
        padding: "76px 71px 0px",
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
            padding: "109px 20px 182px",
            boxSizing: "border-box",
            gap: "115px",
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
              height: "3825px",
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
              padding: "0px 0px 0px 40px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <h3
              style={{
                margin: "0",
                width: "514px",
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
              A Heart That works
            </h3>
          </div>
          <div
            style={{
              width: "900px",
              height: "3330px",
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
              The air in Los Angeles hung heavy with the promise of another
              scorching summer day as I sat across from Rob Delaney. The man who
              usually weaved comedic gold from the fabric of everyday life now
              had a haunted look in his eyes. Laughter lines, once etched deep
              by years of stand-up and witty tweets, had become canyons of
              worry.
            </p>
            <p style={{ margin: "0" }}>
              "It started with a cough," he said, his voice raspy. "A damn cough
              that wouldn't quit." He leaned back in his chair, the familiar
              glint of mischief momentarily flickering in his gaze before
              succumbing to the weight of his story.
            </p>
            <p style={{ margin: "0" }}>
              His wife, Leah, a constant presence by his side, offered a
              supportive smile, her own eyes mirroring the same quiet strength.
              This wasn't a conversation about a new Netflix special or a
              particularly scathing political tweet. It was about Henry, their
              two-year-old son, and the monstrous shadow that had fallen across
              their seemingly perfect life.
            </p>
            <p style={{ margin: "0" }}>
              The diagnosis was a sucker punch – a brain tumor, a thief lurking
              in their most precious possession. The world, once a vibrant stage
              for Rob's comedic talents, morphed into a sterile hospital room,
              the sterile white a stark contrast to the kaleidoscope of colors
              that was Henry's smile.
            </p>
            <p style={{ margin: "0" }}>
              He poured his story onto the page, a raw and unflinching account
              of the battle they waged. The memories of tickle fights and
              bedtime stories became tangled with the harsh reality of needles
              and bone marrow biopsies. He wrote about the fear, a primal scream
              echoing in the quiet corners of their lives, a fear that gnawed at
              them every time Henry's tiny body convulsed with a fever.
            </p>
            <p style={{ margin: "0" }}>
              Anger, a feral beast, clawed at his sanity. How could this be
              Henry? Their little ball of sunshine, reduced to a patient, his
              days stolen by the sterile walls of the hospital. The injustice of
              it all threatened to consume him. Yet, in the quiet moments,
              holding his son who looked more fragile with each passing day, a
              wave of love would surge through him, a fierce tide pushing back
              the darkness.
            </p>
            <p style={{ margin: "0" }}>
              Grief, he discovered, wasn't a solitary path, but a labyrinth. A
              dizzying carousel of sorrow, despair, and fleeting moments of
              acceptance. There were days when laughter, a ghost of his old
              self, would bubble up – a shared joke with Leah, a silly face
              pulled for Henry, a reminder that life, even in the face of
              tragedy, still held beauty.
            </p>
            <p style={{ margin: "0" }}>
              He wrote about the absurdities of the hospital, the gallows humor
              that became their lifeline. The overly enthusiastic doctors, the
              vending machine dispensing stale candy, the fluorescent lights
              buzzing with a mocking indifference – these became his targets, a
              way to reclaim a sliver of control, to find light in the
              suffocating darkness.
            </p>
            <p style={{ margin: "0" }}>
              The fight was relentless – days bleeding into weeks, then months.
              Henry, a tiny warrior, endured it all with a stoicism that belied
              his age. He lost his hair, the bright curls replaced by a smooth
              skull. But his smile, even when weak, still held the power to melt
              away the ice around Rob's heart.
            </p>
            <p style={{ margin: "0" }}>
              The inevitable arrived, a silent thief stealing away their
              sunshine. The pain was a physical entity, a crushing weight in his
              chest. Tears, a foreign concept for a man used to making others
              laugh, flowed freely. He wrote about the rawness of the grief, the
              suffocating loneliness, and the despair that threatened to drown
              him.
            </p>
            <p style={{ margin: "0" }}>
              Yet, through it all, the love for Henry remained, an anchor in the
              storm. He wrote about the memories, a tapestry woven with silly
              bedtime songs, first wobbly steps, and the gummy smile after a
              stolen cookie. He built an altar of love in his words, a testament
              to the life that had been so tragically cut short.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookAHeartThatWorks;
