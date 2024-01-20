import React from "react";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, ...props }) => {
	return (
		<button onClick={onClick} {...props}>
			{text}
		</button>
	);
};

export default Button;
