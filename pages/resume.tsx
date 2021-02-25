import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import Layout from "../src/components/Layout";

type Props = {
	data: any
};

const Resume: NextPage<Props> = ({ data }) => {
	const d = data[0];
	console.log(d);

	return (
		<>
			<Head>
				<title>履歴書 | ヒラタの履歴書</title>
			</Head>
			<Layout>
				<div className="resume">
					<table>
						<thead>
							<tr className="row01">
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr className="row02">
								<td colSpan={2}>履 歴 書</td>
								<td></td>
								<td></td>
								<td></td>
								<td className="date">2021年 2月 25日 現在</td>
							</tr>
							<tr className="row03">
								<td className="bd-t-s bd-l-s"></td>
								<td colSpan={3} className="bd-t-s bd-l-s">
									{d.basic.name_kana}
								</td>
								<td rowSpan={3} className="bd-t-s bd-l-dt center">
									{d.basic.gender}
								</td>
								<td rowSpan={4} className="bd-t-s bd-r-s bd-l-s center img">
									<img src={d.basic?.img.url} alt="" />
								</td>
							</tr>
							<tr>
								<td rowSpan={2} className="bd-t-dt bd-l-s">
									氏 名
								</td>
								<td colSpan={3} rowSpan={2} className="bd-t-dt bd-l-s">
									{d.basic.name}
								</td>
							</tr>
							<tr></tr>
							<tr>
								<td className="bd-t-s bd-l-s">生年月日</td>
								<td colSpan={4} className="bd-t-s bd-l-s">
									{d.basic.birth}
								</td>
							</tr>
							<tr>
								<td className="bd-t-s bd-l-s">フリガナ</td>
								<td colSpan={5} className="bd-t-s bd-r-s bd-l-s">
									{d.basic.address_kana}
								</td>
							</tr>
							<tr>
								<td className="bd-t-dt bd-l-s">住 所</td>
								<td colSpan={5} className="bd-t-dt bd-r-s">
									( 〒{d.basic.zip} )
								</td>
							</tr>
							<tr>
								<td colSpan={6} rowSpan={2} className="bd-r-s bd-l-s">
									{d.basic.address}
								</td>
							</tr>
							<tr></tr>
							<tr>
								<td className="bd-t-s bd-l-s">電話</td>
								<td colSpan={2} className="bd-t-s"></td>
								<td className="bd-t-s bd-l-s">携帯電話</td>
								<td colSpan={2} className="bd-t-s bd-r-s">
									{d.basic.phone}
								</td>
							</tr>
							<tr>
								<td className="bd-t-s bd-l-s">E-mail</td>
								<td colSpan={5} className="bd-t-s bd-r-s">
									{d.basic.email}
								</td>
							</tr>
							<tr>
								<td className="bd-t-s bd-l-s center">年</td>
								<td className="bd-t-s bd-l-dt center">月</td>
								<td colSpan={4} className="bd-t-s bd-r-s bd-l-dt center">
									学歴・職歴
								</td>
							</tr>
							<tr>
								<td className="bd-t-db bd-l-s center"></td>
								<td className="bd-t-db bd-l-dt center"></td>
								<td colSpan={4} className="bd-t-db bd-r-s bd-l-dt center">
									学歴
								</td>
							</tr>
							{d.educational.map((el: any, id: string) => (
								<tr key={id}>
									<td className="bd-t-dt bd-l-s center">{el.year}</td>
									<td className="bd-t-dt bd-l-dt center">{el.month}</td>
									<td colSpan={4} className="bd-t-dt bd-r-s bd-l-dt">
										{el.school}
									</td>
								</tr>
							))}
							<tr>
								<td className="bd-t-dt bd-l-s center"></td>
								<td className="bd-t-dt bd-l-dt center"></td>
								<td colSpan={4} className="bd-t-dt bd-r-s bd-l-dt center"></td>
							</tr>

							<tr>
								<td className="bd-t-dt bd-l-s center"></td>
								<td className="bd-t-dt bd-l-dt center"></td>
								<td colSpan={4} className="bd-t-dt bd-r-s bd-l-dt center">
									職歴
								</td>
							</tr>
							{d.work.map((el: any, id: string) => (
								<tr key={id}>
									<td className="bd-t-dt bd-l-s center">{el.year}</td>
									<td className="bd-t-dt bd-l-dt center">{el.month}</td>
									<td colSpan={4} className="bd-t-dt bd-r-s bd-l-dt">
										{el.school}
									</td>
								</tr>
							))}
							<tr>
								<td className="bd-t-dt bd-b-s bd-l-s center"></td>
								<td className="bd-t-dt bd-b-s bd-l-dt center"></td>
								<td colSpan={4} className="bd-t-dt bd-r-s bd-b-s bd-l-dt">
									現在に至る
								</td>
								<td></td>
							</tr>
						</tbody>
					</table>

					<table>
						<thead>
							<tr className="row01">
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr></tr>
							<tr>
								<td className="bd-t-s bd-l-s center">年</td>
								<td className="bd-t-s bd-l-dt center">月</td>
								<td colSpan={4} className="bd-t-s bd-r-s bd-l-dt center">
									免許・資格
								</td>
							</tr>
							{d.license.map((el: any, id: string) => (
								<tr key={id}>
									<td className="bd-t-dt bd-l-s center">{el.year}</td>
									<td className="bd-t-dt bd-l-dt center">{el.month}</td>
									<td colSpan={4} className="bd-t-dt bd-r-s bd-l-dt">
										{el.school}
									</td>
								</tr>
							))}

							<tr>
								<td colSpan={6} className="bd-t-s bd-r-s bd-l-s">
									志望動機
								</td>
							</tr>
							<tr>
								<td
									colSpan={6}
									rowSpan={5}
									className="bd-t-s bd-r-s bd-b-s bd-l-s"
									dangerouslySetInnerHTML={{ __html: `${d.reason}` }}
								/>
							</tr>
							<tr></tr>
							<tr></tr>
							<tr></tr>
							<tr></tr>

							<tr>
								<td colSpan={6} className="bd-t-s bd-r-s bd-l-s">
									本人希望記入欄
								</td>
							</tr>
							<tr>
								<td
									colSpan={6}
									rowSpan={5}
									className="bd-t-s bd-r-s bd-b-s bd-l-s"
									dangerouslySetInnerHTML={{ __html: `${d.request}` }}
								/>
							</tr>
							<tr></tr>
							<tr></tr>
							<tr></tr>
							<tr></tr>
						</tbody>
					</table>

					<Link href="/">
						<a className="button">Back</a>
					</Link>
				</div>
			</Layout>
		</>
	);
};

export default Resume;

export const getStaticProps: GetStaticProps = async () => {
	const key: {} = {
		headers: { "X-API-KEY": process.env.API_KEY },
	};

	const res = await fetch(process.env.END_POINT + "resume", key);
	const data = await res.json();

	return {
		props: {
			data: data.contents,
		},
	};
};
