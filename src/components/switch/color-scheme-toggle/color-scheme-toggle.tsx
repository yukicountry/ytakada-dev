import React from "react";
import { Switch, SwitchProps, useMantineColorScheme, useMantineTheme } from "@mantine/core";
import { TbMoonStars, TbSun } from "react-icons/tb";

type ColorSchemeToggleProps = SwitchProps;

/**
 * カラースキームスイッチ
 */
const ColorSchemeToggle: React.FC<ColorSchemeToggleProps> = (props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  return (
    <Switch
      checked={colorScheme === "dark"}
      onChange={() => toggleColorScheme()}
      size="lg"
      color={colorScheme === "dark" ? "gray" : "dark"}
      onLabel={<TbSun color={theme.colors.yellow[4]} size="1.25rem" />}
      offLabel={<TbMoonStars color={theme.colors.blue[6]} size="1.25rem" />}
      {...props}
    />
  );
};

export default ColorSchemeToggle;
