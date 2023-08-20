import { Box, Text, TextProps, createStyles } from "@mantine/core";
import React, { ReactElement } from "react";

type DateProps = {
  icon: ReactElement;
  date: string;
} & TextProps;

const useStyles = createStyles(() => ({
  icon: {
    transform: "translateY(-50%)",
    lineHeight: 0,
    svg: {
      width: "100%",
      height: "100%",
    },
  },
}));

/**
 * 投稿 日付コンポーネント（作成日、更新日等）
 */
const Date: React.FC<DateProps> = ({ icon, date, ...rest }) => {
  const { classes } = useStyles();

  return (
    <Text pos="relative" pl="1.5rem" {...rest}>
      <Box
        component="span"
        pos="absolute"
        top="50%"
        left={0}
        className={classes.icon}
        w="1.1rem"
        h="1.1rem"
      >
        {icon}
      </Box>

      {date}
    </Text>
  );
};

export default Date;
