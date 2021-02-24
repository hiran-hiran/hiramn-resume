import fs from "fs";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../src/components/Layout";
import ReactMarkdown from "react-markdown";
import "github-markdown-css";

type Props = {
	cv: string;
};

const Cv: NextPage<Props> = ({ cv }) => {
	return (
		<Layout>
			<div className="cv">
				<div className="markdown-body">
					<ReactMarkdown>{cv}</ReactMarkdown>
				</div>
				<Link href="/">
					<a className="button">戻る</a>
				</Link>
			</div>
		</Layout>
	);
};

export default Cv;

export const getStaticProps: GetStaticProps = async () => {
	const cv = fs.readFileSync(process.cwd() + "/src/cv/cv.md", "utf8");
	return {
		props: {
			cv,
		},
	};
};
