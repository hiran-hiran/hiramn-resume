import type { RefObject } from "react";
import { useReactToPrint } from "react-to-print";

type Props = {
  printRef: RefObject<HTMLElement>;
};

const PrintBtn = (props: Props) => {
  const handlePrint = useReactToPrint({
    contentRef: props.printRef,
  });

  return (
    <div className="prtin-btn-container">
      <button
        type="button"
        className="prtin-btn print-none"
        onClick={() => handlePrint()}
      >
        Print
      </button>
    </div>
  );
};

export default PrintBtn;
