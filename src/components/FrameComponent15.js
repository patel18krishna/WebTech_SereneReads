import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent161 from "./FrameComponent16";
import FrameComponent16 from "./FrameComponent161";

const FrameComponent15 = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/book-civil-war");
  }, [navigate]);

  return (
    <div
      style={{
        width: "1120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "80px",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "20px",
        color: "#240a34",
        fontFamily: "Georgia",
      }}
    >
      <FrameComponent161 image14="/image-12@2x.png" satire="Satire" />
      <FrameComponent16
        image15="/image-15@2x.png"
        civilWar="Civil War "
        byMarkMillarSteveMcnivenD="by Mark Millar, Steve Mcniven, Dexter Vines, Morry Hollowell"
        onGroupButtonClick={onGroupButtonClick}
      />
    </div>
  );
};

export default FrameComponent15;
