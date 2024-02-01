import React from "react";
import Comments from "../Comments/Comments";
import Input from "../Input";
import { Comment } from "../../interfaces";

export interface CommentSectionProps
	extends React.HtmlHTMLAttributes<HTMLDivElement> {
	comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({
	comments,
	...props
}) => {
	return (
		<div className="bg-primaryContainer" {...props}>
			<Comments comments={comments} />
			<Input />
		</div>
	);
};

export default CommentSection;
