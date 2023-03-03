import { useGlobalStyle } from "lib/css";

export default function One() {
  const className = useGlobalStyle("one", {
    backgroundColor: "red",
    color: "white"
  });

  return <div className={className}>One</div>;
}