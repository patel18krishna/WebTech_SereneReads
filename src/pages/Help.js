import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate();

  const onSereneReadsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      style={{
        width: "100%",
        height: "1695px",
        position: "relative",
        backgroundColor: "#f4f5f3",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "76px 71px 132px",
        boxSizing: "border-box",
        gap: "107px",
        letterSpacing: "normal",
        textAlign: "left",
        fontSize: "36px",
        color: "#000",
        fontFamily: "Georgia",
      }}
    >
      <b
        style={{ position: "relative", flexShrink: "0", cursor: "pointer" }}
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
          justifyContent: "flex-start",
          padding: "0px 58px 2033px 57px",
          boxSizing: "border-box",
          maxWidth: "100%",
          flexShrink: "0",
        }}
      >
        <section
          style={{
            flex: "1",
            borderRadius: "40px",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "42px 78px 139px 79px",
            boxSizing: "border-box",
            gap: "45px",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: "65px",
            color: "#240a34",
            fontFamily: "Georgia",
          }}
        >
          <div
            style={{
              width: "1183px",
              height: "1339px",
              position: "relative",
              borderRadius: "40px",
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
              padding: "0px 1px 0px 0px",
            }}
          >
            <h1
              style={{
                margin: "0",
                height: "78px",
                position: "relative",
                fontSize: "inherit",
                textDecoration: "underline",
                fontWeight: "700",
                fontFamily: "inherit",
                display: "inline-block",
                zIndex: "1",
              }}
            >
              Help
            </h1>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: "1035px",
              position: "relative",
              fontSize: "40px",
              textAlign: "justify",
              display: "inline-block",
              zIndex: "1",
            }}
          >
            <p style={{ margin: "0" }}>
              Welcome to SereneReads! We're here to make your digital library
              experience seamless and enjoyable. If you have any questions or
              need assistance, this help page is designed to guide you.
            </p>
            <p style={{ margin: "0" }}>&nbsp;</p>
            <p style={{ margin: "0" }}>1. Browsing the Collection:</p>
            <ul
              style={{
                margin: "0",
                fontFamily: "inherit",
                fontSize: "inherit",
                paddingLeft: "53px",
              }}
            >
              <li style={{ marginBottom: "0px" }}>
                Search Bar: Use the search bar at the top to find specific
                titles, authors, or genres quickly.
              </li>
              <li style={{ marginBottom: "0px" }}>
                Categories: Explore our curated categories for handpicked
                selections. From fiction to non-fiction, there's something for
                everyone.
              </li>
            </ul>
            <p style={{ margin: "0" }}>&nbsp;</p>
            <p style={{ margin: "0" }}>2. Account Management:</p>
            <ul
              style={{
                margin: "0",
                fontFamily: "inherit",
                fontSize: "inherit",
                paddingLeft: "53px",
              }}
            >
              <li style={{ marginBottom: "0px" }}>
                Sign Up/Log In: Create an account to personalize your
                experience, save favorites, and track your reading history.
              </li>
              <li style={{ marginBottom: "0px" }}>
                Profile Settings: Manage your account details, preferences, and
                privacy settings.
              </li>
            </ul>
            <p style={{ margin: "0" }}>&nbsp;</p>
            <p style={{ margin: "0" }}>3. Technical Support:</p>
            <ul
              style={{
                margin: "0",
                fontFamily: "inherit",
                fontSize: "inherit",
                paddingLeft: "53px",
              }}
            >
              <li>
                Contact Us: Have a technical issue or need assistance? Reach out
                to our support team via the "Contact Us" link.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <div
        style={{
          width: "504px",
          height: "36px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "center",
          maxWidth: "100%",
          fontSize: "30px",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            width: "170px",
            position: "relative",
            display: "inline-block",
            flexShrink: "0",
          }}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
};

export default Help;
