import React from "react";

const Textarea = ({
	label,
	placeholder,
	name,
	rows,
	value,
	onChange,
	className,
}) => {
	return (
		<>
			<label>{label}</label>
			<textarea
				placeholder={placeholder}
				name={name}
				rows={rows}
				value={value}
				onChange={onChange}
				className={className}
			/>
		</>
	);
};

export default Textarea;
