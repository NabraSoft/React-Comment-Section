import React from "react";
import { Comment } from "../../interfaces";

export interface CommentItemProps
	extends React.HtmlHTMLAttributes<HTMLDivElement> {
	comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, ...props }) => {
	return (
		<div {...props}>
			<div>
				<img src={comment.user.image} />
				<span>{comment.user.name}</span>
			</div>
			<p>{comment.comment}</p>
		</div>
	);
};

export default CommentItem;
