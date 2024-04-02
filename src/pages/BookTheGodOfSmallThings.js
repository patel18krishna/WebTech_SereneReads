import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BookTheGodOfSmallThings = () => {
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
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "101px 73px 303px",
            boxSizing: "border-box",
            gap: "119px",
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
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0px 0px 0px 2px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <h3
              style={{
                margin: "0",
                width: "645px",
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
              The god of small things
            </h3>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: "3195px",
              position: "relative",
              fontSize: "40px",
              color: "#000",
              whiteSpace: "pre-wrap",
              textAlign: "justify",
              display: "inline-block",
              zIndex: "1",
            }}
          >{`Chapter 1. Paradise Pickles & Preserves  May in Ayemenem is a hot, brooding month. The days are long and humid. The river shrinks and black crows gorge on bright mangoes in still, dustgreen trees. Red bananas ripen. Jackfruits burst. Dissolute bluebottles hum vacuously in the fruity air. Then they stun themselves against clear windowpanes and die, fatly baffled in the sun.  The nights are clear, but suffused with sloth and sullen expectation.  But by early June the southwest monsoon breaks and there are three months of wind and water with short spells of sharp, glittering sunshine that thrilled children snatch to play with. The countryside turns an immodest green. Boundaries blur as tapioca fences take root and bloom. Brick walls turn moss green. Pepper vines snake up electric poles. Wild creepers burst through laterite banks and spill across flooded roads. Boats ply in the bazaars. And small fish appear in the puddles that fill the PWD potholes on the highways.  It was raining when Rahel came back to Ayemenem. Slanting silver ropes slammed into loose earth, plowing it up like gunfire. The old house on the hill wore its steep, gabled roof pulled over its ears like a low hat. The walls, streaked with moss, had grown soft, and bulged a little with dampness that seeped up from the ground. The wild, overgrown garden was full of the whisper and scurry of small lives. In the undergrowth a rat snake rubbed itself against a glistening stone. Hopeful yellow bullfrogs cruised the scummy pond for mates. A drenched mongoose flashed across the leaf-strewn driveway.  The house itself looked empty. The doors and windows were locked. The front verandah bare. Unfurnished. But the skyblue Plymouth with chrome tailfins was still parked outside, and inside, Baby Kochamma was still alive.  She was Rahel’s baby grandaunt, her grandfather’s younger sister. Her name was really Navomi, Navomi Ipe, but everybody called her Baby. She became Baby Kochamma when she was old enough to be an aunt. Rahel hadn’t come to see her, though. Neither niece nor baby grandaunt labored under any illusions on that account. Rahel had come to see her brother, Estha. They were two-egg twins. “Dizygotic” doctors called them. Born from separate but simultaneously fertilized eggs. Estha—Esthappen was the older by eighteen minutes.  They never did look much like each other, Estha and Rahel, and even when they were thin-armed children, flat-chested, wormridden and Elvis Presley-puffed, there was none of the usual “Who is who?” and “Which is which?” from oversmiling relatives or the Syrian Orthodox bishops who frequently visited the Ayemenem House for donations.  The confusion lay in a deeper, more secret place.  In those early amorphous years when memory had only just begun, when life was full of Beginnings and no Ends, and Everything was Forever, Esthappen and Rahel thought of themselves together as Me, and separately, individually, as We or Us. As though they were a rare breed of Siamese twins, physically separate, but with joint identities.  Now, these years later, Rahel has a memory of waking up one night giggling at Estha’s funny dream.  She has other memories too that she has no right to have.  She remembers, for instance (though she hadn’t been there), what the Orangedrink Lemondrink Man did to Estha in Abhilash Talkies. She remembers the taste of the tomato sandwiches—Estha’s sandwiches, that Estha ate—on the Madras Mail to Madras.  And these are only the small things.   Anyway, now she thinks of Estha and Rahel as Them, because, separately, the two of them are no longer what They were or ever thought They would be.`}</div>
        </section>
      </main>
    </div>
  );
};

export default BookTheGodOfSmallThings;
