import LogInButton from "../components/LogInButton";

const LogIn = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        backgroundColor: "#fff",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "227px 20px 226px",
        boxSizing: "border-box",
        letterSpacing: "normal",
      }}
    >
      <LogInButton />
    </div>
  );
};

export default LogIn;
