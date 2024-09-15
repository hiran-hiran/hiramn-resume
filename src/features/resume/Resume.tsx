"use client";

import Link from "next/link";
import { useCallback } from "react";

import { Layout } from "@/components/Layout";
import PrintBtn from "@/components/PrintBtn";
import Td from "@/components/Td";
import { getResume } from "@/lib/newt";
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

type Props = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  resume: any;
};

export default function Resume({ resume }: Props) {
  const router = useRouter();
  const session = useSessionContext();
  const printRef = useRef(null);

  const formatDate = useCallback((date: Date) => {
    const y = date.getFullYear();
    // biome-ignore lint/style/useTemplate: <explanation>
    const m = ("00" + (date.getMonth() + 1)).slice(-2);
    // biome-ignore lint/style/useTemplate: <explanation>
    const d = ("00" + date.getDate()).slice(-2);
    return `${y}年 ${m}月 ${d}日`;
  }, []);
  const date = formatDate(new Date());

  if (session.isLoading) {
    return <p>Loading...</p>;
  }

  if (!session.session) {
    router.push("/login");
  }

  return (
    <Layout>
      <PrintBtn printRef={printRef} />
      <div className="resume" ref={printRef}>
        <table>
          <thead>
            <tr className="row01">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <th key={i} />
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="row02">
              <Td cols={3}>履 歴 書</Td>
              <Td cols={3} classes="date">{`${date} 現在`}</Td>
            </tr>
            <tr className="row03">
              <Td classes="bd-t-s bd-l-s" />
              <Td cols={3} classes="bd-t-s bd-l-s">
                {resume.basic.name_kana}
              </Td>
              <Td rows={3} classes="bd-t-s bd-l-dt center">
                {resume.basic.gender}
              </Td>
              <Td rows={4} classes="bd-t-s bd-r-s bd-b-s bd-l-s center img">
                <img src={resume.basic?.image.src} alt="" />
              </Td>
            </tr>
            <tr>
              <Td rows={2} classes="bd-t-dt bd-l-s">
                氏 名
              </Td>
              <Td rows={2} cols={3} classes="bd-t-dt bd-l-s">
                {resume.basic.name}
              </Td>
            </tr>
            <tr />
            <tr>
              <Td classes="bd-t-dt bd-l-s">生年月日</Td>
              <Td cols={4} classes="bd-t-dt bd-l-s">
                {resume.basic.birth}
              </Td>
            </tr>
            <tr>
              <Td classes="bd-t-dt bd-l-s">フリガナ</Td>
              <Td cols={5} classes="bd-t-dt bd-r-s bd-l-s">
                {resume.basic.address_kana}
              </Td>
            </tr>
            <tr>
              <Td classes="bd-t-dt bd-r-s bd-l-s">住 所</Td>
              <Td
                cols={5}
                classes="bd-t-dt bd-r-s"
              >{`( 〒${resume.basic.zip} )`}</Td>
            </tr>
            <tr>
              <Td rows={2} cols={6} classes="bd-r-s bd-t-dt bd-l-s">
                {resume.basic.address}
              </Td>
            </tr>
            <tr />
            <tr>
              <Td classes="bd-t-s bd-l-s">電話</Td>
              <Td cols={2} classes="bd-t-s" />
              <Td classes="bd-t-s bd-l-s">携帯電話</Td>
              <Td cols={2} classes="bd-t-s bd-r-s">
                {resume.basic.phone}
              </Td>
            </tr>
            <tr>
              <Td classes="bd-t-s bd-r-s bd-l-s">E-mail</Td>
              <Td cols={5} classes="bd-t-s bd-r-s">
                {resume.basic.email}
              </Td>
            </tr>
            <tr>
              <Td classes="bd-t-s bd-l-s center">年</Td>
              <Td classes="bd-t-s bd-l-s center">月</Td>
              <Td cols={4} classes="bd-t-s bd-r-s bd-l-dt center">
                学歴・職歴
              </Td>
            </tr>
            <tr>
              <Td classes="bd-t-db bd-l-s center" />
              <Td classes="bd-t-db bd-l-dt center" />
              <Td cols={4} classes="bd-t-db bd-r-s bd-l-dt center">
                学歴
              </Td>
            </tr>
            {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
            {resume.educational.map((val: any) => (
              <tr key={val._id}>
                <Td classes="bd-t-dt bd-l-s center">{val.data.year}</Td>
                <Td classes="bd-t-dt bd-l-dt center">{val.data.month}</Td>
                <Td cols={4} classes="bd-t-dt bd-r-s bd-l-dt">
                  {val.data.school}
                </Td>
              </tr>
            ))}
            <tr>
              <Td classes="bd-t-dt bd-l-s center" />
              <Td classes="bd-t-dt bd-l-dt center" />
              <Td cols={4} classes="bd-t-dt bd-r-s bd-l-dt center" />
            </tr>
            <tr>
              <Td classes="bd-t-dt bd-l-s center" />
              <Td classes="bd-t-dt bd-l-dt center" />
              <Td cols={4} classes="bd-t-dt bd-r-s bd-l-dt center">
                職歴
              </Td>
            </tr>
            {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
            {resume.career.map((val: any) => (
              <tr key={val._id}>
                <Td classes="bd-t-dt bd-l-s center">{val.data.year}</Td>
                <Td classes="bd-t-dt bd-l-dt center">{val.data.month}</Td>
                <Td cols={4} classes="bd-t-dt bd-r-s bd-l-dt">
                  {val.data.school}
                </Td>
              </tr>
            ))}
            <tr>
              <Td classes="bd-t-dt bd-l-s bd-b-s center" />
              <Td classes="bd-t-dt bd-l-dt bd-b-s center" />
              <Td cols={4} classes="bd-t-dt bd-r-s bd-b-s bd-l-dt" />
              {/* 現在に至る */}
              {/* </Td> */}
            </tr>
          </tbody>
        </table>

        <div className="page-break" />
        <table>
          <thead>
            <tr className="row01">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <th key={i} />
              ))}
            </tr>
          </thead>
          <tbody>
            <tr />
            <tr>
              <Td classes="bd-t-s bd-l-s center">年</Td>
              <Td classes="bd-t-s bd-l-dt center">月</Td>
              <Td cols={4} classes="bd-t-s bd-r-s bd-l-dt center">
                免許・資格
              </Td>
            </tr>
            {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
            {resume.license.map((val: any) => (
              <tr key={val._id}>
                <Td classes="bd-t-dt bd-l-s center">{val.data.year}</Td>
                <Td classes="bd-t-dt bd-l-dt center">{val.data.month}</Td>
                <Td cols={4} classes="bd-t-dt bd-r-s bd-l-dt">
                  {val.data.school}
                </Td>
              </tr>
            ))}

            <tr>
              <Td cols={6} classes="bd-t-s bd-r-s bd-l-s">
                志望動機
              </Td>
            </tr>
            <tr>
              <Td
                cols={6}
                rows={5}
                classes="bd-t-s bd-r-s bd-b-s bd-l-s"
                dangerouslyHTML={resume.reason}
              />
            </tr>
            <tr />
            <tr />
            <tr />
            <tr />
            <tr>
              <Td cols={6} classes="bd-t-s bd-r-s bd-l-s">
                本人希望記入欄
              </Td>
            </tr>
            <tr>
              <Td
                cols={6}
                rows={5}
                classes="bd-t-s bd-r-s bd-b-s bd-l-s"
                dangerouslyHTML={resume.request}
              />
            </tr>
            <tr />
            <tr />
            <tr />
            <tr />
          </tbody>
        </table>

        <Link href="/" className="button print-none">
          Back
        </Link>
      </div>
    </Layout>
  );
}
