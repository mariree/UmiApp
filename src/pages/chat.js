import React, { useState, useEffect } from 'react';
import './chat.less';

const chatPage = () => {
  const [chatData, setChatData] = useState([]);
  useEffect(() => {
    setChatData(() => [
      {
        id: '0001',
        name: '王小虎',
        image: '4',
        lastDialog: '还可以吧',
        time: '昨天',
      },
      {
        id: '0003',
        name: '张三',
        image: '1',
        lastDialog: '还可以吧',
        time: '昨天',
      },
      {
        id: '0004',
        name: '李四',
        image: '12',
        lastDialog: '还可以吧',
        time: '昨天',
      },

      {
        id: '0005',
        name: '神奇',
        image: '15',
        lastDialog: '还可以吧',
        time: '昨天',
      },
    ]);
  }, []);
  return (
    <div className="chatlist">
      {chatData.map((item) => (
        <div className="chatItem" key={item.id}>
          <img src={require('@/img/userImages/user(' + item.image + ').png')} />
          <div className="logContent">
            <h5>{item.name}</h5>
            <span>{item.time}</span>
            <p>{item.lastDialog}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default chatPage;
