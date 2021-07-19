import React, { VFC } from 'react';

type Props = {
	cols?: number;
	rows?: number;
	classes?: string;
	children?: string | React.ReactElement;
	dangerouslyHTML?: string
};

const Td: VFC<Props> = (props) => {
	return (
		<>
			{props.dangerouslyHTML ? (
				<td
					colSpan={props.cols}
					rowSpan={props.rows}
					className={props.classes}
					dangerouslySetInnerHTML={{__html: props.dangerouslyHTML}}
				/>
			) : (
				<td colSpan={props.cols} rowSpan={props.rows} className={props.classes}>
					{props.children}
				</td>
			)}
		</>
	);
};

export default Td;
