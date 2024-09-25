import { Anchor, Text } from "@mantine/core";
import React from "react";

const Copyright = ({ className }: { className?: string }) => {
  return (
    <Text c="dimmed" size="sm" className={className}>
      Copyright 2024{" "}
      <Anchor href="/" target="_blank" rel="noopener" c="inherit">
        ytakada.dev
      </Anchor>
    </Text>
  );
};

export default Copyright;
