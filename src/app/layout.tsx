import { Provider } from "@/config/providers";
import { ColorSchemeScript } from "@mantine/core";
import "@mantine/core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import { Roboto_Mono } from "next/font/google";

export const fetchCache = "default-cache";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja" className={robotoMono.variable}>
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
