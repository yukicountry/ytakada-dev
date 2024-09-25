import { ColorSchemeScript } from "@mantine/core";
import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
