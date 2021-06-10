import Head from 'next/head';
import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';

import fs from 'fs';
import Layout from '../src/components/Layout';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import 'github-markdown-css';
import { useRef } from 'react';
import PrintBtn from '../src/components/PrintBtn';

type Props = {
	cv: string;
};

const Cv: NextPage<Props> = ({ cv }) => {
	const printRef = useRef(null);
	

	return (
		<>
			<Head>
				<title>職務経歴書 | ヒラタの履歴書</title>
			</Head>
      <Layout>
        <PrintBtn printRef={printRef} />
				<div className="cv" ref={printRef}>
					<div className="markdown-body">
						<ReactMarkdown plugins={[gfm]} source={cv} linkTarget={'_blank'} />
					</div>
					<Link href="/">
						<a className="button print-none">Back</a>
					</Link>
				</div>
			</Layout>
		</>
	);
};

export default Cv;

export const getStaticProps: GetStaticProps = async () => {
	const cv = fs.readFileSync(process.cwd() + '/src/cv/cv.md', 'utf8');
	return {
		props: {
			cv,
		},
	};
};
