import React, { useContext, useRef, type CSSProperties } from "react";

type Styles = Record<string, CSSProperties>;

const globalStyleContext = React.createContext<Styles>({});

function useGlobalStyles() {
  const context = useContext(globalStyleContext);
  if (!context) {
    throw new Error(
      "useGlobalStyles must be used within a GlobalStyleProvider"
    );
  }
  return context;
}

export function useGlobalStyle(name: string, props: CSSProperties) {
  const context = useGlobalStyles();
  context[name] = props;
  return name;
}

export function GlobalStyleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const styles = useRef<Styles>({});
  return (
    <globalStyleContext.Provider value={styles.current}>
      {children}
    </globalStyleContext.Provider>
  );
}

function camelCaseToKebabCase(str: string) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}

function toCSS(styles: Styles, name: string) {
  return `.${name} { ${Object.keys(styles[name])
    // @ts-ignore
    .map((k) => `${camelCaseToKebabCase(k)}: ${styles[name][k]};`)
    .join("")} }`;
}

export function GlobalStyle() {
  const context = useGlobalStyles();
  const css = Object.keys(context)
    .map((name) => toCSS(context, name))
    .join("\n");
  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
