import React from "react";
import Button from "../Button";

export interface InputProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Input: React.FC<InputProps> = (props) => {
	return (
		<form {...props}>
			<textarea></textarea>
			<Button>Comment</Button>
		</form>
	);
};

export default Input;
