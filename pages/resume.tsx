import React, { VFC } from "react";
import Layout from "../src/components/Layout";

const resume: VFC = () => {
	return (
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
							<td colSpan="2">履 歴 書</td>
							<td></td>
							<td></td>
							<td></td>
							<td className="date">2016年 12月 14日 現在</td>
						</tr>
						<tr className="row03">
							<td className="bd-t-s bd-l-s">フリガナ</td>
							<td colSpan="3" className="bd-t-s bd-l-s">
								ヤマダ タロウ
							</td>
							<td rowSpan="3" className="bd-t-s bd-l-dt center">
								男
							</td>
							<td rowSpan="4" className="bd-t-s bd-r-s bd-l-s center img">
								<img src="/img.jpg" alt="" />
							</td>
						</tr>
						<tr>
							<td rowSpan="2" className="bd-t-dt bd-l-s">
								氏 名
							</td>
							<td colSpan="3" rowSpan="2" className="bd-t-dt bd-l-s">
								山田 太郎
							</td>
						</tr>
						<tr></tr>
						<tr>
							<td className="bd-t-s bd-l-s">生年月日</td>
							<td colSpan="4" className="bd-t-s bd-l-s">
								1987年 01月 01日生 (満29歳)
							</td>
						</tr>
						<tr>
							<td className="bd-t-s bd-l-s">フリガナ</td>
							<td colSpan="5" className="bd-t-s bd-r-s bd-l-s">
								トウキョウトミナトクシバコウエン4-2-8
							</td>
						</tr>
						<tr>
							<td className="bd-t-dt bd-l-s">住 所</td>
							<td colSpan="5" className="bd-t-dt bd-r-s">
								( 〒 105-0011 )
							</td>
						</tr>
						<tr>
							<td colSpan="6" rowSpan="2" className="bd-r-s bd-l-s">
								東京都港区芝公園4ｰ2ｰ8
							</td>
						</tr>
						<tr></tr>
						<tr>
							<td className="bd-t-s bd-l-s">電話</td>
							<td colSpan="2" className="bd-t-s">
								000-1111-2222
							</td>
							<td className="bd-t-s bd-l-s">携帯電話</td>
							<td colSpan="2" className="bd-t-s bd-r-s">
								000-3333-4444
							</td>
						</tr>
						<tr>
							<td className="bd-t-s bd-l-s">E-mail</td>
							<td colSpan="5" className="bd-t-s bd-r-s">
								aaaa@example.com
							</td>
						</tr>
						<tr>
							<td className="bd-t-s bd-l-s center">年</td>
							<td className="bd-t-s bd-l-dt center">月</td>
							<td colSpan="4" className="bd-t-s bd-r-s bd-l-dt center">
								学歴・職歴
							</td>
						</tr>
						<tr>
							<td className="bd-t-db bd-l-s center"></td>
							<td className="bd-t-db bd-l-dt center"></td>
							<td colSpan="4" className="bd-t-db bd-r-s bd-l-dt center">
								学歴
							</td>
						</tr>
						<tr>
							<td className="bd-t-dt bd-l-s center">平成xx</td>
							<td className="bd-t-dt bd-l-dt center">4</td>
							<td colSpan="4" className="bd-t-dt bd-r-s bd-l-dt">
								○○高校 入学
							</td>
						</tr>
						<tr>
							<td className="bd-t-dt bd-l-s center">平成xx</td>
							<td className="bd-t-dt bd-l-dt center">3</td>
							<td colSpan="4" className="bd-t-dt bd-r-s bd-l-dt">
								○○高校 卒業
							</td>
						</tr>
						<tr>
							<td className="bd-t-dt bd-l-s center">平成xx</td>
							<td className="bd-t-dt bd-l-dt center">4</td>
							<td colSpan="4" className="bd-t-dt bd-r-s bd-l-dt">
								○○大学 △△学部 □□学科 入学
							</td>
						</tr>
						<tr>
							<td className="bd-t-dt bd-l-s center">平成xx</td>
							<td className="bd-t-dt bd-l-dt center">3</td>
							<td colSpan="4" className="bd-t-dt bd-r-s bd-l-dt">
								○○大学 △△学部 □□学科 卒業
							</td>
						</tr>
						<tr>
							<td className="bd-t-dt bd-l-s center"></td>
							<td className="bd-t-dt bd-l-dt center"></td>
							<td colSpan="4" className="bd-t-dt bd-r-s bd-l-dt center"></td>
						</tr>
						<tr>
							<td className="bd-t-dt bd-l-s center"></td>
							<td className="bd-t-dt bd-l-dt center"></td>
							<td colSpan="4" className="bd-t-dt bd-r-s bd-l-dt center">
								職歴
							</td>
						</tr>
						<tr>
							<td className="bd-t-dt bd-l-s center">平成xx</td>
							<td className="bd-t-dt bd-l-dt center">4</td>
							<td colSpan="4" className="bd-t-dt bd-r-s bd-l-dt">
								○○株式会社 入社
							</td>
						</tr>
						<tr>
							<td className="bd-t-dt bd-l-s center">平成xx</td>
							<td className="bd-t-dt bd-l-dt center">12</td>
							<td colSpan="4" className="bd-t-dt bd-r-s bd-l-dt">
								○○株式会社 退職
							</td>
						</tr>
						<tr>
							<td className="bd-t-dt bd-l-s center">平成xx</td>
							<td className="bd-t-dt bd-l-dt center">1</td>
							<td colSpan="4" className="bd-t-dt bd-r-s bd-l-dt">
								株式会社○○ 入社
							</td>
							<td></td>
						</tr>
						<tr>
							<td className="bd-t-dt bd-b-s bd-l-s center"></td>
							<td className="bd-t-dt bd-b-s bd-l-dt center"></td>
							<td colSpan="4" className="bd-t-dt bd-r-s bd-b-s bd-l-dt">
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
						<tr className="row03">
							<td className="bd-t-s bd-l-s center">年</td>
							<td className="bd-t-s bd-l-dt center">月</td>
							<td colSpan="4" className="bd-t-s bd-r-s bd-l-dt center">
								賞罰
							</td>
						</tr>
						<tr>
							<td className="bd-t-db bd-l-s center"></td>
							<td className="bd-t-db bd-l-dt center"></td>
							<td colSpan="4" className="bd-t-db bd-r-s bd-l-dt center">
								賞罰なし
							</td>
						</tr>
						<tr>
							<td className="bd-t-dt bd-l-s center"></td>
							<td className="bd-t-dt bd-l-dt center"></td>
							<td colSpan="4" className="bd-t-dt bd-r-s bd-l-dt center"></td>
						</tr>
						<tr>
							<td className="bd-t-s bd-l-s center">年</td>
							<td className="bd-t-s bd-l-dt center">月</td>
							<td colSpan="4" className="bd-t-s bd-r-s bd-l-dt center">
								免許・資格
							</td>
						</tr>
						<tr>
							<td className="bd-t-db bd-l-s center">平成xx</td>
							<td className="bd-t-db bd-l-dt center">1</td>
							<td colSpan="4" className="bd-t-db bd-r-s bd-l-dt">
								普通自動車運転免許 取得
							</td>
						</tr>
						<tr>
							<td className="bd-t-dt bd-l-s center"></td>
							<td className="bd-t-dt bd-l-dt center"></td>
							<td colSpan="4" className="bd-t-dt bd-r-s bd-l-dt"></td>
						</tr>
						<tr>
							<td className="bd-t-dt bd-l-s center"></td>
							<td className="bd-t-dt bd-l-dt center"></td>
							<td colSpan="4" className="bd-t-dt bd-r-s bd-l-dt"></td>
						</tr>
						<tr>
							<td className="bd-t-dt bd-l-s center"></td>
							<td className="bd-t-dt bd-l-dt center"></td>
							<td colSpan="4" className="bd-t-dt bd-r-s bd-l-dt"></td>
						</tr>
						<tr>
							<td colSpan="6" className="bd-t-s bd-r-s bd-l-s">
								本人希望記入欄
							</td>
						</tr>
						<tr>
							<td colSpan="6" rowSpan="5" className="bd-t-s bd-r-s bd-b-s bd-l-s">
								特に希望する事項はありません。
							</td>
						</tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
						<tr></tr>
					</tbody>
				</table>
			</div>
		</Layout>
	);
};

export default resume;
