import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import GroupComponent from "./GroupComponent";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/masashi-kishimoto");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/stan-lee");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/famous-authors");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/jk-rawling");
  }, [navigate]);

  return (
    <section
      style={{
        width: "1255px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 0px 37px 20px",
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
          width: "1054px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 20px 0px 0px",
          boxSizing: "border-box",
          gap: "95px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "0px 24px 0px 20px",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              width: "538px",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              maxWidth: "100%",
              cursor: "pointer",
            }}
            onClick={onGroupContainer3Click}
          >
            <h2
              style={{
                margin: "0",
                height: "60px",
                flex: "1",
                position: "relative",
                fontSize: "inherit",
                textDecoration: "underline",
                fontWeight: "700",
                fontFamily: "inherit",
                display: "inline-block",
                maxWidth: "100%",
              }}
            >
              FAMOUS AUTHORS
            </h2>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "14px",
            maxWidth: "100%",
            fontSize: "30px",
          }}
        >
          <GroupComponent
            rectangle17="/rectangle-17@2x.png"
            nameMasashiKishimoto="Name: Masashi Kishimoto
"
            age49="Age: 49
"
            nationalityJapanese="Nationality: Japanese
"
            famousWorkNaruto="Famous work: Naruto"
            onGroupContainer2Click={onGroupContainerClick}
          />
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "63px",
                maxWidth: "100%",
                cursor: "pointer",
              }}
              onClick={onGroupContainer4Click}
            >
              <div
                style={{
                  flex: "1",
                  borderRadius: "40px",
                  backgroundColor: "#fff",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "44px 66px",
                  boxSizing: "border-box",
                  minWidth: "473px",
                  minHeight: "248px",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    height: "248px",
                    width: "728px",
                    position: "relative",
                    borderRadius: "40px",
                    backgroundColor: "#fff",
                    display: "none",
                    maxWidth: "100%",
                  }}
                />
                <div style={{ position: "relative", zIndex: "1" }}>
                  <p style={{ margin: "0" }}>Name: Joanne Rowling</p>
                  <p style={{ margin: "0" }}>Age: 58</p>
                  <p style={{ margin: "0" }}>Nationality: British</p>
                  <p style={{ margin: "0" }}>
                    Famous work: Harry Potter Series
                  </p>
                </div>
              </div>
              <img
                style={{
                  height: "289px",
                  width: "241px",
                  position: "relative",
                  borderRadius: "40px",
                  objectFit: "cover",
                }}
                loading="lazy"
                alt=""
                src="/rectangle-18@2x.png"
              />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 0px 0px 2px",
                boxSizing: "border-box",
                maxWidth: "100%",
                marginTop: "-25px",
              }}
            >
              <GroupComponent
                rectangle17="/rectangle-19@2x.png"
                nameMasashiKishimoto="Name: 	Stanley Martin Lieber
"
                age49="Age: died at 95 (2018)
"
                nationalityJapanese="Nationality: American
"
                famousWorkNaruto="Famous work: Marvel Comics"
                propAlignSelf="unset"
                propFlex="1"
                propFlexWrap="wrap"
                propPadding="52px 57px 60px"
                propMinWidth="473px"
                propMinHeight="unset"
                onGroupContainer2Click={onGroupContainer2Click}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
