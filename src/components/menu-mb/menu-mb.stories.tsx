import type { Meta, StoryObj } from "@storybook/react";
import MenuMb from "./menu-mb";

const meta: Meta<typeof MenuMb> = {
  component: MenuMb,
};

export default meta;

type Story = StoryObj<typeof MenuMb>;

export const Example: Story = {
  render() {
    return <MenuMb />;
  },
};
