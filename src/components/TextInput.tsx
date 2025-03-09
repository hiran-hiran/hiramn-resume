import { clsx } from "clsx";

type Props = {
  id: string;
  type: string;
  className?: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = (props: Props) => {
  return (
    <input
      id={props.id}
      type={props.type}
      className={clsx("w-full rounded-lg bg-gray-100 p-4", props.className)}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
