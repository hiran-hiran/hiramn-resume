import React, { VFC } from "react";

type Props = {
  id: string
  type: string
  className: string
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: VFC<Props> = (props) => {
	return (
		<>
      <input
        id={props.id}
        type={props.type}
        className={props.className}
        placeholder={props.placeholder}
        onChange={props.onChange} />
		</>
	);
};

export default TextInput;
