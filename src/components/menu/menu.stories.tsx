import type { Meta, StoryObj } from "@storybook/react";
import Menu from "./menu";

const meta: Meta<typeof Menu> = {
  component: Menu,
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Example: Story = {
  render() {
    return <Menu />;
  },
};
