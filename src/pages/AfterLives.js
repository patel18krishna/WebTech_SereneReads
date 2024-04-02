import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AfterLives = () => {
  const navigate = useNavigate();

  const onGroupIconClick = useCallback(() => {
    navigate("/top-picks");
  }, [navigate]);

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        borderRadius: "40px",
        backgroundColor: "#fff",
        border: "1px solid #000",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "84px 60px 83px 61px",
        gap: "83.5px",
        letterSpacing: "normal",
      }}
    >
      <div
        style={{
          width: "1183px",
          height: "827px",
          position: "relative",
          borderRadius: "40px",
          backgroundColor: "#fff",
          border: "1px solid #000",
          boxSizing: "border-box",
          display: "none",
          maxWidth: "100%",
        }}
      />
      <img
        style={{
          width: "17.5px",
          height: "17.5px",
          position: "relative",
          cursor: "pointer",
          zIndex: "1",
        }}
        loading="lazy"
        alt=""
        src="/group-71.svg"
        onClick={onGroupIconClick}
      />
      <section
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 24px",
          boxSizing: "border-box",
          maxWidth: "100%",
          textAlign: "left",
          fontSize: "50px",
          color: "#240a34",
          fontFamily: "Georgia",
        }}
      >
        <div
          style={{
            width: "950px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "53px",
            maxWidth: "100%",
          }}
        >
          <b
            style={{
              width: "298px",
              position: "relative",
              display: "inline-block",
              zIndex: "1",
            }}
          >
            After Lives
          </b>
          <div
            style={{
              alignSelf: "stretch",
              height: "450px",
              position: "relative",
              fontSize: "40px",
              textAlign: "justify",
              display: "inline-block",
              flexShrink: "0",
              zIndex: "1",
            }}
          >
            Afterlives is a 2020 work of historical fiction by the Nobel
            Prize-winning Zanjibar-born British author Abdulrazak Gurnah. It was
            first published by Bloomsbury Publishing on 17 September 2020. Set
            mainly in the first half of the 20th century, the plot follows four
            protagonists living in an unnamed town on the Swahili coast of what
            is now Tanzania from the time of German colonial rule until a few
            years after independence. In April 2021, the novel was longlisted
            for the Orwell Prize of Political Fiction.
          </div>
        </div>
      </section>
    </div>
  );
};

export default AfterLives;
