import { useGlobalStyle } from "lib/css";

export default function Two() {
  const className = useGlobalStyle("two", {
    color: "blue",
  });

  return <div className={className}>Two</div>;
}
