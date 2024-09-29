"use client";

import { Box, Button, Title } from "@mantine/core";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Box mt="xl">
      <Title order={2}>Something went wrong!</Title>
      <Button mt="lg" variant="default" onClick={() => reset()}>
        Try again
      </Button>
    </Box>
  );
}
