import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FictionContainer from "./FictionContainer";
import HistoricalFictionContainer from "./HistoricalFictionContainer";

const FrameComponent2 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/horror");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/historical-fiction");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/manga");
  }, [navigate]);

  const onGroupContainer3Click = useCallback(() => {
    navigate("/satire");
  }, [navigate]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: "0px 2px 0px 0px",
        gap: "20px",
        textAlign: "left",
        fontSize: "30px",
        color: "#240a34",
        fontFamily: "Georgia",
      }}
    >
      <FictionContainer
        bookGenreCode="/image-3@2x.png"
        bookCategoryCode="Horror"
        propWidth="unset"
        propAlignSelf="unset"
        propOverflow="unset"
        propWidth1="103px"
        onGroupContainer1Click={onGroupContainerClick}
      />
      <HistoricalFictionContainer
        bookGenreCode="/image-11@2x.png"
        bookCategoryCode="Historical fiction"
        onGroupContainer1Click={onGroupContainer1Click}
      />
      <div
        style={{
          height: "289px",
          width: "251px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 10px 0px 0px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            flex: "1",
            borderRadius: "40px",
            backgroundColor: "#f4f5f3",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "33px 69px 55px",
            gap: "53px",
            cursor: "pointer",
            zIndex: "1",
          }}
          onClick={onGroupContainer3Click}
        >
          <div
            style={{
              width: "241px",
              height: "289px",
              position: "relative",
              borderRadius: "40px",
              backgroundColor: "#f4f5f3",
              display: "none",
            }}
          />
          <img
            style={{
              alignSelf: "stretch",
              height: "112px",
              position: "relative",
              maxWidth: "100%",
              overflow: "hidden",
              flexShrink: "0",
              objectFit: "cover",
              zIndex: "1",
            }}
            loading="lazy"
            alt=""
            src="/image-8@2x.png"
          />
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 7px 0px 8px",
            }}
          >
            <div style={{ flex: "1", position: "relative", zIndex: "1" }}>
              Satire
            </div>
          </div>
        </div>
      </div>
      <HistoricalFictionContainer
        bookGenreCode="/image-10@2x.png"
        bookCategoryCode="Manga"
        propGap="53px"
        propAlignSelf="unset"
        propHeight="unset"
        propWidth="109px"
        onGroupContainer1Click={onGroupContainer2Click}
      />
    </div>
  );
};

export default FrameComponent2;
