import { Provider } from "@/config/providers";
import "@mantine/core/styles.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider>
      <Component {...pageProps} />
      <Analytics />
    </Provider>
  );
};

export default App;
