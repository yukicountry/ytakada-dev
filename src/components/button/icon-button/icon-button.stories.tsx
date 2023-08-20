import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./icon-button";
import { TbMail } from "react-icons/tb";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Example: Story = {
  render() {
    return (
      <IconButton>
        <TbMail />
      </IconButton>
    );
  },
};
