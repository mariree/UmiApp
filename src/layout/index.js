import React, { useState } from 'react';
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
      title: '我',
      path: '/mine',
      icon: 'mine',
    },
  ];
  return <div className="footWrap">{menuData.map((item) => {})}</div>;
};
const indexPage = (props) => {
  if (props.location.pathname === '/login') {
    return <LoginPage />;
  }
  return (
    <>
      <div className="headWrap">
        <span className="text">聊天室</span>
      </div>
      <div className="bodyWrap">{props.children}</div>
      <Footer />
    </>
  );
};
export default indexPage;
