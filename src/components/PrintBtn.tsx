import { Button } from "./Button";

type Props = {
  onClick: () => void;
};

const PrintBtn = ({ onClick }: Props) => {
  return (
    <div className="mx-auto max-w-[920]">
      <div className="absolute top-[-60]">
        <Button type="button" onClick={onClick}>
          Print
        </Button>
      </div>
    </div>
  );
};

export default PrintBtn;
