import { createTheme, MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

type ProviderProps = {
  children: ReactNode;
};

export const Provider = ({ children }: ProviderProps) => {
  const theme = createTheme({
    fontFamily: "'Noto Sans JP', sans-serif",
  });

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
