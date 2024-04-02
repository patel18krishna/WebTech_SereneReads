import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BookItStartsWithUsItEnds = () => {
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
        padding: "76px 71px 85px",
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
          padding: "0px 0px 0px 4px",
          boxSizing: "border-box",
          maxWidth: "100%",
        }}
      >
        <section
          style={{
            width: "1116px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "109px 20px 113px",
            boxSizing: "border-box",
            gap: "115px",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "20px",
            color: "#240a34",
            fontFamily: "Georgia",
          }}
        >
          <div
            style={{
              width: "1116px",
              height: "5523px",
              position: "relative",
              backgroundColor: "#fff",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <div
            style={{
              width: "904px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "0px 0px 0px 28px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <b
              style={{
                height: "56px",
                width: "440px",
                position: "relative",
                display: "inline-block",
                flexShrink: "0",
                maxWidth: "100%",
                zIndex: "1",
              }}
            >
              <p
                style={{ margin: "0", fontSize: "50px" }}
              >{`It Starts With Us `}</p>
              <p style={{ margin: "0" }}>&nbsp;</p>
              <p style={{ margin: "0" }}>&nbsp;</p>
            </b>
          </div>
          <div
            style={{
              width: "900px",
              height: "5130px",
              position: "relative",
              fontSize: "40px",
              textAlign: "justify",
              display: "inline-block",
              flexShrink: "0",
              maxWidth: "100%",
              zIndex: "1",
            }}
          >
            <p style={{ margin: "0" }}>Chapter One:</p>
            <p style={{ margin: "0" }}>Atlas </p>
            <p style={{ margin: "0" }}>
              The wayass wholeis misspelled in red spray paint across the back
              door of Bib’s makes me think of my mother. 
            </p>
            <p style={{ margin: "0" }}>
              She would always insert a brief pause between syllables, making it
              sound like two separate words. I wanted to laugh every time I
              heard it, but it was hard to find the humor in it as a child when
              I was always the recipient of the hurled insult. 
            </p>
            <p style={{ margin: "0" }}>
              “Ass… whole,” Darin mutters. “Had to be a kid. Most adults know
              how to spell that word.” 
            </p>
            <p style={{ margin: "0" }}>
              “You’d be surprised.” I touch the paint, but it doesn’t stick to
              my fingers. Whoever did this must have done it right after we
              closed last night. 
            </p>
            <p style={{ margin: "0" }}>
              “Do you think the misspelling was intentional?” he asks. “Are they
              suggesting you’re so much of an asshole that you’re a
              wholeentireass?” 
            </p>
            <p style={{ margin: "0" }}>
              “Why do you assume they were targetingme? They could have been
              targeting you or Brad.” 
            </p>
            <p style={{ margin: "0" }}>
              “It’s your restaurant.” Darin takes off his jacket and uses it to
              pry a large shard of exposed broken glass out of the window.
              “Maybe it was a disgruntled employee.” 
            </p>
            <p style={{ margin: "0" }}>
              “Do I have disgruntled employees?” I can’t think of a single
              person on payroll who would do something like this.The last person
              I’d had quit was five months ago, and she left on good terms after
              getting a college degree. 
            </p>
            <p style={{ margin: "0" }}>
              “There was that guy who did the dishes before you hired Brad. What
              was his name? He was named after some kind of mineral or
              something—it was super weird.” 
            </p>
            <p style={{ margin: "0" }}>
              “Quartz,” I say. “It was a nickname.” I haven’t thought about that
              guy in so long. I doubt he’s holding a grudge against me after all
              this time. I fired him right after we opened because I found out
              he wasn’t washing the dishes unless he could actually see food on
              them. Glasses, plates, silverware—anything that came back to the
              kitchen from a table looking fairly clean, he’d just put it
              straight on the drying rack. 
            </p>
            <p style={{ margin: "0" }}>
              If I wouldn’t have fired him, he would have gotten us shut down by
              the health department. 
            </p>
            <p style={{ margin: "0" }}>
              “You should call the police,” Darin says. “We’ll have to file a
              report for insurance.” 
            </p>
            <p style={{ margin: "0" }}>
              Before I object, Brad appears at the back door, his shoes
              crunching the broken glass beneath his feet. Brad has been inside
              taking inventory in order to see if anything was stolen. 
            </p>
            <p style={{ margin: "0" }}>
              He scratches the stubble on his jaw. “They took the croutons.” 
            </p>
            <p style={{ margin: "0" }}>There’s a confused pause. </p>
            <p style={{ margin: "0" }}>
              “Did you say ‘croutons’?” Darin asks. 
            </p>
            <p style={{ margin: "0" }}>
              “Yeah. They took the whole thing of croutons that were prepared
              last night. Nothing else seems to be missing, though.” 
            </p>
            <p style={{ margin: "0" }}>
              That wasn’t at all what I was expecting him to say. If someone
              broke into a restaurant and didn’t take appliances or anything
              else of value, they probably broke in becausethey were hungry. I
              know that kind of desperation firsthand. “I’m not reporting
              this.” 
            </p>
            <p style={{ margin: "0" }}>Darin turns to me. “Why not?” </p>
            <p style={{ margin: "0" }}>“They might catch whoever did it.” </p>
            <p style={{ margin: "0" }}>“That’s the point.” </p>
            <p style={{ margin: "0" }}>
              I grab an empty box out of the dumpster and start picking up
              shards of glass. “I broke into a restaurant once. Stole a turkey
              sandwich.” 
            </p>
            <p style={{ margin: "0" }}>
              Brad and Darin are both staring at me now. “Were you drunk?” Darin
              asks. 
            </p>
            <p style={{ margin: "0" }}>
              “No. I was hungry. I don’t want anyone arrested for stealing
              croutons.” 
            </p>
            <p style={{ margin: "0" }}>
              “Okay, but maybe food was only the beginning. What if they come
              back for appliances next time?” Darin says. “Is the security
              camera still broken?” 
            </p>
            <p style={{ margin: "0" }}>
              He’s been on me to get that repaired for months now. “I’ve been
              busy.” 
            </p>
            <p style={{ margin: "0" }}>
              Darin takes the box of glass from me and starts to pick up the
              remaining pieces. “You should go work on that before they come
              back. Heck, they might even try to hit up Corrigan’s tonight since
              Bib’s was such an easy target.” 
            </p>
            <p style={{ margin: "0" }}>
              “Corrigan’s has working security. And I doubt whoever it was will
              vandalize my new restaurant. It was a matter of convenience, not a
              targeted break-in.” 
            </p>
            <p style={{ margin: "0" }}>“Youhope,” Darin says.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookItStartsWithUsItEnds;
