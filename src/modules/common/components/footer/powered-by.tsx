import { relatedLinks, socialLinks } from "@/config/constants";
import { Anchor, Text } from "@mantine/core";
import React from "react";

export const PoweredBy = ({ className }: { className?: string }) => {
  return (
    <Text c="dimmed" size="sm" className={className}>
      Built with{" "}
      <Anchor href={relatedLinks.nextJs} c="inherit" target="_blank" rel="noopener">
        Next.js
      </Anchor>{" "}
      &{" "}
      <Anchor href={relatedLinks.mantine} c="inherit" target="_blank" rel="noopener">
        Mantine
      </Anchor>
      , Code on{" "}
      <Anchor href={socialLinks.github} c="inherit" target="_blank" rel="noopener">
        GitHub
      </Anchor>
      . Privacy policy is{" "}
      <Anchor href="/privacy" c="inherit">
        here
      </Anchor>
      .
    </Text>
  );
};
