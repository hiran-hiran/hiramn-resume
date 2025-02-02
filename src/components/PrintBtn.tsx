type Props = {
  onClick: () => void;
};

const PrintBtn = ({ onClick }: Props) => {
  return (
    <div className="prtin-btn-container">
      <button type="button" className="prtin-btn print-none" onClick={onClick}>
        Print
      </button>
    </div>
  );
};

export default PrintBtn;
