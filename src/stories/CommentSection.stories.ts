import type { Meta, StoryObj } from "@storybook/react";
import { CommentSection } from "../index";

const meta = {
	title: "Comments/CommentSection",
	component: CommentSection,
	tags: ["autodocs"],
	parameters: { layout: "centered" },
} satisfies Meta<typeof CommentSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const variant: Story = {
	args: { comments: [] },
};
