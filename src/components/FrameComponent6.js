const FrameComponent6 = () => {
  return (
    <header
      style={{
        width: "1389px",
        height: "118px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "0px 0px 76px 20px",
        boxSizing: "border-box",
        maxWidth: "100%",
        textAlign: "left",
        fontSize: "36px",
        color: "#000",
        fontFamily: "Georgia",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          width: "1316px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "0px 20px 0px 0px",
          boxSizing: "border-box",
          gap: "20px",
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "1px 0px 0px",
          }}
        >
          <b style={{ position: "relative", whiteSpace: "nowrap" }}>
            SereneReads
          </b>
        </div>

          <input
            type="text"
            placeholder="   Search here for books"
            style={{
            height: "43px",
            width: "531px",
            position: "relative",
            borderRadius: "30px",
            backgroundColor: "#fff",
            border: "1px solid #4f6f52",
            boxSizing: "border-box",
            maxWidth: "100%",
    }}
  />
        </div>
    </header>
  );
};

export default FrameComponent6;
