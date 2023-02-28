import Dynamic from "components/Dynamic";
import One from "components/One";
import Two from "components/Two";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <One />
      <Two />
      <Dynamic color="green" value="Green" />
      <Dynamic color="blue" value="Blue" />
    </div>
  );
}
