import { relatedLinks, socialLinks } from "@/config/constants";
import { Anchor, DefaultProps, Text } from "@mantine/core";
import React from "react";

const PoweredBy: React.FC<DefaultProps> = (props) => {
  return (
    <Text color="dimmed" size="sm" {...props}>
      Built with{" "}
      <Anchor href={relatedLinks.nextJs} color="inherit" target="_blank" rel="noopener">
        Next.js
      </Anchor>{" "}
      &{" "}
      <Anchor href={relatedLinks.mantine} color="inherit" target="_blank" rel="noopener">
        Mantine
      </Anchor>
      , Code on{" "}
      <Anchor href={socialLinks.github} color="inherit" target="_blank" rel="noopener">
        GitHub
      </Anchor>
      . Privacy policy is{" "}
      <Anchor href="/privacy" color="inherit">
        here
      </Anchor>
      .
    </Text>
  );
};

export default PoweredBy;
