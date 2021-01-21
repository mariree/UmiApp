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
const indexPage = (props) => {
  if (props.location.pathname === '/login') {
    return <LoginPage />;
  }
  return (
    <>
      <div className="headWrap">
        <span className="text">chatroom</span>
      </div>
      {props.children}
      <Footer />
    </>
  );
};
export default indexPage;
