import React from "react";

const Input = ({
	label,
	placeholder,
	type,
	name,
	value,
	onChange,
	className,
	multiple,
	id,
}) => {
	return (
		<>
			<label>{label}</label>
			<input
				placeholder={placeholder}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				className={className}
				multiple={multiple}
				id={id}
			/>
		</>
	);
};

export default Input;
