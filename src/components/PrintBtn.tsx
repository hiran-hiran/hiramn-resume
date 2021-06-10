import React, { RefObject, VFC } from 'react';
import { useReactToPrint } from 'react-to-print';

type Props = {
	printRef: RefObject<HTMLElement>;
};

const PrintBtn: VFC<Props> = (props) => {
	const handlePrint = useReactToPrint({
		content: () => props.printRef.current,
	});

	return (
		<div className="prtin-btn-container">
			<button className="prtin-btn print-none" onClick={handlePrint}>
				Print
			</button>
		</div>
	);
};

export default PrintBtn;
