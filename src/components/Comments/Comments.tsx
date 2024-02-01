import React from "react";
import { Comment } from "../../interfaces";
import CommentItem from "./CommentItem";

export interface CommentsProps
	extends React.HtmlHTMLAttributes<HTMLDivElement> {
	comments: Comment[];
}

const Comments: React.FC<CommentsProps> = ({ comments, ...props }) => {
	return (
		<div {...props}>
			{comments.map((comment: Comment) => (
				<CommentItem key={comment.id} comment={comment} />
			))}
		</div>
	);
};

export default Comments;
