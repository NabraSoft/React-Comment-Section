import React from "react";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button
			className={`bg-primary text-onPrimary px-8 py-4 rounded-sm${props.className}`}
			{...props}
		>
			{props.children}
		</button>
	);
};

export default Button;
