import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const BookRichDadPoorDad = () => {
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
        padding: "76px 71px 104px",
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
            padding: "104px 20px 183px",
            boxSizing: "border-box",
            gap: "59px",
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
              height: "2945px",
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
              padding: "0px 0px 0px 45px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <h3
              style={{
                margin: "0",
                height: "60px",
                position: "relative",
                fontSize: "inherit",
                fontWeight: "700",
                fontFamily: "inherit",
                display: "inline-block",
                zIndex: "1",
              }}
            >
              Rich Dad Poor Dad
            </h3>
          </div>
          <div
            style={{
              width: "900px",
              height: "2539px",
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
              In the quaint town of my upbringing, two paternal figures loomed
              large, each offering contrasting perspectives on wealth and
              success. My own father, affectionately termed "Poor Dad,"
              epitomized the traditionalist's creed: diligent work, academic
              achievement, secure employment, prudent savings, and the promise
              of a comfortable retirement. He championed stability and security
              above all else, cautioning against the perils of risk-taking and
              financial adventurism.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              In stark contrast stood "Rich Dad," the father of my closest
              friend, a visionary entrepreneur, and investor extraordinaire. His
              philosophy diverged sharply from the conventional wisdom espoused
              by my father. Rich Dad believed in the transformative power of
              financial education, advocating for a paradigm shift in our
              understanding of money. He saw money not merely as a means of
              exchange but as a tool for building wealth and achieving true
              financial independence.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              Rich Dad's teachings laid bare the critical distinction between
              assets and liabilities—the former being avenues for generating
              passive income, while the latter drained financial resources. He
              instilled in me the importance of cultivating a portfolio of
              income-generating assets, ranging from real estate to stocks and
              bonds, while minimizing liabilities that encumbered financial
              growth.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              Embracing entrepreneurship as the gateway to financial freedom,
              Rich Dad encouraged me to think like an investor, seizing
              opportunities and embracing calculated risks. He illuminated the
              path to escaping the rat race—the ceaseless pursuit of financial
              security through conventional employment—and charting a course
              toward financial liberation.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              Through Rich Dad's mentorship, I embarked on a journey of
              self-discovery and financial enlightenment. Armed with the tools
              of financial literacy, I ventured into the world of
              entrepreneurship, navigating its challenges with resilience and
              tenacity. Each setback became a lesson, each triumph a testament
              to the transformative power of Rich Dad's wisdom.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}>
              As I reflect on the divergent paths laid before me by Poor Dad and
              Rich Dad, I am reminded of the profound choice that confronts us
              all. Will we cling to the safety of the familiar, or will we dare
              to embrace the unknown and unlock our full potential? In the end,
              the decision lies within each of us—a choice between the security
              of the known and the limitless possibilities that await those bold
              enough to seize them.
            </p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}></p>
            <p style={{ margin: "0" }}></p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BookRichDadPoorDad;
