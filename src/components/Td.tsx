import type { ReactElement } from "react";

type Props = {
  cols?: number;
  rows?: number;
  classes?: string;
  children?: string | ReactElement;
  dangerouslyHTML?: string;
};

const Td = (props: Props) => {
  return (
    <>
      {props.dangerouslyHTML ? (
        <td
          colSpan={props.cols}
          rowSpan={props.rows}
          className={props.classes}
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: props.dangerouslyHTML }}
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
