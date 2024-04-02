import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BookTheGrapesOfWrath = () => {
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
            padding: "107px 20px 47px",
            boxSizing: "border-box",
            gap: "117px",
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
              height: "3613px",
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
              padding: "0px 0px 0px 46px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <h3
              style={{
                margin: "0",
                width: "562px",
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
              The Grapes of Wrath
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
            <p style={{ margin: "0" }}>Chapter 1</p>
            <p style={{ margin: "0" }}>&nbsp;</p>
            <p style={{ margin: "0" }}>
              To the red country and part of the gray country of Oklahoma, the
              last rains came gently, and they did not cut the scarred earth.
              The plows crossed and recrossed the rivulet marks. The last rains
              lifted the corn quickly and scattered weed colonies and grass
              along the sides of the roads so that the gray country and the dark
              red country began to disappear under a green cover. In the last
              part of May the sky grew pale and the clouds that had hung in high
              puffs for so long in the spring were dissipated. The sun flared
              down on the growing corn day after day until a line of brown
              spread along the edge of each green bayonet. The clouds appeared,
              and went away, and in a while they did not try any more. The weeds
              grew darker green to protect themselves, and they did not spread
              any more. The surface of the earth crusted, a thin hard crust, and
              as the sky became pale, so the earth became In the water-cut
              gullies the earth dusted down in dry little streams. Gophers and
              ant lions started small avalanches. And as the sharp sun struck
              day after day, the leaves of the young corn became less stiff and
              erect; they bent in a curve at first, and then, as the central
              ribs of strength grew weak, each leaf tilted downward. Then it was
              June, and the sun shone more fiercely. The brown lines on the corn
              leaves widened and moved in on the central ribs. The weeds frayed
              and edged back toward their roots. The air was thin and the sky
              more pale; and every day the earth paled. In the roads where the
              teams moved, where the wheels milled the ground and the hooves of
              the horses beat the ground, the dirt crust broke and the dust
              formed. Every moving thing lifted the dust into the air: a walking
              man lifted a thin layer as high as his waist, and a wagon lifted
              the dust as high as the fence tops, and an automobile boiled a
              cloud behind it. The dust was long in settling back again.
            </p>
            <p style={{ margin: "0" }}>&nbsp;</p>
            <p style={{ margin: "0" }}>
              When June was half gone, the big clouds moved up out of Texas and
              the Gulf, high heavy clouds, rain-heads. The men in the fields
              looked up at the clouds and sniffed at them and held wet fingers
              up to sense the wind. And the horses were nervous while the clouds
              were up. The rain-heads dropped a little spattering and hurried on
              to some other country. Behind them the sky was pale again and the
              sun flared.n the dust there were drop craters where the rain had
              fallen, and there were clean splashes on the corn, and that was
              all.
            </p>
            <p style={{ margin: "0" }}>&nbsp;</p>
            <p style={{ margin: "0" }}>
              A gentle wind followed the rain clouds, driving them on northward,
              a wind that softly clashed the drying corn. A day went by and the
              wind increased, steady, unbroken by gusts. The dust from the roads
              fluffed up and spread out and fell on the weeds beside the fields,
              and fell into the fields a little way. Now the wind grew strong
              and hard and it worked at the rain crust in the corn fields.
              Little by little the sky was darkened by the mixing dust, and the
              wind felt over the earth, loosened the dust,
            </p>
            <p style={{ margin: "0" }}>&nbsp;</p>
            <p style={{ margin: "0" }}>
              and carried it away. The wind grew stronger. The rain crust broke
              and the dust lifted up out of the fields and drove gray plumes
              into the air like sluggish smoke. The corn threshed he wind and
              made a dry, rushing sound. The finest dust did not settle back to
              earth now, but disappeared into the darkening sky.
            </p>
            <p style={{ margin: "0" }}>&nbsp;</p>
            <p
              style={{ margin: "0" }}
            >{`The wind grew stronger, whisked under stones, carried up straws and old leaves, and even little clods, marking its course as it sailed across the fields. `}</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookTheGrapesOfWrath;
