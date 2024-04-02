import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BookTheManWhoCollectedPoe = () => {
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
        padding: "76px 71px 96px",
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
            width: "1123px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "89px 20px 126px 23px",
            boxSizing: "border-box",
            gap: "70px",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "50px",
            color: "#240a34",
            fontFamily: "Georgia",
          }}
        >
          <div
            style={{
              width: "1123px",
              height: "3376px",
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
              maxWidth: "100%",
            }}
          >
            <h3
              style={{
                margin: "0",
                height: "121px",
                width: "360px",
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
              The Man Who Collected Poe
            </h3>
          </div>
          <div
            style={{
              width: "900px",
              height: "2970px",
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
              During the whole of a dull, dark, and soundless day in the autumn
              of the year, when the clouds hung oppressively low in the heavens,
              I had been passing alone, by automobile, through a singularly
              dreary tract of country, and at length found myself, as the shades
              of the evening drew on, within view of my destination.
            </p>
            <p style={{ margin: "0" }}>&nbsp;</p>
            <p style={{ margin: "0" }}>
              I looked upon the scene before me—upon the mere house, and the
              simple landscape features of the domain—upon the bleak walls—upon
              the vacant eyelike windows—upon a few rank sedges—and upon a few
              white trunks of decayed trees—with a feeling of utter confusion
              commingled with dismay. For it seemed to me as though I had
              visited this scene once before, or read of it, perhaps, in some
              frequently rescanned tale. And yet assuredly it could not be, for
              only three days had passed since I had made the acquaintance of
              Launcelot Canning and received an invitation to visit him at his
              Maryland residence.
            </p>
            <p style={{ margin: "0" }}>
              The circumstances under which I met Canning were simple; I
              happened to attend a bibliophilic meeting in Washington and was
              introduced to him by a mutual friend. Casual conversation gave
              place to absorbed and interested discussion when he discovered my
              preoccupation with works of fantasy. Upon learning that I was
              traveling upon a vacation with no set itinerary, Canning urged me
              to become his guest for a day and to examine, at my leisure, his
              unusual display of memorabilia.
            </p>
            <p style={{ margin: "0" }}>&nbsp;</p>
            <p style={{ margin: "0" }}>
              “I feel, from our conversation, that we have much in common,” he
              told me. “For you see, sir, in my love of fantasy I bow to no man.
              It is a taste I have perhaps inherited from my father and from his
              father before him, together with their considerable acquisitions
              in the genre. No doubt you would be gratified with what I am
              prepared to show you, for in all due modesty, I beg to style
              myself the world’s leading collector of the works of Edgar Allan
              Poe.”
            </p>
            <p style={{ margin: "0" }}>&nbsp;</p>
            <p style={{ margin: "0" }}>
              I confess that his invitation as such did not enthrall me, for I
              hold no brief for the literary hero-worshipper or the scholarly
              collector as a type. I own to a more than passing interest in the
              tales of Poe, but my interest does not extend to the point of
              ferreting out the exact date upon which Mr. Poe first decided to
              raise a mustache, nor would I be unduly intrigued by the
              opportunity to examine several hairs preserved from that hirsute
              appendage.
            </p>
            <p style={{ margin: "0" }}>&nbsp;</p>
            <p style={{ margin: "0" }}>
              So it was rather the person and personality of Launcelot Canning
              himself which caused me to accept his proffered hospitality. For
              the man who proposed to become my host might have himself stepped
              from the pages of a Poe tale. His speech, as I have endeavored to
              indicate, was characterized by a courtly rodomontade so often
              exemplified in Poe’s heroes—and beyond certainty, his appearance
              bore out the resemblance.
            </p>
            <p style={{ margin: "0" }}>&nbsp;</p>
            <p style={{ margin: "0" }}>
              Launcelot Canning had the cadaverousness of complexion, the large,
              liquid, luminous eye, the thin, curved lips, the delicately
              modeled nose, finely molded chin, and dark, weblike hair of a
              typical Poe protagonist.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookTheManWhoCollectedPoe;
