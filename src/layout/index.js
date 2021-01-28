import React, { useState } from 'react';
import { history } from 'umi';
import './index.less';
import LoginPage from '@/pages/login';

const Footer = () => {
  const [menuIndex, setMenuIndex] = useState(0);

  const menuData = [
    {
      index: 0,
      title: '聊天',
      path: '/',
      icon: 'chat',
    },
    {
      index: 1,
      title: '联系人',
      path: '/users',
      icon: 'users',
    },
    {
      index: 3,
      title: '发现',
      path: '/find',
      icon: 'find',
    },
    {
      index: 4,
      title: '我的',
      path: '/mine',
      icon: 'mine',
    },
  ];
  const changeTab = (item) => {
    setMenuIndex(item.index);
    history.push(item.path);
  };
  return (
    <div className="footWrap">
      {menuData.map((item) => (
        <div
          className="footItem"
          key={item.index}
          onClick={() => changeTab(item)}
        >
          <img
            src={require('@/img/' +
              item.icon +
              (menuIndex == item.index ? '1' : '') +
              '.png')}
          />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
const indexPage = (props) => {
  const [headText, setHeadText] = useState('聊天室');
  if (props.location.pathname === '/login') {
    return <LoginPage />;
  }
  return (
    <>
      <div className="headWrap">
        <span className="text">{headText}</span>
      </div>
      <div className="bodyWrap">{props.children}</div>
      <Footer />
    </>
  );
};
export default indexPage;
