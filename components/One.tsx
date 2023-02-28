import { useGlobalStyle } from "lib/css";

export default function One() {
  const className = useGlobalStyle("one", {
    color: "red"
  });

  return <div className={className}>One</div>;
}