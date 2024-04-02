import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent4 from "./FrameComponent4";
import FictionContainer from "./FictionContainer";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/night-stories");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/biography");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/fiction");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/poetry");
  }, [navigate]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "20px",
        textAlign: "left",
        fontSize: "30px",
        color: "#240a34",
        fontFamily: "Georgia",
      }}
    >
      <div
        style={{
          height: "289px",
          width: "241px",
          position: "relative",
          cursor: "pointer",
          zIndex: "1",
        }}
        onClick={onGroupContainer3Click}
      >
        <div
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            borderRadius: "40px",
            backgroundColor: "#f4f5f3",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            padding: "57px 69px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              height: "289px",
              width: "241px",
              position: "relative",
              borderRadius: "40px",
              backgroundColor: "#f4f5f3",
              display: "none",
            }}
          />
          <div style={{ flex: "1", position: "relative", zIndex: "1" }}>
            Poetry
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            top: "33px",
            left: "66px",
            width: "103px",
            height: "111px",
            objectFit: "cover",
            zIndex: "2",
          }}
          loading="lazy"
          alt=""
          src="/image-5@2x.png"
        />
      </div>
      <FrameComponent4
        image4="/image-4@2x.png"
        nightStory="Night story"
        onGroupContainer3Click={onGroupContainerClick}
      />
      <FrameComponent4
        image4="/image-7@2x.png"
        nightStory="Biography"
        propWidth="255px"
        propPadding="33px 48px 57px"
        propPadding1="0px 21px"
        onGroupContainer3Click={onGroupContainer2Click}
      />
      <FictionContainer
        bookGenreCode="/image-9@2x.png"
        bookCategoryCode="Fiction"
        onGroupContainer1Click={onGroupContainer1Click}
      />
    </div>
  );
};

export default FrameComponent3;
