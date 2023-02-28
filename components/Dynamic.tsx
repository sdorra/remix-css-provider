import { useGlobalStyle } from "lib/css";

type Props = {
  color: string;
  value: string;
};

export default function Dynamic({ color, value }: Props) {
  const className = useGlobalStyle("dynamic-" + color, {
    color,
  });

  return <div className={className}>{value}</div>;
}
