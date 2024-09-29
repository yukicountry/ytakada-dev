import { Anchor } from "@/modules/common/components/anchor";
import { Group } from "@mantine/core";
import { TbChevronsLeft } from "react-icons/tb";

export const BackButton = ({ href }: { href?: string }) => {
  return (
    <Anchor href={href}>
      <Group gap="xs">
        <TbChevronsLeft />
        Back
      </Group>
    </Anchor>
  );
};
