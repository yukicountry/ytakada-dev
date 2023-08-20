import Provider from "@/config/providers";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // FOUC対策
    setIsRendered(true);
  }, []);

  return isRendered ? (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  ) : (
    <></>
  );
};

export default App;
