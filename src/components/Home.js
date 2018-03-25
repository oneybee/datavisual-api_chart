import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';

export default function Home() {
  const repoReadmeLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/oneybee/datavisual-api_chart#readme"
    >{text}</Interactive>
  );

  return (
    <div>
      <p style={s.p}>
        이 페이지는 '한발 먼저 가본 문과생이 알려주는, 데이터 시각화 - API data를 chart로 표현하자!' 를 구현한 페이지입니다.
        자신이 만든 코드와 비교도 해보고 clone해서 뜯어보고 수정해보세요. 
      </p>
      <p style={s.p}>
        한발 먼저 가본 문과생이 알려주는, 데이터 시각화 - API data를 chart로 표현하자!{repoReadmeLink('repository readme')} 
      </p>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example"
        >Example page</Interactive>
      </div>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=foo&field2=bar#boom!"
        >Example two deep with query and hash</Interactive>
      </div>
    </div>
  );
}
