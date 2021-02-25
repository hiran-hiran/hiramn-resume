import Head from "next/head";
import { NextPage, GetStaticProps } from "next";
import Link from "next/link";

import fs from "fs";
import Layout from "../src/components/Layout";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
import "github-markdown-css";

type Props = {
	cv: string;
};

const Cv: NextPage<Props> = ({ cv }) => {
	return (
		<>
			<Head>
				<title>職務経歴書 | ヒラタの履歴書</title>
			</Head>
			<Layout>
				<div className="cv">
					<div className="markdown-body">
						<ReactMarkdown plugins={[gfm]} source={cv} linkTarget={"_blank"} />
					</div>
					<Link href="/">
						<a className="button">Back</a>
					</Link>
				</div>
			</Layout>
		</>
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
