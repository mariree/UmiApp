import React, { useState } from 'react';
import './index.less';
import loginPage from '@/pages/login';

const Header = () => {
  <div className="headWrap">
    <span className="text">chatroom</span>
  </div>;
};
const Footer = () => {
  const [menuIndex, setMenuIndex] = useState(0);
  const menuData = [
    {
      index: 0,
      title: '聊天',
      path: '/chat',
      icon: '',
    },
    {
      index: 1,
      title: '联系人',
      path: '/users',
      icon: '',
    },
    {
      index: 3,
      title: '发现',
      path: '/find',
      icon: '',
    },
    {
      index: 4,
      title: '我',
      path: '/mine',
      icon: '',
    },
  ];
  return <div className="footWrap"></div>;
};
const indexPage = () => {
  if (props.location.pathname === '/login') {
    return <loginPage></loginPage>;
  }
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
export default indexPage;
