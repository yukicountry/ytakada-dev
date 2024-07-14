import { Anchor, DefaultProps, Text } from "@mantine/core";
import React from "react";

const Copyright: React.FC<DefaultProps> = (props) => {
  return (
    <Text color="dimmed" size="sm" {...props}>
      Copyright 2024{" "}
      <Anchor href="/" target="_blank" rel="noopener" color="inherit">
        ytakada.dev
      </Anchor>
    </Text>
  );
};

export default Copyright;
