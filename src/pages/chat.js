import React, { useState, useEffect } from 'react';
import './chat.less';

const chatPage = () => {
  const [chatData, setChatData] = useState([]);
  useEffect(() => {
    setChatData(() => [
      {
        id: '0001',
        name: 'admin',
        image: '0',
      },
    ]);
  }, []);
  return (
    <div className="chatlist">
      {chatData.map((item) => {
        return (
          <div className="chatItem" key={item.id}>
            <span className="userImage"></span>
            <span className="userName">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};
export default chatPage;
