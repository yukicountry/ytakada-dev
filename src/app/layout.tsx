import { Provider } from "@/config/providers";
import { ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import { Analytics } from "@vercel/analytics/react";

export const fetchCache = "default-cache";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript forceColorScheme="dark" />
      </head>
      <body>
        <Provider>{children}</Provider>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
