import { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useCallback } from 'react';

import Layout from '../src/components/Layout';
import { useRef } from 'react';
import PrintBtn from '../src/components/PrintBtn';
import Td from '../src/components/Td';

type Props = {
  data: any[];
};

const Resume: NextPage<Props> = ({ data }) => {
  const printRef = useRef(null);
  const d = data[0];

  const formatDate = useCallback((date) => {
    const y = date.getFullYear();
    var m = ('00' + (date.getMonth() + 1)).slice(-2);
    var d = ('00' + date.getDate()).slice(-2);
    return `${y}年 ${m}月 ${d}日`;
  }, []);
  const date = formatDate(new Date());

  return (
    <>
      <Head>
        <title>履歴書 | ヒラタの履歴書</title>
      </Head>
      <Layout>
        <PrintBtn printRef={printRef} />
        <div className="resume" ref={printRef}>
          <table>
            <thead>
              <tr className="row01">
                {[...Array(6)].map((i, el) => (
                  <th key={el} />
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
                <Td cols={3} classes="bd-t-s bd-l-s">{d.basic.name_kana}</Td>
                <Td rows={3} classes="bd-t-s bd-l-dt center">{d.basic.gender}</Td>
                <Td rows={4} classes="bd-t-s bd-r-s bd-b-s bd-l-s center img"><img src={d.basic?.img.url} alt="" /></Td>
              </tr>
              <tr>
                <Td rows={2} classes="bd-t-dt bd-l-s">氏 名</Td>
                <Td rows={2} cols={3} classes="bd-t-dt bd-l-s">{d.basic.name}</Td>
              </tr>
              <tr />
              <tr>
                <Td classes="bd-t-dt bd-l-s">生年月日</Td>
                <Td cols={4} classes="bd-t-dt bd-l-s">{d.basic.birth}</Td>
              </tr>
              <tr>
                <Td classes="bd-t-dt bd-l-s">フリガナ</Td>
                <Td cols={5} classes="bd-t-dt bd-r-s bd-l-s">{d.basic.address_kana}</Td>
              </tr>
              <tr>
                <Td classes="bd-t-dt bd-l-s">住 所</Td>
                <Td cols={5} classes="bd-t-dt bd-r-s">{`( 〒${d.basic.zip} )`}</Td>
              </tr>
              <tr>
                <Td rows={2} cols={6} classes="bd-r-s bd-l-s">{ d.basic.address }</Td>
              </tr>
              <tr />
              <tr>
                <Td classes="bd-t-s bd-l-s">電話</Td>
                <Td cols={2} classes="bd-t-s" />
                <Td classes="bd-t-s bd-l-s">携帯電話</Td>
                <Td cols={2} classes="bd-t-s bd-r-s">{ d.basic.phone }</Td>
              </tr>
              <tr>
                <Td classes="bd-t-s bd-l-s">E-mail</Td>
                <Td cols={5} classes="bd-t-s bd-r-s">{d.basic.email}</Td>
              </tr>
              <tr>
                <Td classes="bd-t-s bd-l-s center">年</Td>
                <Td classes="bd-t-s bd-l-s center">月</Td>
                <Td cols={4} classes="bd-t-s bd-r-s bd-l-dt center">学歴・職歴</Td>
              </tr>
              <tr>
                <Td classes="bd-t-db bd-l-s center" />
                <Td classes="bd-t-db bd-l-dt center" />
                <Td cols={4} classes="bd-t-db bd-r-s bd-l-dt center">学歴</Td>
              </tr>
              {d.educational.map((el: any, id: string) => (
                <tr key={id}>
                  <Td classes="bd-t-dt bd-l-s center">{el.year}</Td>
                  <Td classes="bd-t-dt bd-l-dt center">{el.month}</Td>
                  <Td cols={4} classes="bd-t-dt bd-r-s bd-l-dt">{el.school}</Td>
                </tr>
              ))}
              <tr>
                <Td classes="bd-t-dt bd-l-s center" />
                <Td classes="bd-t-dt bd-l-dt center" />
                <Td cols={4} classes="bd-t-dt bd-r-s bd-l-dt center"></Td>
              </tr>
              <tr>
                <Td classes="bd-t-dt bd-l-s center" />
                <Td classes="bd-t-dt bd-l-dt center" />
                <Td cols={4} classes="bd-t-dt bd-r-s bd-l-dt center">職歴</Td>
              </tr>
              {d.work.map((el: any, id: string) => (
                <tr key={id}>
                  <Td classes="bd-t-dt bd-l-s center">{el.year}</Td>
                  <Td classes="bd-t-dt bd-l-dt center">{el.month}</Td>
                  <Td cols={4} classes="bd-t-dt bd-r-s bd-l-dt">{el.school}</Td>
                </tr>
              ))}
              <tr>
                <Td classes="bd-t-dt bd-l-s bd-b-s center" />
                <Td classes="bd-t-dt bd-l-dt bd-b-s center" />
                <Td cols={4} classes="bd-t-dt bd-r-s bd-b-s bd-l-dt">現在に至る</Td>
              </tr>
            </tbody>
          </table>

          <div className="page-break" />
          <table>
            <thead>
              <tr className="row01">
                {[...Array(6)].map((i, el) => (
                  <th key={el} />
                ))}
              </tr>
            </thead>
            <tbody>
              <tr />
              <tr>
                <Td classes="bd-t-s bd-l-s center">年</Td>
                <Td classes="bd-t-s bd-l-dt center">月</Td>
                <Td cols={4} classes="bd-t-s bd-r-s bd-l-dt center">免許・資格</Td>
              </tr>
              {d.license.map((el: any, id: string) => (
                <tr key={id}>
                  <Td classes="bd-t-dt bd-l-s center">{el.year}</Td>
                  <Td classes="bd-t-dt bd-l-dt center">{el.month}</Td>
                  <Td cols={4} classes="bd-t-dt bd-r-s bd-l-dt">{el.school}</Td>
                </tr>
              ))}

              <tr>
                <Td cols={6} classes="bd-t-s bd-r-s bd-l-s">志望動機</Td>
              </tr>
              <tr>
                <Td cols={6} rows={5} classes="bd-t-s bd-r-s bd-b-s bd-l-s" dangerouslyHTML={d.reason}/>
              </tr>
              <tr /><tr /><tr /><tr />
              <tr>
                <Td cols={6} classes="bd-t-s bd-r-s bd-l-s">本人希望記入欄</Td>
              </tr>
              <tr>
                <Td cols={6} rows={5} classes="bd-t-s bd-r-s bd-b-s bd-l-s" dangerouslyHTML={d.request}/>
              </tr>
              <tr /><tr /><tr /><tr />
            </tbody>
          </table>

          <Link href="/">
            <a className="button print-none">Back</a>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default Resume;

export const getStaticProps: GetStaticProps = async () => {
  const key: {} = {
    headers: { 'X-API-KEY': process.env.API_KEY },
  };

  const res = await fetch(process.env.END_POINT + 'resume', key);
  const data = await res.json();

  return {
    props: {
      data: data.contents,
    },
  };
};
